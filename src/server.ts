import express from 'express';
import payload from 'payload';
import {User} from "./payload-types";
import {seed} from "./seed";

require('dotenv').config();
const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});


// Add your own express routes here

// Initialize Payload
const start = async () => {
  await payload.initAsync({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  if (process.env.PAYLOAD_SEED === 'true') {
    await seed(payload);
  }



  const router = express.Router();

  router.use(payload.authenticate);

  router.get('/', (req, res) => {
    // @ts-ignore
    const user: User = req.user as User;
    if (user) {
      return res.send(`Authenticated successfully as ${user.email}.`);
    }

    return res.send('Not authenticated');
  });

  app.use('/some-route-here', router);

  app.listen(process.env.HOST_PORT);
}

start();
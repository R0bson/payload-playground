import express from 'express';
import payload from 'payload';
import {User} from "./payload-types";

require('dotenv').config();
const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
  },
})


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

// Add your own express routes here

app.listen(3010);

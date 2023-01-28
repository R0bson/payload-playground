import {buildConfig} from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Examples from "./collections/Examples";
import Media from "./collections/Media";
import Companies from "./collections/Companies";

export default buildConfig({
    serverURL: 'http://localhost:3010',
    admin: {
        user: Users.slug,
    },
    collections: [
        Users,
        Media,
        Companies,
        Examples,
    ],
    upload: {
        limits: {
            fileSize: 10 * 1024 * 1024,
        },
    },
    rateLimit: {
        window: 60 * 1000,
        max: 50,
        trustProxy: true,
    },
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    },
});

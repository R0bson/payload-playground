import {CollectionConfig} from 'payload/types';

const Users: CollectionConfig = {
    slug: 'users',
    auth: {
        useAPIKey: true,
        maxLoginAttempts: 10,
        lockTime: 4 * 60 * 60 * 1000, // 4 hours
        // Forgot password email template
        // https://payloadcms.com/docs/authentication/config#forgot-password
    },
    admin: {
        useAsTitle: 'email',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            saveToJWT: true,
        },
        {
            name: 'role',
            type: 'select',
            required: true,
            saveToJWT: true,
            options: [
                'user',
                'admin',
                'editor',
                'developer',
            ],
        }
    ],
};

export default Users;
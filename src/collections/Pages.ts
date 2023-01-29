// const payload = require('payload');
import { CollectionConfig } from 'payload/types';

export const Pages: CollectionConfig = {
    slug: 'pages',
    labels: {
        singular: 'Page',
        plural: 'Pages',
    },
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true
        },
        {
            name: 'excerpt',
            type: 'text',
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            admin: {
                position: 'sidebar',
            }
        },
        {
            name: 'form',
            label: 'Form',
            type: 'relationship',
            relationTo: 'forms',
        }
    ],
};
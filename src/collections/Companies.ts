import {CollectionConfig} from 'payload/types';

const Companies: CollectionConfig = {
    slug: 'companies',
    versions: {
        drafts: {
            autosave: false,
        },
        retainDeleted: true,
    },
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
        },
        {
            name: 'form',
            label: 'Form',
            type: 'relationship',
            relationTo: 'forms',
        }
    ],
};

export default Companies;
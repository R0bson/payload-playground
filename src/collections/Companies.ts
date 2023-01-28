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
    ],
};

export default Companies;
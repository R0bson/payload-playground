import {CollectionConfig} from 'payload/types';

const Media: CollectionConfig = {
    slug: 'media',
    fields: [
        {
            name: 'name',
            type: 'text',
        },
        {
            name: 'alt',
            type: 'text',
        },
    ],
    upload: {
        staticURL: '/media',
        staticDir: 'media',
        // @ts-ignore
        hash: {
            algorithm: 'md5', // any algo compatible with Node.js crypto.createHash
            truncate: 20, // optional, for shorter hashes
        },
        imageSizes: [
            {
                name: 'thumbnail',
                width: 300,
                height: 300,
                position: 'centre',
            },
            {
                name: 'card',
                width: 768,
                height: 1024,
                position: 'centre',
            },
            {
                name: 'wide_smartphone_xs',
                width: 400,
                // By specifying `null` or leaving a height undefined,
                // the image will be sized to a certain width,
                // but it will retain its original aspect ratio
                // and calculate a height automatically.
                height: null,
                position: 'centre',
            },
            {
                name: 'wide_smartphone',
                width: 600,
                // By specifying `null` or leaving a height undefined,
                // the image will be sized to a certain width,
                // but it will retain its original aspect ratio
                // and calculate a height automatically.
                height: null,
                position: 'centre',
            },
            {
                name: 'wide_tablet',
                width: 1024,
                // By specifying `null` or leaving a height undefined,
                // the image will be sized to a certain width,
                // but it will retain its original aspect ratio
                // and calculate a height automatically.
                height: null,
                position: 'centre',
            },
            {
                name: 'wide_desktop',
                width: 1440,
                // By specifying `null` or leaving a height undefined,
                // the image will be sized to a certain width,
                // but it will retain its original aspect ratio
                // and calculate a height automatically.
                height: null,
                position: 'centre',
            },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
};

export default Media;
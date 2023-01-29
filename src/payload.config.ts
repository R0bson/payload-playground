import {buildConfig} from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Examples from "./collections/Examples";
import Media from "./collections/Media";
import Companies from "./collections/Companies";
import computeBlurhashPlugin from 'payload-blurhash-plugin';
import webpPlugin from "payload-webp";
import { defaultResizeFactory } from "payload-webp";
import {WebpPluginOptions} from "payload-webp/lib/config.interface";
import formBuilderPlugin from "@payloadcms/plugin-form-builder";
import {Block} from "payload/types";
import {Pages} from "./collections/Pages";
import seoPlugin from '@payloadcms/plugin-seo';
import Posts from "./collections/Posts";
import hashUploadPlugin from 'payload-hash-upload';
import nestedDocsPlugin from "@payloadcms/plugin-nested-docs";

const colorField: Block = {
    slug: 'color',
    labels: {
        singular: 'Color',
        plural: 'Colors',
    },
    fields: [
        {
            name: 'value',
            type: 'text',
        }
    ]
}

const webPluginOptions: WebpPluginOptions  = {
    // Resize main image to be max
    maxResizeOpts: {
        width: 1920,
        options: {
            withoutEnlargement: true,
            fit: 'inside',
        }
    },
    overwrite: false,
    collections: ['media']
}

export default buildConfig({
    serverURL: process.env.HOST_URL,
    admin: {
        user: Users.slug,
    },
    collections: [
        Pages,
        Posts,
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
    plugins: [
        hashUploadPlugin,
        formBuilderPlugin({
            // handlePayment: handleFormPayments,
            // beforeEmail: prepareFormEmails,
            redirectRelationships: [
                'pages'
            ],
            formOverrides: {
                // labels: {
                //   singular: 'Contact Form',
                //   plural: 'Contact Forms'
                // },
                fields: [
                    {
                        name: 'name',
                        type: 'text',
                    }
                ]
            },
            fields: {
                payment: true,
                colorField,
                // payment: {
                //     paymentProcessor: {
                //       options: [
                //         {
                //           label: 'Stripe',
                //           value: 'stripe'
                //         },
                //       ],
                //       defaultValue: 'stripe',
                //     },
                // },
            },
        }),
        seoPlugin({
            collections: [
                'pages',
            ],
            uploadsCollection: 'media',
// @ts-ignore
            generateTitle: ({ doc }) => `${doc.title.value} | Payload Playground`,
// @ts-ignore
            generateDescription: ({ doc }) => doc.excerpt,
            tabbedUI: true,
        }),
        computeBlurhashPlugin(), // https://github.com/mad-gooze/fast-blurhash https://github.com/woltapp/blurhash
        // webpPlugin(webPluginOptions),
        nestedDocsPlugin({
            collections: ["pages"],
            // @ts-ignore
            generateLabel: (_, doc) => doc.title,
            generateURL: (docs) =>
                docs.reduce((url, doc) => `${url}/${doc.slug}`, ""),
        }),
    ],
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    },
});

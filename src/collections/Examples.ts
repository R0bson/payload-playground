import {Block, CollectionConfig, Field} from 'payload/types';
import type {
    RichTextCustomElement,
    RichTextCustomLeaf,
} from 'payload/types';

const QuoteBlock: Block = {
    slug: 'Quote', // required
    fields: [ // required
        {
            name: 'quoteHeader',
            type: 'text',
            required: true,
        },
        {
            name: 'quoteText',
            type: 'text',
        },
    ]
};



const sliderField: Field = {
    name: 'slider', // required
    type: 'array', // required
    label: 'Image Slider',
    minRows: 2,
    maxRows: 10,
    labels: {
        singular: 'Slide',
        plural: 'Slides',
    },
    fields: [ // required
        {
            name:'some_meta',
        type:'text',
            admin: {
                position: 'sidebar',
                readOnly: true,
            }
        },
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'caption',
            type: 'text',
        }
    ],
    admin: {
        components: {
            //@ts-ignore
            RowLabel: ({data, index}) => {
                return data?.title || `Slide ${String(index).padStart(2, '0')}`;
            },
        },
    },
}
// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Examples: CollectionConfig = {
    slug: 'examples',


    admin: {
        useAsTitle: 'someField',
    },
    fields: [
        {
            name: 'someField',
            type: 'text',
            index: true,

        },
        sliderField,
        {
            name: 'layout', // required
            type: 'blocks', // required
            minRows: 1,
            maxRows: 20,
            blocks: [ // required
                QuoteBlock
            ]
        },
        {
            name: 'enableCoolStuff', // required
            type: 'checkbox', // required
            label: 'Click me to see fanciness',
            defaultValue: false,
        },
        {
            name: 'trackingCode', // required
            type: 'code', // required
            required: true,
            admin: {
                language: 'javascript'
            }
        },
        {
            name: 'customerJSON', // required
            type: 'json', // required
            required: true,
        },
        {
            label: ({ data }) => data?.title || 'Untitled',
            type: 'collapsible', // required
            fields: [ // required
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'someTextField',
                    type: 'text',
                    required: true,
                },
            ],
        },
        // {
        //     name: 'time', // required
        //     type: 'date', // required
        //     label: 'Event Start Time',
        //     defaultValue: '1988-11-05T8:00:00.000+05:00',
        //     admin: {
        //         date: {
        //             // All config options above should be placed here
        //             pickerAppearance: 'timeOnly',
        //         }
        //     }
        // },
        {
            name: 'contact', // required
            type: 'email', // required
            label: 'Contact Email Address',
            required: true,
        },
        {
            name: 'pageMeta', // required
            type: 'group', // required
            fields: [ // required
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                    minLength: 20,
                    maxLength: 100,
                },
                {
                    name: 'description',
                    type: 'textarea',
                    required: true,
                    minLength: 40,
                    maxLength: 160,
                }
            ],
        },
        {
            name: 'age', // required
            type: 'number', // required
            required: true,
            admin: {
                step: 1,
            }
        },
        {
            name: 'location',
            type: 'point',
            label: 'Location',
        },
        {
            name: 'color', // required
            type: 'radio', // required
            options: [ // required
                {
                    label: 'Mint',
                    value: 'mint',
                },
                {
                    label: 'Dark Gray',
                    value: 'dark_gray',
                },
            ],
            defaultValue: 'mint', // The first value in options.
            admin: {
                layout: 'horizontal',
            }
        },
        {
            name: 'owner', // required
            type: 'relationship', // required
            relationTo: ['users', 'companies'], // required
            hasMany: false,
        },

        {
            name: 'content', // required
            type: 'richText', // required
            defaultValue: [{
                children: [{ text: 'Here is some default content for this field' }],
            }],
            required: true,
            admin: {
                elements: [
                    'h2',
                    'h3',
                    'h4',
                    'link',
                    // {
                    //     name: 'cta',
                    //     Button: CustomCallToActionButton,
                    //     Element: CustomCallToActionElement,
                    //     plugins: [
                    //         // any plugins that are required by this element go here
                    //     ]
                    // }
                ],
                leaves: [
                    'bold',
                    'italic',
                    // {
                    //     name: 'highlight',
                    //     Button: CustomHighlightButton,
                    //     Leaf: CustomHighlightLeaf,
                    //     plugins: [
                    //         // any plugins that are required by this leaf go here
                    //     ]
                    // }
                ],
                link: {
                    // Inject your own fields into the Link element
                    fields: [
                        {
                            name: 'rel',
                            label: 'Rel Attribute',
                            type: 'select',
                            hasMany: true,
                            options: [
                                'noopener', 'noreferrer', 'nofollow',
                            ],
                        },
                    ],
                },
                upload: {
                    collections: {
                        media: {
                            fields: [
                                // any fields that you would like to save
                                // on an upload element in the `media` collection
                            ],
                        },
                    },
                },
            }
        },
        {
            type: 'row', // required
            fields: [ // required
                {
                    name: 'label',
                    type: 'text',
                    required: true,
                    admin: {
                        width: '50%',
                    },
                },
                {
                    name: 'value',
                    type: 'text',
                    required: true,
                    admin: {
                        width: '50%',
                    },
                },
            ],
        },
        {
            name: 'selectedFeatures', // required
            type: 'select', // required
            hasMany: true,
            admin: {
                isClearable: true,
                isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
            },
            options: [
                {
                    label: 'Metallic Paint',
                    value: 'metallic_paint',
                },
                {
                    label: 'Alloy Wheels',
                    value: 'alloy_wheels',
                },
                {
                    label: 'Carbon Fiber Dashboard',
                    value: 'carbon_fiber_dashboard',
                },
            ],
        },

        {
            type: 'tabs', // required
            tabs: [ // required
                {
                    label: 'Tab One Label', // required
                    description: 'This will appear within the tab above the fields.',
                    fields: [ // required
                        {
                            name: 'someTextField',
                            type: 'text',
                            required: true,
                        },
                    ],
                },
                {
                    name: 'tabTwo',
                    label: 'Tab Two Label', // required
                    fields: [ // required
                        {
                            name: 'numberField', // accessible via tabTwo.numberField
                            type: 'number',
                            required: true,
                        },
                    ],
                }
            ]

        },

        {
            name: 'pageTitle', // required
            type: 'text', // required
            required: true,
        },

        {
            name: 'metaDescription', // required
            type: 'textarea', // required
            required: true,
        },


    ],
}

export default Examples;
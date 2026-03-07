import type { CollectionConfig } from 'payload'

export const Partners: CollectionConfig = {
    slug: 'partners',
    labels: {
        singular: 'Partner',
        plural: 'Partners',
    },
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'web', 'showOnSupportPage'],
        group: 'Content',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            label: 'Name',
            required: true,
        },
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
            label: 'Logo',
            required: true,
        },
        {
            name: 'web',
            type: 'text',
            label: 'Website URL',
            required: false,
        },
        {
            name: 'pages',
            type: 'select',
            label: 'Show on pages',
            hasMany: true,
            required: false,
            options: [
                {
                    label: 'Support / Partners page',
                    value: 'support',
                },
                {
                    label: 'Event pages (annual)',
                    value: 'event',
                },
            ],
        },
        {
            name: 'eventCategory',
            type: 'text',
            label: 'Event category slug (e.g. gold, silver, media)',
            admin: {
                description: 'Must match the category slug defined in the Event → Partners Section → categories. Leave blank to show without category.',
                condition: (data) => Array.isArray(data?.pages) && data.pages.includes('event'),
            },
        },
    ],
}
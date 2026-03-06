import type { CollectionConfig } from 'payload'

export const TeamMembers: CollectionConfig = {
    slug: 'team-members',
    labels: {
        singular: 'Team Member',
        plural: 'Team Members',
    },
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'role'],
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            label: 'Name',
            required: true,
        },
        {
            name: 'role',
            type: 'text',
            label: 'Role',
            required: true,
        },
        {
            name: 'img',
            type: 'upload',
            label: 'Photo',
            relationTo: 'media',
            required: false,
        },
        {
            name: 'linkedin',
            type: 'text',
            label: 'LinkedIn URL',
            required: false,
        },
        {
            name: 'mail',
            type: 'email',
            label: 'Email',
            required: false,
        },
        {
            name: 'order',
            type: 'number',
            label: 'Display Order',
            required: false,
            admin: {
                description: 'Lower number = shown first',
            },
        },
    ],
}


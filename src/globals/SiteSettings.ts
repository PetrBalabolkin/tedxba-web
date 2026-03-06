import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
    slug: 'site-settings',
    label: 'Site Settings',
    admin: {
        group: 'Settings',
    },
    fields: [
        {
            name: 'ctaSection',
            type: 'select',
            label: 'CTA Section (shown on inner pages)',
            defaultValue: 'newsletter',
            required: true,
            options: [
                {
                    label: 'Newsletter',
                    value: 'newsletter',
                },
                {
                    label: 'Buy Tickets',
                    value: 'buyTickets',
                },
                {
                    label: 'None',
                    value: 'none',
                },
            ],
            admin: {
                description: 'Choose which CTA section appears at the bottom of inner pages (blog, team, support). The home page always shows Newsletter.',
            },
        },
    ],
}
import type { GlobalConfig } from 'payload'

export const BlogSettings: GlobalConfig = {
    slug: 'blog-settings',
    label: 'Blog Page',
    admin: {
        group: 'Settings',
        description: 'Settings for the Blog page.',
    },
    fields: [
        {
            name: 'podcastIframe',
            type: 'textarea',
            label: 'Podcast embed (iframe HTML)',
            admin: {
                description: 'Paste the full iframe embed code from your podcast platform (e.g. Spotify, Apple Podcasts, Podbean).',
                rows: 4,
            },
        },
    ],
}



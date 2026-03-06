import type { GlobalConfig } from 'payload'

export const SupportSettings: GlobalConfig = {
    slug: 'support-settings',
    label: 'Support Page – Buttons',
    admin: {
        group: 'Settings',
        description: 'Edit button links and labels for the Support page.',
    },
    fields: [
        {
            name: 'contactBtn',
            type: 'group',
            label: 'Contact button (partneri@...)',
            fields: [
                {
                    name: 'labelSk',
                    type: 'text',
                    label: 'Label (SK)',
                    defaultValue: 'Kontaktovať cez partneri@tedxbratislava.sk',
                },
                {
                    name: 'labelEn',
                    type: 'text',
                    label: 'Label (EN)',
                    defaultValue: 'Contact via partneri@tedxbratislava.sk',
                },
                {
                    name: 'href',
                    type: 'text',
                    label: 'Link (mailto: or URL)',
                    defaultValue: 'mailto:partneri@tedxbratislava.sk',
                    required: true,
                },
            ],
        },
        {
            name: 'callBtn',
            type: 'group',
            label: 'Call button (+421...)',
            fields: [
                {
                    name: 'labelSk',
                    type: 'text',
                    label: 'Label (SK)',
                    defaultValue: 'Zavolať na +421 949 875 764',
                },
                {
                    name: 'labelEn',
                    type: 'text',
                    label: 'Label (EN)',
                    defaultValue: 'Call +421 949 875 764',
                },
                {
                    name: 'href',
                    type: 'text',
                    label: 'Link (tel: or URL)',
                    defaultValue: 'tel:+421949875764',
                    required: true,
                },
            ],
        },
        {
            name: 'volunteerBtn',
            type: 'group',
            label: 'Volunteer button',
            fields: [
                {
                    name: 'labelSk',
                    type: 'text',
                    label: 'Label (SK)',
                    defaultValue: 'Stať sa dobrovoľníkom',
                },
                {
                    name: 'labelEn',
                    type: 'text',
                    label: 'Label (EN)',
                    defaultValue: 'Become a volunteer',
                },
                {
                    name: 'href',
                    type: 'text',
                    label: 'Link (mailto: or URL)',
                    defaultValue: 'mailto:partneri@tedxbratislava.sk',
                    required: true,
                },
            ],
        },
    ],
}


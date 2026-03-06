import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import sharp from 'sharp'
import { Media } from '@/collections/Media'
import { TeamMembers } from '@/collections/TeamMembers'

export default buildConfig({
    editor: lexicalEditor(),
    collections: [Media, TeamMembers],
    secret: process.env.PAYLOAD_SECRET || 'fallback-secret-for-dev',
    db: postgresAdapter({
        pool: {
            host: 'localhost',
            port: 5432,
            database: 'tedx-ba',
            user: 'postgres',
            password: 'postgres',
        },
        migrationDir: './migrations',
        push: true,
    }),
    sharp,
    graphQL: {
        disable: true,
    },
})

import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import project from '@/sanity/schema/project-schema'
import schemas from '@/sanity/schema';

const config = defineConfig({
    projectId: 'autk1xxb',
    dataset: 'production',
    title : 'My Personal Website',
    apiVersion: '2023-09-08',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {
        types: schemas
      },
})

export default config;
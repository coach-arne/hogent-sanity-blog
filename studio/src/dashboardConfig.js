export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e466c6ea6a1b06fab6823f8',
                  title: 'Sanity Studio',
                  name: 'hogent-sanity-blog-studio',
                  apiId: '02942f4f-a8b2-4edd-b042-0c715c3508e2'
                },
                {
                  buildHookId: '5e466c6e966dbb3e8926a3fc',
                  title: 'Blog Website',
                  name: 'hogent-sanity-blog',
                  apiId: '50776cc1-1e5f-49b0-91ed-80de6b74fc78'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/coach-arne/hogent-sanity-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://hogent-sanity-blog.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

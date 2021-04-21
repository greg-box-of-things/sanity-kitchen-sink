export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '6080ba49e708a6495a609c3d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-f641kw1d',
                  apiId: '5cae6270-3526-4d00-a2e5-931282f6dba7'
                },
                {
                  buildHookId: '6080ba495dbbf36676a5e059',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-j3gzuskr',
                  apiId: '5dffb527-f9ec-4c17-85ff-8710e0fa53d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/greg-box-of-things/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-j3gzuskr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

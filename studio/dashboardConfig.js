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
                  buildHookId: '5fcfdd9c7f47dc1a4e9db966',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-zhgappij',
                  apiId: '505fae7d-6181-4a94-8d9e-c5e0b13214e9'
                },
                {
                  buildHookId: '5fcfdd9dfa4bdf156c320be3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-q96r6yg8',
                  apiId: '759402d6-3f70-4c1b-993b-90bdeb32af25'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ccsimpson3/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-q96r6yg8.netlify.app', category: 'apps'}
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

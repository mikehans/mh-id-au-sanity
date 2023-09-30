export default {
    name: 'article',
    type: 'document',
    title: 'Article',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'summary',
        type: 'string',
        title: 'Summary',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
        },
      },
      {
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [{type: 'block'}]
      },
      {
        name: 'image',
        title: 'Banner Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [
          {
              type: 'reference',
              to: [
                  {type: 'tag'}
              ]
          }
      ]
      },
      {
        name: 'pubDate',
        type: 'date',
        title: 'Publish Date',
        description: 'Set the date the article will be published.'
      }
    ],
  }
  
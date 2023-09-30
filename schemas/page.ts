export default {
    name: 'page',
    type: 'document',
    title: 'Page',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'bannerImage',
            type: 'string',
            title: 'Banner Image'
        }
    ]
}
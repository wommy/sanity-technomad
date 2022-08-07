export default {
  type: 'document',
  name: 'bookmark',
  fields: [
    {type: 'string', name: 'title'},
    {type: 'url', name: 'url'},
    {
      type: 'array',
      name: 'category',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
      initialValue: ['inbox'],
    },
  ],
}

export const todo = {
  type:'document',
  name:'todo',
  fields:[
    { type:'string', name:'todo' },
    { type:'array', name:'category', of:[{ type:'string' }], options:{ layout:'tags' }, initialValue:['inbox'] },
    { type:'boolean', name:'isComplete', initialValue:false },
    { type:'array', name:'refs', of:[{ type:'reference', name:'bookmark', to:[{ type:'bookmark' }] }], options:{ editModal:'popover' } }
  ], 
}

export const bookmark = {
  type:'document',
  name:'bookmark',
  fields:[
    { type:'string', name:'title', },
    { type:'url', name:'url', },
    { type:'array', name:'category', of:[{ type:'string' }], options:{ layout:'tags' }, initialValue:['inbox'] },
  ]
}

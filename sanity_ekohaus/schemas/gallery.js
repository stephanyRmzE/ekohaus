export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [ {type: 'image'}],
      options: {
        hotspot: true,
      }
    }
  ]
}

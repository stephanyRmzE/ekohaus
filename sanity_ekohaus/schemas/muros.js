export default {
  name: 'muros',
  title: 'Muros',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [ {type: 'image'}],
      options: {
        hotspot: true,
      }
    },
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
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.positive(),
      options: {
      decimalScale: 2,
      fixedDecimalScale: true,
      allowNegative: false,
      decimalSeparator: ',',
      thousandSeparator: '.',
      prefix: '$ ',
  },
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
  ]
}

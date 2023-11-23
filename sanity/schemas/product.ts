export default {
  name: 'product',
  type: 'document',
  title: 'Products',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'unit',
      type: 'string',
      title: 'Unit type',
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{type: 'category'}],
    },
  ],
}

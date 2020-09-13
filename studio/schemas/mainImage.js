export default {
  name: 'mainImage',
  title: 'Main image',
  type: 'image',
  description: 'Add the highest quality image which is available.',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      title: 'Alternative text (for screen readers)',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      // Editing this field will be hidden behind an "Edit"-button
      name: 'attribution',
      type: 'string',
      title: 'Attribution',
      options: {
        isHighlighted: true
      }
    }
  ]
};

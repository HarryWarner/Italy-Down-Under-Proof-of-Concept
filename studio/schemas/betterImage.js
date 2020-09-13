export default {
  name: 'betterImage',
  title: 'Image',
  type: 'image',
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
      name: 'caption',
      title: 'Caption',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'attribution',
      type: 'string',
      title: 'Attribution',
      options: {
        isHighlighted: true
      }
    }
  ]
};

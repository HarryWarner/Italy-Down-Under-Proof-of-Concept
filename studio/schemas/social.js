export default {
  type: 'object',
  name: 'social',
  title: 'Social',
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 1 // Defines a grid for the fields and how many columns it should have
  },
  fieldsets: [{ name: 'social', title: 'Social media handles' }],
  fields: [
    {
      title: 'Twitter',
      name: 'twitter',
      type: 'string',
      fieldset: 'social'
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'string',
      fieldset: 'social'
    },
    {
      title: 'Facebook',
      name: 'facebook',
      type: 'string',
      fieldset: 'social'
    }
  ]
};

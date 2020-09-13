export default {
  type: 'object',
  name: 'address',
  title: 'Address',
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 1 // Defines a grid for the fields and how many columns it should have
  },
  fieldsets: [{ name: 'address', title: 'Add the most suitable address type/types' }],
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      fieldset: 'address'
    },
    {
      title: 'Street Address',
      name: 'street',
      type: 'string',
      fieldset: 'address'
    },
    {
      title: 'Google Maps Plus Code',
      name: 'pluscode',
      type: 'string',
      fieldset: 'address'
    },
    {
      title: 'W3W Address',
      name: 'w3w',
      type: 'string',
      fieldset: 'address'
    }
  ]
};

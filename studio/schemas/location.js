import { GoLocation } from 'react-icons/go';
export default {
  name: 'location',
  title: 'Locations',
  type: 'document',
  icon: GoLocation,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().error('Please enter title for the location')
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Add a short description that describes your location.',
      type: 'text'
    }
  ]
};

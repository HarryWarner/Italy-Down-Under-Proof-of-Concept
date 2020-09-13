import { BsChatSquareDots } from 'react-icons/bs';
export default {
  name: 'topic',
  title: 'Topics',
  type: 'document',
  icon: BsChatSquareDots,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().error('Please enter title for the topic')
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Add a short description that describes your topic.',
      type: 'text'
    }
  ]
};

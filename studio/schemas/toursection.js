import { MdBorderClear } from 'react-icons/md';
export default {
  name: 'tourSection',
  title: 'Tour Section',
  type: 'document',
  icon: MdBorderClear,
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: Rule => Rule.required().error('Please add a title')
    },
    {
      name: 'textStory',
      title: 'Text Stories',
      description: 'Use this section to sequence your text stories of your tour',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'textStory' } }]
    },
    {
      name: 'audioStory',
      title: 'Audio Stories',
      description: 'Use this section to sequence your audio stories of your tour',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'audioStory' } }]
    },
    {
      name: 'videoStory',
      title: 'Video Stories',
      description: 'Use this section to sequence your video stories of your tour',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'videoStory' } }]
    }
  ]
};

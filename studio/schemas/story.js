import { RiArticleLine } from 'react-icons/ri';
import ConditionalField from '../plugins/conditionalField.js';
export default {
  name: 'story',
  title: 'Stories',
  type: 'document',
  icon: RiArticleLine,
  fields: [
    {
      name: 'subscription',
      title: 'Subscription Only',
      type: 'boolean',
      options: {
        layout: 'checkbox'
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [
        Rule.required().error('Please enter a title'),
        Rule.max(70).error('Please enter a shorter title')
      ]
    },
    {
      name: 'slug',
      title: 'URL',
      type: 'slug',
      validation: Rule => Rule.required().error('Please generate an slug'),
      description: 'Click generate to create a short url to be displayed in the front end',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      validation: Rule => Rule.required().error('Please select an author'),
      to: { type: 'author' }
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      description:
        'A short description of one paragraph to be displayed in search results (<160 characters)',
      type: 'text',
      rows: '3',
      validation: Rule => [
        Rule.required().error('Please enter a description'),
        Rule.max(160).error('Please enter a shorter description')
      ]
    },
    {
      name: 'precis',
      title: 'Precis',
      description: 'A short precis for postcard view',
      type: 'precisContent',
      validation: Rule => [
        Rule.required().error('Please enter a precis'),
        Rule.max(500).error('Please enter a shorter precis')
      ]
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage',
      validation: Rule => Rule.required().error('Please add a main image')
    },
    {
      name: 'imageCarousel',
      title: 'Image Carousel',
      type: 'reference',
      to: { type: 'imageCarousel' }
    },
    {
      name: 'body',
      title: 'Story content',
      description: 'Add main content for your story',
      type: 'blockContent'
    },
    {
      name: 'storyType',
      title: 'Story Type',
      type: 'string',
      options: {
        list: ['Text', 'Audio', 'Video'],
        layout: 'radio',
        direction: 'horizontal'
      },
      validation: Rule => [Rule.required().error('Please select a story type')]
    },
    {
      name: 'audio',
      title: 'Audio File',
      type: 'file',
      // Invokes conditional field input component
      inputComponent: ConditionalField,
      options: {
        condition: (document, parent) => parent.storyType === 'Audio'
      },
      validation: Rule =>
        Rule.custom((val, context) => {
          if (context.document.storyType === 'Audio') {
            return val !== undefined ? true : 'Audio file is needed for Audio Story';
          }
          return true;
        })
    },
    {
      name: 'transcript',
      title: 'Transcript',
      type: 'text',
      // Invokes conditional field input component
      inputComponent: ConditionalField,
      options: {
        condition: (document, parent) => parent.storyType === 'Audio'
      }
    },
    {
      name: 'video',
      title: 'Video Link',
      // Invokes conditional field input component
      inputComponent: ConditionalField,
      options: {
        condition: (document, parent) => parent.storyType === 'Video'
      },
      validation: Rule =>
        Rule.custom((val, context) => {
          if (context.document.storyType === 'Video') {
            return val !== undefined ? true : 'Video link is needed for Video Story';
          }
          return true;
        }),
      type: 'url'
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      // Invokes conditional field input component
      inputComponent: ConditionalField,
      options: {
        condition: (document, parent) =>
          parent.storyType === 'Audio' || parent.storyType === 'Video'
      },
      validation: Rule =>
        Rule.custom((val, context) => {
          if (context.document.storyType === 'Video' || context.document.storyType === 'Audio') {
            return val !== undefined ? true : 'Duration is needed for Audio/Video Story';
          }
          return true;
        })
    },
    {
      name: 'locations',
      title: 'Locations',
      type: 'array',
      validation: Rule => Rule.required().error('Please add atleast one location'),
      of: [{ type: 'reference', to: { type: 'location' } }]
    },
    {
      name: 'topics',
      title: 'Topics',
      type: 'array',
      validation: Rule => Rule.required().error('Please add atleast one topic'),
      of: [{ type: 'reference', to: { type: 'topic' } }]
    },
    {
      name: 'keywords',
      type: 'array',
      validation: Rule =>
        Rule.required().custom(keywords => {
          return keywords.length === new Set(keywords).size ? true : 'Please add unique keywords';
        }),
      title: 'Keywords',
      description: 'Add keywords that describes your post.',
      of: [
        {
          type: 'string',
          validation: Rule =>
            Rule.required().custom(str => {
              var array = str.trim().split(' ');
              return array.length < 2 ? true : 'Please add ONE word keyword';
            })
        }
      ],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'address',
      title: 'Address',
      type: 'address'
    },
    {
      name: 'reviewedAt',
      title: 'Reviewed at',
      type: 'date'
    },
    {
      name: 'embargoedUntil',
      title: 'Embargoed Until',
      type: 'date',
      validation: Rule => Rule.required().error('Please enter Embargoed Until date')
    },
    {
      name: 'tips',
      title: 'Tips',
      type: 'blockText'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      storyType: 'storyType',
      slug: 'slug',
      audio: 'audio'
    },
    prepare(selection) {
      const { author, storyType, title } = selection;
      return Object.assign({}, selection, {
        title: `${storyType === 'Video' ? '📹' : storyType === 'Audio' ? '🎵' : '📝'}  ${title}`,
        subtitle: `‏‏By: ${author}`
      });
    }
  }
};

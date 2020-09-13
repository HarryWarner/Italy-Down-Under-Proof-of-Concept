import { FiFlag } from 'react-icons/fi';
import ConditionalField from '../plugins/conditionalField.js';
export default {
  name: 'tour',
  title: 'Tours',
  type: 'document',
  icon: FiFlag,
  fields: [
    {
      name: 'subscription',
      title: 'Subscription Only',
      type: 'boolean',
      options: {
        layout: 'checkbox'
      },
      validation: Rule => [Rule.required()]
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [
        Rule.required().error('Please enter a tile'),
        Rule.max(70).error('Please enter a shorter title')
      ]
    },
    {
      name: 'slug',
      title: 'URL',
      type: 'slug',
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
      to: { type: 'author' }
    },
    {
      name: 'excerpt',
      title: 'Description',
      description: 'A short description to be displayed in the post card view',
      type: 'text',
      validation: Rule => [
        Rule.required().error('Please enter a description'),
        Rule.max(500).error('Please enter a shorter description')
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
      title: 'Tour content',
      description: 'Add main content for your tour',
      type: 'blockContent'
    },
    {
      name: 'tourType',
      title: 'Tour Type',
      type: 'string',
      options: {
        list: ['Text', 'Audio', 'Video'],
        layout: 'radio',
        direction: 'horizontal'
      },
      validation: Rule => [Rule.required().error('Please select a Tour type')]
    },
    {
      name: 'audio',
      title: 'Audio File',
      type: 'file',
      // Invokes conditional field input component
      inputComponent: ConditionalField,
      options: {
        condition: (document, parent) => parent.tourType === 'Audio'
      },
      validation: Rule =>
        Rule.custom((val, context) => {
          if (context.document.tourType === 'Audio') {
            return val !== undefined ? true : 'Audio file is needed for Audio Tour';
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
        condition: (document, parent) => parent.tourType === 'Audio'
      }
    },
    {
      name: 'video',
      title: 'Video Link',
      // Invokes conditional field input component
      inputComponent: ConditionalField,
      options: {
        condition: (document, parent) => parent.tourType === 'Video'
      },
      validation: Rule =>
        Rule.custom((val, context) => {
          if (context.document.tourType === 'Video') {
            return val !== undefined ? true : 'Video link is needed for Video Tour';
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
        condition: (document, parent) => parent.tourType === 'Audio' || parent.tourType === 'Video'
      },
      validation: Rule =>
        Rule.custom((val, context) => {
          if (context.document.tourType === 'Video' || context.document.tourType === 'Audio') {
            return val !== undefined ? true : 'Duration is needed for Audio/Video Tour';
          }
          return true;
        })
    },
    {
      name: 'stories',
      title: 'Stories ',
      description: 'Add your stories to build your tour',
      type: 'array',
      validation: Rule => Rule.required().error('Please add atleast one story'),
      of: [{ type: 'reference', to: { type: 'story' } }]
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
      title: 'Keywords',
      description: 'Add keywords that describes your post.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'address',
      title: 'Address',
      type: 'address'
    },
    // {
    //   name: 'paid',
    //   title: 'Paid Only',
    //   type: 'boolean',
    //   options: {
    //     layout: 'checkbox'
    //   }
    // },
    // // Price field is shown only for 'paid' price models
    // {
    //   name: 'price',
    //   title: 'Price',
    //   type: 'number',
    //   validation: Rule =>
    //     Rule.custom((val, context) => {
    //       if (context.document.paid) {
    //         return val !== undefined ? true : 'Price is needed for Paid Tours';
    //       }
    //       return true;
    //     }),
    //   // Invokes conditional field input component
    //   inputComponent: ConditionalField,
    //   options: {
    //     condition: (document, parent) => parent.paid === true
    //   }
    // },
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
      tourType: 'tourType',
      slug: 'slug',
      audio: 'audio'
    },
    prepare(selection) {
      const { author, tourType, title } = selection;
      return Object.assign({}, selection, {
        title: `${tourType === 'Video' ? '📹' : tourType === 'Audio' ? '🎵' : '📝'}  ${title}`,
        subtitle: `‏‏By: ${author}`
      });
    }
  }
};

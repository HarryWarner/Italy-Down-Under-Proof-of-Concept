import { BsImages } from 'react-icons/bs';
export default {
  name: 'imageCarousel',
  title: 'Image Carousels',
  type: 'document',
  icon: BsImages,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().error('Please add a title')
    },
    {
      name: 'imagesCarousel',
      title: 'Image Carousel',
      type: 'array',
      validation: Rule =>
        Rule.required().error('Please add atleast one image to build the carousel'),
      of: [
        {
          type: 'betterImage'
        }
      ]
    },
    {
      name: 'overview',
      title: 'Overview Text',
      description: 'Add a short description that describes your image collection.',
      type: 'text'
    }
  ]
};

import { MdPerson } from 'react-icons/md';

export default {
  name: 'author',
  title: 'Authors',
  type: 'document',
  icon: MdPerson,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required().error('Please enter the name of author')
    },
    {
      name: 'nickname',
      title: 'Nickname',
      type: 'string'
    },

    {
      name: 'image',
      title: 'Image',
      type: 'betterImage'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: []
        }
      ]
    },
    // {
    //   type: 'object',
    //   name: 'Social',
    //   options: {
    //     collapsible: true, // Makes the whole fieldset collapsible
    //     collapsed: false, // Defines if the fieldset should be collapsed by default or not
    //     columns: 1 // Defines a grid for the fields and how many columns it should have
    //   },
    //   fieldsets: [
    //     {name: 'social', title: 'Social media links'}
    //   ],
    //   fields: [

    //     {
    //       title: 'Twitter',
    //       name: 'twitter',
    //       type: 'string',
    //       fieldset: 'social'
    //     },
    //     {
    //       title: 'Instagram',
    //       name: 'instagram',
    //       type: 'string',
    //       fieldset: 'social'
    //     },
    //     {
    //       title: 'Facebook',
    //       name: 'facebook',
    //       type: 'string',
    //       fieldset: 'social'
    //     }
    //   ]
    // },
    {
      name: 'social',
      title: 'Social Media Links',
      type: 'social'
    },

    {
      name: 'personallink',
      title: 'Personal Link',
      type: 'url'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
};

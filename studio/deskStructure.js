import S from '@sanity/desk-tool/structure-builder';
import { MdBusiness, MdSettings } from 'react-icons/md';
import { FaFile } from 'react-icons/fa';

const hiddenTypes = [
  'category',
  'companyInfo',
  'page',
  'person',
  'post',
  'project',
  'siteSettings'
];

export default () =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId())),
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Company Info')
        .child(
          S.editor()
            .id('companyInfo')
            .schemaType('companyInfo')
            .documentId('companyInfo')
        )
        .icon(MdBusiness),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Contact')
                .child(
                  S.editor()
                    .id('contactPage')
                    .schemaType('page')
                    .documentId('contact')
                )
                .icon(FaFile)
            ])
        )
    ]);

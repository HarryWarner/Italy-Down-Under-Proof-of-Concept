// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import precisContent from './precisContent';
import blockText from './blockText';
import companyInfo from './companyInfo';
import figure from './figure';
import mainImage from './mainImage';
import page from './page';
import siteSettings from './siteSettings';
import slideshow from './slideshow';
import author from './author';
import story from './story';
import topic from './topic';
import location from './location';
import imageCarousel from './imageCarousel';
import tour from './tour';
import social from './social';
import address from './address';
import betterImage from './betterImage';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    story,
    tour,
    author,
    topic,
    address,
    imageCarousel,
    blockContent,
    precisContent,
    blockText,
    companyInfo,
    figure,
    mainImage,
    betterImage,
    page,
    siteSettings,
    slideshow,
    social,
    location

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
});

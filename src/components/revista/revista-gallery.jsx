import React from 'react';
import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';

/* Styles */
import '../../styles/components/image-gallery.scss';

/* Styled Components */
import Image from '../../styles/emotion/image';

const RevistaGallery = ({ items }) => {
  if (items.length === 1) {
    return (
      <Image
        src={items[0].image.original.src}
      />
    );
  }

  return (
    <ImageGallery
      items={items.map(item => ({
        original: `https://${item.image.original.src}`,
        thumbnail: `https://${item.image.thumbnail.src}`,
      
      }))}  
      slug={revista.slug}
    />
  );
};

RevistaGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default RevistaGallery;

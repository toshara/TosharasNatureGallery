import React from 'react';
import GalleryCard from './GalleryCard';

const Gallery = () => {
  const photos = [
    { url: 'https://printblow.com/wp-content/uploads/2022/12/41XL-600x600.webp'},
    { url: 'https://printblow.com/wp-content/uploads/2022/12/35XL-600x600.webp'},
  ];

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Toshara's Nature Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <GalleryCard key={index} url={photo.url} description={photo.description} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

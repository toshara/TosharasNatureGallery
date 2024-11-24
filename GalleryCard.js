import React from 'react';

const GalleryCard = ({ url, description }) => {
  return (
    <div className="border rounded shadow overflow-hidden">
      <img src={url} alt={description} className="w-full h-64 object-cover" />
      <p className="p-2 text-center text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default GalleryCard;

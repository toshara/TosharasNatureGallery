import React from 'react';

const Home = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?nature)' }}>
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to Toshara's Nature Gallery!</h1>
        <p className="text-lg mb-4">Discover the wonders of the natural world!</p>
        <p className="text description">Toshara is a freelance photographer who aims to show everyone the beauty of the world we reside in.
            Through her knowledge and experience in the photography field, love for traveling, curiousity of the unknown and her passion for nature,
            she has been able to capture the beauty of this world. And through the resources available to her, she is sharing them to the world, for
            beauty such as the one of Mother Nature, should never stay hidden.
        </p>
        <img src = "https://www.mediastorehouse.com.au/p/780/photo-collage-nature-landscape-photos-33027468.jpg.webp" alt="image" class="cardimage1"></img>
      </div>
    </div>
  );
};

export default Home;

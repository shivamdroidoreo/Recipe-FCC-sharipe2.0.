// Import necessary modules and images
import React from 'react';
import { Link } from 'react-router-dom';
import Cards from './cards';
import Carousel from './carousel';
import northIndianImg from '../images/poha.jpg';
import southIndianImg from '../images/Untitled design (2).jpg';
import continentalImg from '../images/WhatsApp Image 2024-11-04 at 16.30.17_8c26328d.jpg';

const Home = () => {
  const cardData = [
    { 
      image: northIndianImg, 
      title: 'North Indian', 
      text: 'Explore delicious North Indian recipes.', 
      link: '/recipes/north-indian' 
    },
    { 
      image: southIndianImg, 
      title: 'South Indian', 
      text: 'Explore authentic South Indian recipes.', 
      link: '/recipes/south-indian' 
    },
    { 
      image: continentalImg, 
      title: 'Continental', 
      text: 'Explore delightful Continental recipes.', 
      link: '/recipes/continental' 
    },
  ];

  return (
    <div>
      {/* Carousel */}
      <div className="mt-5">
        <Carousel />
      </div>

      {/* Cards Section */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          {cardData.map((card, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="d-flex justify-content-center">
                <Cards 
                  image={card.image} 
                  title={card.title} 
                  text={card.text} 
                  linkComponent={<Link to={card.link} className="btn btn-primary">Explore</Link>}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

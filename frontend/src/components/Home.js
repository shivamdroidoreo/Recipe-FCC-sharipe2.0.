import React from 'react';
import { Link } from 'react-router-dom';
import Cards from './cards';
import Carousel from './carousel';
import poha from '../images/poha.jpg';  // Correctly imported image

const Home = () => {
  const cardData = [
    { image: poha, title: 'Poha', text: 'An Amazing Recipe of flattened rice.', link: '/poha' },
    { image: poha, title: 'Poha', text: 'An Amazing Recipe of flattened rice.', link: '/poha' },
    { image: poha, title: 'Poha', text: 'An Amazing Recipe of flattened rice.', link: '/poha' },
    { image: 'image2.jpg', title: 'Card 2', text: 'An Amazing Recipe of flattened rice.', link: '/card2' },
    { image: 'image3.jpg', title: 'Card 3', text: 'An Amazing Recipe of flattened rice.', link: '/card3' },
    // Add more cards as needed
  ];

  return (
    <div>
      {/* Add top margin to create space between navbar and carousel */}
      <div className="mt-5">
        <Carousel />
      </div>

      {/* Cards section */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          {cardData.map((card, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 mb-4"> {/* Responsive columns */}
              <div className="d-flex justify-content-center"> {/* Center the card */}
                <Cards 
                  image={card.image} 
                  title={card.title} 
                  text={card.text} 
                  linkComponent={<Link to={card.link} className="btn btn-primary">Go somewhere</Link>}
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

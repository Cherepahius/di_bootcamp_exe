import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';

const App = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={image1} alt="First Slide" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src={image2} alt="Second Slide" />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src={image3} alt="Third Slide" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src={image4} alt="Fourth Slide" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
};

export default App;
import React from 'react';
import Link from 'gatsby-link';
import Slider from 'react-slick';

import './Testimonies.scss';

import testimony from '../../data/testimonies.json';

class Testimonies extends React.Component {
  constructor() {
    super();
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    };
    return (
      <Slider {...settings}>
        {testimony.map((item, key) => {
          return (
            <div className="testimony" key={key}>
              <div className="testimony-img">
                <img src={item.img} alt="profile picture" />
              </div>
              <div className="testimony-desc">
                <p>{item.desc}</p>
                <div className="testimony-author">
                  <p>{item.author}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    );
  }
}

export default Testimonies;

import React, { Component } from "react";
import Slider from "react-slick";
import { images1 } from "./images";
import carouselStyles from "./carousel.module.css";


export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className={carouselStyles.container}>
        <Slider {...settings}>
          {images1.map((item) => (
            <div>
                <img src={item} alt="cult-fit-image" />
            </div>
    ))}
        </Slider>
      </div>
    );
  }
}
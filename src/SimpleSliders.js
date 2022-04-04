import React, { Component } from "react";
import Slider from "react-slick";
import './SimpleSlider.css'
import right from './assets/arrow-right.png'
import left from './assets/arrow-left.png'
import logoOne from './assets/logo-one.png'
import logoTwo from './assets/logo-two.png'
import logoThree from './assets/logo-three.png'
import logoFour from './assets/logo-4.png'
import logoFive from  './assets/logo-five.png'
import logoSix from './assets/logo-six.png'
import logoSeven from './assets/logo-seven.png'
import logoEight from './assets/logo-eight.png'

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <img
        className={className}
        src={right}
        style={{width: '25px', height: '46px', right: '-100px'}}
        onClick={onClick}
        alt=""
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <img
        src={left}
        className={className}
        style={{width: '25px', height: '46px', left: '-100px'}}
        onClick={onClick}
        alt=""
      />
    );
  }
  
  export default class CustomArrows extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        dotsClass: 'dotz slick-dots',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 4,
                initialSlide: 1,
                dots: true,
                nextArrow: false,
                prevArrow: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                nextArrow: false,
                prevArrow: false,
              }
            }
          ]
      };
      return (
        <div className="carousel-container">
          
          <Slider {...settings}>
            <div>
                <img src={logoOne} id="images" alt=""/>
            </div>
            <div>
                <img src={logoTwo} id="images" alt=""/>
            </div>
            <div>
                <img src={logoThree} id="images" alt=""/>
            </div>
            <div>
                <img src={logoFour} id="images" alt=""/>
            </div>
            <div>
                <img src={logoFive} id="images" alt=""/>
            </div>
            <div>
                <img src={logoSix} id="images" alt=""/>
            </div>
            <div>
                <img src={logoSeven} id="images" alt=""/>
            </div>
            <div>
                <img src={logoEight} id="images" alt=""/>
            </div>
          </Slider>
        </div>
      );
    }
  }
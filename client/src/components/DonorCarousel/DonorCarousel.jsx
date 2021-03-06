import React, { useState } from "react";
import "./DonorCarousel.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import sealOfTrans from "../../assets/images/new-seal.png";
// carousel images
import pic1 from "../../assets/images/DonateCarousel/aids-institute.png";
import pic2 from "../../assets/images/DonateCarousel/calamus.png";
import pic3 from "../../assets/images/DonateCarousel/elton-john.png";
import pic4 from "../../assets/images/DonateCarousel/not-cropped-james-tudor.png";
import pic5 from "../../assets/images/DonateCarousel/tjx.png";
import pic6 from "../../assets/images/DonateCarousel/van-amerigen.png";

export default function DonorCarousel() {
  const [windowSize, updateWindowSize] = useState(window.innerWidth);
  const [slideChange, setSlideChange] = useState(-300);
  const [slideChangeX, setSlideChangeX] = useState(150);
  const [x, setX] = useState(0);

  const slideRightChanger = () => {
    if (windowSize <= 500){ 
      setSlideChange(-400);
      setSlideChangeX(100);
    }else if(windowSize <= 555 && windowSize > 501) { 
      setSlideChange(-300);
      setSlideChangeX(140);
    }else if(windowSize < 800 && windowSize >556 ) {
      setSlideChange(-300);
      setSlideChangeX(100);
    } else if(windowSize > 801 && windowSize < 1000){
      setSlideChange(-300);
      setSlideChangeX(100);
    } else if(windowSize >= 1000){
      setSlideChange(-250);
      setSlideChangeX(200);
    }

  };

  
  // console.log(slideChange)
  // console.log(windowSize)
  // console.log(slideChangeX)
  

  let carouselArr = [
    <img
      src={pic1}
      alt="pic1"
      style={{
        height: "50px",
        marginLeft: "0",
        marginTop: "18px",
      }}
    />,

    <img
      src={pic2}
      alt="pic2"
      style={{
        height: "50px",
        marginLeft: "50px",
        marginTop: "18px",
      }}
    />,

    <img
      src={pic3}
      alt="pic3"
      style={{
        height: "50px",
        marginLeft: "50px",
        marginTop: "18px",
      }}
    />,
    <img
      src={pic5}
      alt="pic5"
      style={{
        height: "50px",
        marginLeft: "50px",
        marginTop: "18px",
      }}
    />,

    <img
      src={pic6}
      alt="pic6"
      style={{
        height: "50px",
        marginLeft: "50px",
        marginTop: "18px",
      }}
    />,
    <img
      src={pic4}
      alt="pic4"
      style={{
        height: "50px",
        marginTop: "18px",
        marginLeft: "140px",
      }}
    />,
  ];
  

  const slideLeft = () => {
    x === 0 ? setX(-400) : setX(x + 100);
  };

  const slideRight = () => {
    x < slideChange ? setX(0) : setX(x - slideChangeX);
  };

  return (
    <div className="carousel-container">
      <div className="donors-text">
        <h3>MAJOR DONORS</h3>
      </div>

      <div className="donorCarousel__leftButton">
        <button onClick={slideLeft}>
          <ChevronLeftIcon id="left-chev" className="chevron--donors" />
        </button>
      </div>
      {/* carousel maps image elements onto page */}
      <div className="donorCarousel__slider-container">
        {carouselArr.map((image, index) => {
          return (
            <div
              className="donorCarousel__slider"
              style={{ transform: `translateX(${x}%)` }}
            >
              {image}
            </div>
          );
        })}
      </div>
      <div className="donorCarousel__rightButton">
        <button
          onClick={() => {
            slideRightChanger();
            slideRight();
          }}
          // {slideRight}
        >
          <ChevronRightIcon className="chevron--donors" />
        </button>
      </div>
      <div className="donorCarousel__seal">
        <a
          href="https://www.guidestar.org/profile/94-3447082"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="seal-of-transparency"
            src={sealOfTrans}
            alt="seal-of-transparency"
          />
        </a>
      </div>
    </div>
  );
}

import React, { Component } from "react";
import Slider from "react-slick";
import multiFirst from '../../../assets/multicar_first.png';
import multiSecond from '../../../assets/multicar_second.png';
import multiThird from '../../../assets/multicar_third.png';
import multiFourth from "../../../assets/multicar_forth.png";
import multiFifth from '../../../assets/multicar_second.png';
import multiSixth from '../../../assets/multicar_first.png';
import "./multicarusel.css";
import down_icon from '../../../assets/down_icon.svg';




function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="slider_box">
       <div className="containerOfmultisarusel">
          <img className="recomend_image" src={multiFirst} alt="car_image"/>

            <div className="recomend_texts_wrapper">
             <p className="Knaus_text">Knaus</p>
             <button className="discover_butt_some">Discover the range</button>

               <div className="choose_model_wrapper">
                 <p className="choose_model_text">Choose a model</p>
                 <img className="choose_model_icon" src={down_icon} alt="down_icon"/>
               </div>

            </div>
        </div>

        <div className="containerOfmultisarusel">
          <img className="recomend_image" src={multiSecond} alt="car_image"/>

            <div className="recomend_texts_wrapper">
             <p className="Knaus_text">Knaus</p>
             <button className="discover_butt_some">Discover the range</button>

               <div className="choose_model_wrapper">
                 <p className="choose_model_text">Choose a model</p>
                 <img className="choose_model_icon" src={down_icon} alt="down_icon"/>
               </div>

            </div>
        </div>

        <div className="containerOfmultisarusel">
          <img className="recomend_image" src={multiThird} alt="car_image"/>

            <div className="recomend_texts_wrapper">
             <p className="Knaus_text">Knaus</p>
             <button className="discover_butt_some">Discover the range</button>

               <div className="choose_model_wrapper">
                 <p className="choose_model_text">Choose a model</p>
                 <img className="choose_model_icon" src={down_icon} alt="down_icon"/>
               </div>

            </div>
        </div>

        <div className="containerOfmultisarusel">
          <img className="recomend_image" src={multiFourth} alt="car_image"/>

            <div className="recomend_texts_wrapper">
             <p className="Knaus_text">Knaus</p>
             <button className="discover_butt_some">Discover the range</button>

               <div className="choose_model_wrapper">
                 <p className="choose_model_text">Choose a model</p>
                 <img className="choose_model_icon" src={down_icon} alt="down_icon"/>
               </div>

            </div>
        </div>

        <div className="containerOfmultisarusel">
          <img className="recomend_image" src={multiFifth} alt="car_image"/>

            <div className="recomend_texts_wrapper">
             <p className="Knaus_text">Knaus</p>
             <button className="discover_butt_some">Discover the range</button>

               <div className="choose_model_wrapper">
                 <p className="choose_model_text">Choose a model</p>
                 <img className="choose_model_icon" src={down_icon} alt="down_icon"/>
               </div>

            </div>
        </div>

        <div className="containerOfmultisarusel">
          <img className="recomend_image" src={multiSixth} alt="car_image"/>

            <div className="recomend_texts_wrapper">
             <p className="Knaus_text">Knaus</p>
             <button className="discover_butt_some">Discover the range</button>

               <div className="choose_model_wrapper">
                 <p className="choose_model_text">Choose a model</p>
                 <img className="choose_model_icon" src={down_icon} alt="down_icon"/>
               </div>

            </div>
        </div>




      </Slider>

      <div className="videos_wrapper_text">
        <p className="videos_text">Videos</p>
        <div className="video_line"></div>
      </div>
    </div>
  );
}

export default PauseOnHover;

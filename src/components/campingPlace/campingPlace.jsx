import React from 'react'
import { WrapperCampingCar } from './campingPlaceStyle';
import first_img from '../../assets/CampingCarImg_first.png';
import second_img from '../../assets/CampingCarImg_second.png';
import third_img from '../../assets/CampingCarImg_third.png';


const CampingPlace = () => {
  return (
    <WrapperCampingCar>
      <div className='background_fon_CampingCar'>
       <div className='wrapper_of_text_center'>
        <p className='home_motors'>Home / Camping place</p>
        <p className='motors'>Camping places</p>
       </div>
      </div>

      <div className='images_wrapper'>

          <div className='firstImage'>
            <img src={first_img} alt='first_Img'/>
            <p className='campingPlace_text'>Camping place name</p>
            <p className='locationText'>Location</p>
          </div>
          <div className='firstImage'>
            <img src={second_img} alt='first_Img'/>
            <p className='campingPlace_text'>Camping place name</p>
            <p className='locationText'>Location</p>
          </div>
          <div className='firstImage'>
            <img src={third_img} alt='third_Img'/>
            <p className='campingPlace_text'>Camping place name</p>
            <p className='locationText'>Location</p>
          </div>

          <div className='firstImage'>
            <img src={first_img} alt='first_Img'/>
            <p className='campingPlace_text'>Camping place name</p>
            <p className='locationText'>Location</p>
          </div>
          <div className='firstImage'>
            <img src={second_img} alt='first_Img'/>
            <p className='campingPlace_text'>Camping place name</p>
            <p className='locationText'>Location</p>
          </div>
          <div className='firstImage'>
            <img src={third_img} alt='third_Img'/>
            <p className='campingPlace_text'>Camping place name</p>
            <p className='locationText'>Location</p>
          </div>

          <div className='firstImage'>
            <img src={first_img} alt='first_Img'/>
            <p className='campingPlace_text'>Camping place name</p>
            <p className='locationText'>Location</p>
          </div>
          <div className='firstImage'>
            <img src={second_img} alt='first_Img'/>
            <p className='campingPlace_text'>Camping place name</p>
            <p className='locationText'>Location</p>
          </div>
          <div className='firstImage'>
            <img src={third_img} alt='third_Img'/>
            <p className='campingPlace_text'>Camping place name</p>
            <p className='locationText'>Location</p>
          </div>

          <div className='firstImage'>
            <img src={first_img} alt='first_Img'/>
            <p className='campingPlace_text'>Camping place name</p>
            <p className='locationText'>Location</p>
          </div>
          <div className='firstImage'>
            <img src={second_img} alt='first_Img'/>
            <p className='campingPlace_text'>Camping place name</p>
            <p className='locationText'>Location</p>
          </div>
          <div className='firstImage'>
            <img src={third_img} alt='third_Img'/>
            <p className='campingPlace_text'>Camping place name</p>
            <p className='locationText'>Location</p>
          </div>

      </div>
    </WrapperCampingCar>
  )
}

export default CampingPlace;
import React from 'react'
import { MainDetails_in } from './campinginStyle';
import camping_first from '../../../assets/CampingCarImg_first.png';
import camping_second from '../../../assets/CampingCarImg_second.png';
import camping_third from '../../../assets/CampingCarImg_third.png';
import carbon_icon from '../../../assets/carbon_location.svg';
import clock_icon from '../../../assets/bi_clock.svg';
import carbon_phone from '../../../assets/carbon_phone.svg';
import clock_home from '../../../assets/codicon_home.svg';
import map_image from '../../../assets/image_map.png';


const CampingInside = () => {
  return (
    <MainDetails_in>

      <div className='campingIn_container'>
        <img className='camping_style' src={camping_first} alt='image_campingCar'/>
        <img className='camping_style h' src={camping_second} alt='image_campingCar'/>
        <img className='camping_style a' src={camping_third} alt='image_campingCar'/>
        <img className='camping_style ab' src={camping_third} alt='image_campingCar'/>
        <img className='camping_style abs' src={camping_second} alt='image_campingCar'/>
        <img className='camping_style absd' src={camping_first} alt='image_campingCar'/>
      </div>


      <div className='texts_under_images'>
       <p className='camping_del'>Camping Del Sole Village</p>
         <div className='location_vs_map'>
            <p className='location_style'>Location</p>
            <button className='copy_map_butt'>Copy map</button>
         </div>
           <div className='under_line'></div>
      </div>

      

   <div className='location_container'>
    
    <div className='Korea_seul_wrap'>
      <img className='carbon_img' src={carbon_icon} alt='carbon'/>
      <p className='korea_text'>Korea, Seul</p>
    </div>
    <div className='Korea_seul_wrap_two'>
      <img className='carbon_img' src={clock_icon} alt='carbon'/>
      <p className='korea_text'>Korea, Seul</p>
    </div>
   
   </div>

   <div className='location_container'>
    
    <div className='Korea_seul_wrap'>
      <img className='carbon_img' src={carbon_phone} alt='carbon'/>
      <p className='korea_text'>005- 862 -8569</p>
    </div>
    <div className='Korea_seul_wrap_three'>
      <img className='carbon_img' src={clock_home} alt='carbon'/>
      <p className='korea_text two'>logo.com</p>
    </div>

   </div>


   <div className='Description_wrap'>
     <p className='desc_text'>Description</p>
     <p className='desc_lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla suscipit quae velit consectetur quis ullam, hic vitae. Alias nostrum tempora obcaecati? Suscipit laborum nulla, impedit maxime excepturi quaerat nisi facere neque fugiat dolorum a cupiditate iure debitis, mollitia blanditiis aperiam libero sed doloribus earum, eum reiciendis! Ipsa libero adipisci, amet facilis culpa recusandae voluptatum repellat! Dolorum nisi ea sapiente doloremque libero? Error impedit animi, dolores voluptates facere eum, sit eveniet neque laudantium non accusamus pariatur iste explicabo officia? Ducimus sequi ad iure quibusdam molestias inventore mollitia, vero ipsa doloribus doloremque distinctio esse, recusandae maiores perspiciatis veniam eaque neque deserunt.</p>
   </div>

   <div className='main_map_image'>
      <img className='map_image_style' src={map_image} alt='map_image'/>
   </div>


    </MainDetails_in>
 )
}

export default CampingInside;
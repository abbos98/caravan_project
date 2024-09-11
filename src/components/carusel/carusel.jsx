import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import first_carusel from "../../assets/caravanabs.jpg";
import './caruselCs.css';
import second_carusel from "../../assets/second_carusel.jpg";
import third_carusel from "../../assets/third_caravan.jpg";
import App from './pupop/pupop_main';
import Resizable from './multicarusel/multicaruselMain';
import blogs_first from '../../assets/blogs_first.png';
import blogs_second from '../../assets/blogs_second.png';
import blogs_third from '../../assets/blogs_third.png';


const CaruselComponent = () => {
  return (
    <div className='main_page_conteiner'>
      <CCarousel controls indicators>
  <CCarouselItem className='wrapper_main_page'>
    <CImage className="d-block w-100" src={first_carusel} alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={second_carusel} alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={third_carusel} alt="slide 3" />
  </CCarouselItem>
</CCarousel>


<div className='recomend_wrapper'>
   <p className='recomend_text'>Recommend</p>
   <div className='line_recomend'></div>
</div>


<Resizable />


<App/> 


<div className='Blogs_wrapper_in'>
<p className='blog_text'>Blogs</p>
<div className='blog_line'></div>
</div>



<div className='blogs_main_wrapper'>
 
 <div className='left_line_blogs'>
  <p className='lorem_firts'>Lorem ipsum</p>
  <p className='lorem_second'>@Lorem ipsum</p>
  <p className='lorem_third'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat platea mauris at turpis. Volutpat, morbi sit vitae id. Aliquam eleifend aenean neque in in a quam vivamus</p>
 </div>

 <div className='right_line_blogs'>
   <img className='blogs_images' src={blogs_first} alt='car_image'/>
   <img className='blogs_images' src={blogs_second} alt='car_image'/>
   <img className='blogs_images' src={blogs_third} alt='car_image'/>
   <img className='blogs_images' src={blogs_first} alt='car_image'/>
   <img className='blogs_images' src={blogs_second} alt='car_image'/>
   <img className='blogs_images' src={blogs_third} alt='car_image'/>
 </div>

</div>








</div>

  





  )
}

export default CaruselComponent;
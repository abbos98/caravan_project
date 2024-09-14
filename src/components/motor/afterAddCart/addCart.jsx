import React from 'react';
import { Main_wrapper } from './addCartStyle';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import car_asos_one from '../../../assets/car_asos.jpg';
import car_asos_two from '../../../assets/car_asos_inside.jpg';
import car_asos_three from '../../../assets/car_asos_balon.jpg';

const AddCart = () => {
  return (
    <Main_wrapper>
 
     <div className='main_text_top'>
       <p className='text_style_cart'>Cart</p>
       <div className='line_cart_under'></div>
     </div>
     

    <div className='main_left_and_right_side_wrapper'>







<div className='left_side_car_image_wrapper'>

<CCarousel controls>
  <CCarouselItem>
    <CImage className="d-block w-100" src={car_asos_one} alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={car_asos_two} alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={car_asos_three} alt="slide 3" />
  </CCarouselItem>
</CCarousel>
 
<div className='wrapper_info'>
 <div className='cost_car_info'>
   <p className='purchase_price'>Purchase price </p>
   <p className='purchase_number'>52541$</p>
 </div>
</div>
</div>
 









 <div className='right_side_car_image_wrapper'>
   
   <div className='car_top_info'>
      <p className='car_name_text_info'>Car Name</p>
      <p className='car_name_number_info'>550$</p>
      <p className='car_desc'>Description</p>
      <p className='car_lorem_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vel voluptatum porro et quibusdam, debitis quas unde atque mollitia est officiis deleniti vero asperiores maxime eos suscipit id? Quidem itaque ratione dolorum ipsam laborum natus eos. Esse nostrum laborum quis!</p>
   </div>


<div className='button_vS_details_wrapper'>
   <button className='Continue_to_payment'>Continue to payment</button>
</div>

<div className='Enter_Account_Details_wrapper'>
    <p className='Account_Details_style'>Enter Account Details</p>

    
    <p className='first_name_style'>First name</p>
    <input className='first_name_input' placeholder='First name'></input>

     
    <p className='first_name_style'>Last name</p>
    <input className='first_name_input' placeholder='Last name'></input>

     
    <p className='first_name_style'>Email</p>
    <input className='first_name_input' placeholder='Your email'></input>

     
    <p className='first_name_style'>Mobile Phone Number</p>
    <input className='first_name_input' placeholder='Mobile Phone Number'></input>

</div>

<div className='Enter_Account_Details_wrapper'>
    <p className='Account_Details_style'>Card</p>

    
    <p className='first_name_style'>Name on card</p>
    <input className='first_name_input' placeholder='Name on card'></input>

     
    <p className='first_name_style'>Card Number</p>
    <input className='first_name_input' placeholder='Card Number'></input>

     
    <p className='first_name_style'>Expiration Month</p>
    <select className='select_in' id="test">
        <option>01</option>
        <option>02</option>
        <option>03</option>
    </select>

     
    <p className='first_name_style'>Expiration Year</p>
    <select className='select_in' id="test">
        <option>2022</option>
        <option>2023</option>
        <option>2024</option>
    </select>
</div>

<p className='first_name_style'>CVV</p>
    <input className='first_name_input' placeholder='CVV'></input>

     
    <p className='first_name_style'>Billing Zip Cod</p>
    <input className='first_name_input' placeholder='Billing Zip Cod'></input>


<div className='place_order_wrapper'>
   <button className='Place_Order'>Place Order</button>
</div>

 </div>






</div>

    </Main_wrapper>
  )
}

export default AddCart;
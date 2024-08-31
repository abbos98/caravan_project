import React, { useState } from 'react'
import { Left_side, Main_Ahror, Main_items, Right_side } from './caravanStyle';
import some from "../../assets/down_icon_more_larger.svg";
import car_first from "../../assets/first_car.png";
import car_second from "../../assets/second_car.png";
import car_third from "../../assets/third_car.png";
import iconh from "../../assets/down_icon_more_larger.svg";
import menu from "../../assets/menu_icon.png";
import drop_down from "../../assets/drop_down.png";
import down_icon from "../../assets/down_iconss.svg";
import Hmenu from '../motor/Hmenu_Vmenu/hmenu';
import Vmenu from '../motor/Hmenu_Vmenu/vmenu';


const Caravan = () => {
  const [active, setactive] = useState(true);
  function eachMenu () {
    setactive(true);
  }
  function viewMenu () {
    setactive(false);
  }
  return (
    <Main_Ahror>

    <div className='background_fon_caravan'>
       <div className='wrapper_of_text_center'>
        <p className='home_motors'>Home / Motors</p>
        <p className='our_range'>Our ranges</p>
        <p className='motors'>Caravan</p>
       </div>
    </div>

 <Main_items >

 <Left_side className='Left_side'>
   <div className='box_left_side_b'>
       <h2>Cost of car</h2>
        
        <div className='from_vs_to'>
          <div className='from_wrapper'>
            <p className='from_text'>from</p>
            <div className='text_area'></div>
          </div>
          <div className='to_wrapper'>
            <p className='to_text'>to</p>
            <div className='text_area'></div>
          </div>
        </div>
   </div>
      {/* first_box_cost_of_car */}
      
      
   <div className='box_left_side'>
       <div className='icon_and_text'>
          <h2>Brand<img src={some} alt='icon'/></h2>
          
       </div>
  
        <div className='wrapper_texts'>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>Aidal</label>
        </div>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>Knal</label>
        </div>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>escape</label>
        </div>
       </div>

   </div>
      {/* second_box_brand*/}


   <div className='box_left_side'>
       <div className='icon_and_text'>
          <h2>Company<img src={some} alt='icon'/></h2>
          
       </div>
  
        <div className='wrapper_texts'>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>escape</label>
        </div>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>Aidal</label>
        </div>

       </div>

   </div>
      {/* third_box_Company */}


   <div className='box_left_side'>
       <div className='icon_and_text'>
          <h2>License type<img src={some} alt='icon'/></h2>
          
       </div>
  
        <div className='wrapper_texts'>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>1 year</label>
        </div>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>2 year</label>
        </div>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>1.5year</label>
        </div>
       </div>

   </div>
      {/* fourth_box_License type */}


  <div className='box_left_side'>
       <div className='icon_and_text'>
          <h2>Number of travelers<img src={some} alt='icon'/></h2>
          
       </div>
  
        <div className='wrapper_texts'>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>2</label>
        </div>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>3-4</label>
        </div>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>5+</label>
        </div>
       </div>

  </div>
      {/* fifth_box_Number of travelers */}


  <div className='box_left_side'>
       <div className='icon_and_text'>
          <h2>Location<img src={some} alt='icon'/></h2>
          
       </div>
  
        <div className='wrapper_texts'>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>Seoul</label>
        </div>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>Korea</label>
        </div>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>Pusan</label>
        </div>
       </div>

  </div>
      {/* sixth_box_Location */}


   <div className='wrapper_of_buttons'>
        <div className='cancel_butt'>Cancel</div>
        <div className='search_butt'>Search</div>
   </div>
      
      <div className='img_of_three_car'>
        <p className='compare_text'>Compare</p>
         <div className='wrapper_cars_img'>
           <img src={car_first} alt='car_img'/>
           <div className='img_container'><img src={car_second} alt='car_img'/></div>
           <div className='img_container'><img src={car_third} alt='car_img'/></div>

          
         </div>
      </div>
  
 </Left_side>


 
<Right_side>

  <div className='items_wrapper'>
    <div className='item_text_wrapper'><p className='item'>Item</p><p className='number'>25.156</p></div>
  
    <div className='sort_by_wrapper'>
      <p className='sort_by_text'>Sort by</p>
      <div className='sort_by_select'>Select</div>
      <div className='four_in'><img src={iconh} alt='icon_down' /></div>
      
      <div className='sixteen'>
        <div className='icon_down'><img src={iconh} alt='icon_down'/></div>
      </div>

      <div className='menu_dropDown'>
         <div className='menu' onClick={eachMenu}><img src={menu} alt='menu'/></div>

         <div className='dropdown' onClick={viewMenu}><img src={drop_down} alt='dropdown'/></div>
      </div>

    </div>
  </div>


<div className='phone_container'>
<div className='phone_items_wrapper'>
  <div className='top_side_phone'>
    <div className='phone_item_text'><p className='phone_item'>Item</p><p className='phone_num'>25.156</p></div>
    <div className='phone_icons_wrapper'>
        <div className='phone_menu_wr' onClick={eachMenu}><img src={menu} alt='menu'/></div>
        <div className='phone_drop_down_wr'  onClick={viewMenu}><img src={drop_down} alt='drop_down'/></div>
    </div>
  </div>

  <div className='bottom_side_phone'>
     <p className='phone_sort_by'>Sort by</p>
     <input className='select_phone' placeholder='Select'></input> <div className='phone_inside_icon'><img src={down_icon} alt='down_icon'/></div>
     <div className='phone_sixteen'>60<div className='inside_down_icons'><img src={down_icon} alt='down_icon'/></div></div>
  </div>

 </div>

</div>



  <div>
      {active ? <Hmenu /> : <Vmenu />}           
  </div> 






</Right_side>



</Main_items>



   </Main_Ahror>
  )
}

export default Caravan;
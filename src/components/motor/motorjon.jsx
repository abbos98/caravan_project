import React, { useState } from 'react';
import "./motorbek.css";
import {  Main_items, Main_Murodil, Right_side,} from './motorxon';
import iconh from "../../assets/down_icon_more_larger.svg";
import menu from "../../assets/menu_icon.png";
import drop_down from "../../assets/drop_down.png";
import Hmenu from './Hmenu_Vmenu/hmenu';
import Vmenu from './Hmenu_Vmenu/vmenu';
import down_icon from "../../assets/down_iconss.svg";
import AccordionUsage from '../acardion';
import MenuIcon from '../../assets/drop_down.png';
import { Link } from 'react-router-dom';
import TemporaryDrawer from '../dropDown/right_dropDown';




const Motorjon = () => {
  const [active, setactive] = useState(true);
  function eachMenu () {
    setactive(true);
  }
  function viewMenu () {
    setactive(false);
  }
  return (
    
<Main_Murodil>
    <div className='background_fon'>
       <div className='wrapper_of_text_center'>
        <p className='home_motors'>Home / Motors</p>
        <p className='our_range'>Our ranges</p>
        <p className='motors'>Motors</p>
       </div>
    </div>
<Main_items >



<AccordionUsage />

 
<Right_side>

  <div className='items_wrapper'>
<TemporaryDrawer />
<div className='anchore_wrapper'>

</div>


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
  <TemporaryDrawer />
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




   </Main_Murodil>
  )
}

export default Motorjon;
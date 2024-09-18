import React from 'react';
import { Murodil_div, NavbarOn, Nlink } from '../styles/navbar_style';
import card from "../assets/card.svg";
import person from "../assets/person.svg";
import down from "../assets/down_icon.svg";
import infort from "../assets/infort_of.svg";
import three_line from "../assets/three_line.png";
import { Link } from 'react-router-dom';
import NavbarDropDownComponent from '../components/dropDown/navbar_DropDown';

const Navbar = () => {
  return (
    <NavbarOn>
      <div className='sss'>
       <div className='menu_frop_wrap'> <NavbarDropDownComponent/></div>
         <Link style={{textDecoration: "none"}} to={"/"}><h1>Camper</h1></Link>
      </div>
    <Murodil_div>
      <Nlink to={"/motor"} style = {{textDecoration: "none", color: "black"}} ><div className='text_icon'><h1 className='text_in'>Motor</h1>
      <img src={infort} alt='down_in'/></div></Nlink>
      <Nlink to={"/caravan"} style = {{textDecoration: "none", color: "black"}}><div className='text_icon'><h1 className='text_in'>Caravan</h1>
      <img src={infort} alt='down_in'/></div></Nlink>
      <Nlink to={"/tuning"} style = {{textDecoration: "none", color: "black"}}><div className='text_icon'><h1 className='text_in'>Tuning</h1>
      <img src={infort} alt='down_in'/></div></Nlink>
      <Nlink to={"/usedcar"} style = {{textDecoration: "none", color: "black"}}><div className='text_icon'><h1 className='text_in'>Used Car</h1>
      <img src={infort} alt='down_in'/></div></Nlink>
      <Nlink to={"/camping place "} style = {{textDecoration: "none", color: "black"}}><div className='text_icon'><h1 className='text_in'>Camping Place</h1>
      <img src={infort} alt='down_in'/></div></Nlink> 
    </Murodil_div>  

    <div className='Axror_div'>
       <div>
        <img className='car_iconn' src={card} alt="img" /> 
       </div> 
       <Nlink to = {"/login"}><div className='person_img'><img src={person} alt="img" /></div></Nlink>

       <div className='eng'><h5>Eng</h5><img src={down} alt="img" /></div>

       <div className='menu_frop_wrap_for_phone'> <NavbarDropDownComponent/></div>
    </div>
   
    </NavbarOn>
  )
}

export default Navbar;
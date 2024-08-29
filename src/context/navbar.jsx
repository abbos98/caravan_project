import React from 'react';
import { Murodil_div, NavbarOn, Nlink } from '../styles/navbar_style';
import card from "../assets/card.svg";
import person from "../assets/person.svg";
import down from "../assets/down_icon.svg";
import infort from "../assets/infort_of.svg";
import three_line from "../assets/three_line.png";

const Navbar = () => {
  return (
    <NavbarOn>
      <div className='sss'>
         <img src={three_line} alt='drow_down_icon'/>
         <h1>Camper</h1>
      </div>
    <Murodil_div>
      <Nlink to={"/motor"} style = {{textDecoration: "none", color: "black"}} ><div className='text_icon'><h1 className='text_in'>Motor</h1>
      <img src={infort} alt='down_in'/></div></Nlink>
      <Nlink to={"/motor"} style = {{textDecoration: "none", color: "black"}}><div className='text_icon'><h1 className='text_in'>Caravan</h1>
      <img src={infort} alt='down_in'/></div></Nlink>
      <Nlink to={"/motor"} style = {{textDecoration: "none", color: "black"}}><div className='text_icon'><h1 className='text_in'>Tuning</h1>
      <img src={infort} alt='down_in'/></div></Nlink>
      <Nlink to={"/motor"} style = {{textDecoration: "none", color: "black"}}><div className='text_icon'><h1 className='text_in'>Used Car</h1>
      <img src={infort} alt='down_in'/></div></Nlink>
      <Nlink to={"/motor"} style = {{textDecoration: "none", color: "black"}}><div className='text_icon'><h1 className='text_in'>Camping Place</h1>
      <img src={infort} alt='down_in'/></div></Nlink> 
    </Murodil_div>  

    <div className='Axror_div'>
       <div>
        <img className='car_iconn' src={card} alt="img" /> 
       </div> 
       <div className='person_img'><img src={person} alt="img" /></div> 

       <div className='eng'><h5>Eng</h5><img src={down} alt="img" /></div>

       <div><img className='kal' src={three_line} alt='three_line'/></div> 
    </div>
   
    </NavbarOn>
  )
}

export default Navbar
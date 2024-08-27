import React from 'react';
import { Murodil_div, NavbarOn, Nlink } from '../styles/navbar_style';
import card from "../assets/card.svg";
import person from "../assets/person.svg";
import down from "../assets/down_icon.svg";
import infort from "../assets/infort_of.svg";

const Navbar = () => {
  return (
    <NavbarOn>
    <h1>Camper</h1>

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
        <img src={card} alt="img" /> 
       </div> 
       <div><img src={person} alt="img" /></div> 
       <div className='eng'><h5>Eng</h5><img src={down} alt="img" /></div> 
    </div>
   
    </NavbarOn>
  )
}

export default Navbar
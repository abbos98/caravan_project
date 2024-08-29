import React from 'react'
import { Main_footer, Murodil } from './footer_style';
import youtube from "../assets/youtube.svg";
import instagram from "../assets/instagram.svg";
import naver from "../assets/naver.svg";

const Footer = () => {
  return (
    <Main_footer>
          <div className='texts_container'>
             <p className='single_text'>Camper</p>
          </div>

          <div className='texts_container'>
             <p className='larger_text'>Services</p>
             <p className='order_text'>Camping</p>
             <p className='order_text'>Lodging</p>
             <p className='order_text'>Harbor</p>
             <p className='order_text'>Day Use</p>
           
          </div>

          <div className='texts_container'>
             <p className='larger_text'>Menu</p>
             <p className='order_text'>About</p>
             <p className='order_text'>Services</p>
             <p className='order_text'>Booking</p>
             <p className='order_text'>Blog</p>
          </div>

          <div className='texts_container'>
             <p className='larger_text'>Contact</p>
             <div className='iconss_wrapper'>
                 <img className='icons_style' src={youtube} alt='youtube'/>
                 <img className='icons_style' src={instagram} alt='inst'/>
                 <img className='icons_style' src={naver} alt='inst'/>
             </div>

             <p className='order_text'>021 Korea Seul, LA</p>
             <p className='order_text'>camper@example.com</p>
             <p className='order_text'>(021) 345-6789-99</p>
          </div>
    </Main_footer>
  )
}

export default Footer;
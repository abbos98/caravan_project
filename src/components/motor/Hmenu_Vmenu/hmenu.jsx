import React from 'react';
import { campcar } from '../../mock/motorDetail';
import { NavLink } from 'react-router-dom';
import { Hmenucha } from './h_and_v_styles';
import star from "../../../assets/star.svg";

const Hmenu = () => {
  const data = campcar.maindata;
  console.log(data);
  
     return (
     <Hmenucha>
         {data.map((value, index) => {
             return (
                 <div key={index}>
                     <NavLink to={`/motor/${value.id}`}
                     style= {{textDecoration: "none", color: "black"}}
                     >
                       <div className='boxcha'>
                         <img className='boxcha_imgcha' src={value.car.img} alt='car_image'/>
                         <div className='wrapper_of_butt'>
                             <h3>{value.car.CarName}</h3>
                                <div className='number_grade'><h5>{value.car.BrandName}</h5><div className='start'><img src={star} alt='star'/><p>5.3</p></div></div>
                             <h2>{value.car.Cost}</h2>
                             <div className='wrapper_of_buttons'>
                               <button>Order</button>
                               <button>Campere</button>
                             </div>

                         
                         </div>
 
                         
 
                         
                       </div>
                     </NavLink>
 
                 </div>
             )
         })}
     </Hmenucha>
   )
 }

export default Hmenu;
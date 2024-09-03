import React from 'react';
import { NavLink } from 'react-router-dom';
import star from "../../../assets/star.svg";
import { caravanCar } from '../../mock/caravanDetails';
import { HmenuCaravan } from './hMenu_vMenuStyles';

const HmenuTwo = () => {
  const dataTwo = caravanCar.mainCon;
  console.log(dataTwo);
  
     return (
     <HmenuCaravan>
         {dataTwo.map((value, index) => {
             return (
                 <div key={index}>
                     <NavLink to={`/motor/${value.id}`}
                     style= {{textDecoration: "none", color: "black"}}>
                       <div className='boxcha'>
                         <img className='boxcha_imgcha' src={value.car.img} alt='car_image'/>
                         <div className='wrapper_of_butt'>
                             <h3>{value.car.CarName}</h3>
                                <div className='number_grade'><h5>{value.car.BrandName}</h5><div className='start'><img src={star} alt='star'/><p>5.3</p></div></div>
                             <h2 className='cost_car'>{value.car.Cost}</h2>
                             <div className='wrapper_of_buttons'>
                               <button className='butts'>Order</button>
                               <button className='butts'>Campere</button>
                             </div>
                         </div>
                       </div>
                     </NavLink>
 
                 </div>
             )
         })}
     </HmenuCaravan>
   )
 }

export default HmenuTwo;
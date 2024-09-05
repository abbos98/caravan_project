import React from 'react'
import { campcar } from '../../mock/motorDetail';
import { NavLink } from 'react-router-dom';
import {Lengmenus, RightNavbarRow, Vmenucha,} from './h_and_v_styles';
import { ValueScope } from 'ajv/dist/compile/codegen';
import star from "../../../assets/star.svg";

const Vmenu = () => {
 const data = campcar.maindata;
 console.log(data);
 
    return (
    <div>
        {data.map((value, index) => {
            return (
              <RightNavbarRow>
              {data.map((value, index) => {
               return(
                   <div key={index}>
                       <NavLink to={`/motor/${value.id}`}
                       style={{textDecoration:'none',color:'black'}}>
                       <div className='tuzatish'>
                       <div className='Lengmenus'>
                           <div className='Car0'><img src={value.car.img} alt="car-img" /></div>

                           <div className='menu-wrap'>
                           <div className='to-wrap'><h3> {value.car.CarName}</h3> <h2>{value.car.Cost}</h2></div>
                           <div className='to-wrap'><h5>{value.car.BrandName}</h5> <div><img src={star} alt="star" /><p>5.3</p></div></div>
                           <div className='ww'>
                             <button>Order</button><button>Camper</button>
                           </div>
                           </div>

                       </div>
                       </div>
                       </NavLink>
                   </div>
               )
              })}
           </RightNavbarRow>
       
            )
        })}
    </div>
  )
}

export default Vmenu;
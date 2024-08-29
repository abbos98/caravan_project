import React from 'react'
import { campcar } from '../../mock/motorDetail';
import { NavLink } from 'react-router-dom';
import {Vmenucha,} from './h_and_v_styles';
import { ValueScope } from 'ajv/dist/compile/codegen';
import star from "../../../assets/star.svg";

const Vmenu = () => {
 const data = campcar.maindata;
 console.log(data);
 
    return (
    <div>
        {data.map((value, index) => {
            return (
              <Vmenucha>
                <div key={index}>
                    <NavLink to={`/motor/${value.id}`}
                    style= {{textDecoration: "none", color: "black"}}>
                      <div className='main_main'>
                      <div className='Vmenu_boxes'>
                        <div className='vmenu_left_side_img'>
                           <img src={value.car.img} alt='car_image'/>
                        </div>

                       <div className='vmenu_right_side_text'>

                        <div className='name_car_cost_wrapper'>
                          <p className='carName_text'>{value.car.CarName}</p>
                          <p className='carCost_num'>{value.car.Cost}</p>
                        </div>

                        <div className='brand_name_and_grade_wrapper'>
                           <p className='brandName_text'>{value.car.BrandName}</p>
                           <div className='star_number_wrapper'>
                            <img className='vMenu_start' src={star} alt='star'/>
                            <p className='number_num'>5.3</p>
                           </div>
                        </div>

                        <div className='vmenu_buttons_wrapper'>
                           <button>Order</button>
                           <button>Сompare</button>
                        </div>

                        </div>
                      </div>
                    </div>
                    </NavLink>

                </div>
            </Vmenucha>
            )
        })}
    </div>
  )
}

export default Vmenu;
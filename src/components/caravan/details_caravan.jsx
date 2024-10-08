import React from 'react'
import { MainDetailWrapperCaravan } from './caravanStyle';
import { Link, NavLink, useParams } from 'react-router-dom';
import { caravanCar } from '../mock/caravanDetails';
import { MainAidal } from './details_caravanStyle';

const Details_caravan = () => {
    const {id} = useParams ();
    const kom = caravanCar.mainCon;
    const filterwrapper = kom.filter((value) => value.id === parseInt(id));
  return (
    <MainDetailWrapperCaravan>
    <div className='wrapper_vs_img'>
          <div className='text_buttos_wrapper'>
            <p className='Aidal_text'>Aidal</p>
            <div className='butts_wrapper'>
               <NavLink to={"/aidal_in"}><button className='add_cart_butt'>ADD TO CART</button></NavLink>
               <button className='compare_butt'>COMPARE</button>
            </div>
          </div>
     </div>


 <MainAidal> 
    {filterwrapper.map((value, index) => {
    return (
     <div key={index}>

      <div>
        <div className='image_side_Aidal'>
          <img src={value.car.CarName} alt='car'/>
        </div>

       <div className='klkl'>
        
      </div> 



      </div>  


     </div>
    )
    })}
 </MainAidal>
 </MainDetailWrapperCaravan>
 )
}

export default Details_caravan;
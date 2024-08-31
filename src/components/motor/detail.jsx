import React from 'react';
import { MainDetailWrapper } from './detailDesign';
import { Link, useParams } from 'react-router-dom';
import { campcar } from '../mock/motorDetail';


const Detail = () => {
  const {id} = useParams ();
  const abs = campcar.maindata;
  const filterContainer = abs.filter((value) => value.id === parseInt(id));
  return (
    <MainDetailWrapper>
       <div className='wrapper_vs_img'>
             <div className='text_buttos_wrapper'>
               <p className='Aidal_text'>Aidal</p>
               <div className='butts_wrapper'>
                  <button className='add_cart_butt'>ADD TO CART</button>
                  <button className='compare_butt'>COMPARE</button>
               </div>
             </div>
        </div>

   
    <div> 
       {filterContainer.map((value, index) => {
       return (
        <div key={index}>
          <div>
            <img src={value.car.img} alt='car'/>
          </div>
        </div>
       )
       })}
    </div>
    </MainDetailWrapper>
  )
}

export default Detail;
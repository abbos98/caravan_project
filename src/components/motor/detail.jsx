import React from 'react';
import { Additional_info, Additional_info_three, Additional_info_two, CarInfo, Comfort_wrapper, Comfort_wrapper_second, Comfort_wrapper_third, MainDetailWrapper, Tidying_away, Tidying_away_second, Tidying_wrapper } from './detailDesign';
import { Link, useParams } from 'react-router-dom';
import { campcar } from '../mock/motorDetail';
import comfort_img from '../../assets/comfort_image.png';
import tidy_car from '../../assets/tidying_image.png';
import vantilated_img from '../../assets/ventilated_img.png';
import easy from '../../assets/Easy_access_img.png';
import heating from '../../assets/heting_img.png';
import BasicTabs from '../tabs';


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

    <CarInfo>
        <div className='top_sideCar_detail'>
          <div className='image_wrapper'>
            <img src={value.car.img} alt='car'/>
          </div>
          <div className='text_left_Aidal'>
             <div className='text_top_in'>
              <p className='text_car_text'>{value.car.CarName}</p>
              <p className='text_cost_cost'>{value.car.Cost}</p>
             </div>
             <div className='wrapper_vs_line'>
                <p className='value_car_small_name'>{value.car.CarName}</p>
             </div>


      <div className='text_inside_information_wrapper'>
         <div className='left_side_info_wrap'>
           <p className='texts_company_head'>Company</p>
           <p className='texts_company_head'>People</p>
           <p className='texts_company_head'>License type</p>
         </div>

         <div className='right_side_info_wrap'>
          <h3 className='mock_info_inside'>{value.car.company}</h3>
          <h3 className='mock_info_inside'>{value.car.place}</h3>
          <h4 className='mock_info_inside'>{value.car.license}</h4>
         </div>
      </div>
         </div>
        </div>
    

  <Comfort_wrapper>
     
     <div className='comfort_text_wrapper'>
         <p className='comfort_text'>Comfort</p>
         <p className='comfort_lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ab incidunt harum nostrum soluta laboriosam fugit optio minus odit? Minima similique laudantium molestias ipsum maiores natus, eaque dignissimos, corrupti provident, rerum sapiente perspiciatis autem sunt! Labore dolorem, placeat culpa excepturi, quia dolorum sunt quibusdam nam officia nemo id. Enim voluptates ad deserunt eaque repudiandae quos harum aperiam aliquid eligendi delectus.</p>
     </div>

     <div className='comfort_img_wrapper'>
       <img className='comfort_image' src={comfort_img} alt='comfort_image'/>
     </div>

  </Comfort_wrapper>

  <Tidying_away>

    <div className='tyning_img_wrapper'>
        <img className='tyning_image' src={tidy_car} alt='tyning_image'/>
    </div>

    <div className='tyning_text_wrapper'>
      <p className='tidying_text'>Tidying away is child’s play!</p>
      <p className='tidying_lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</p>
    </div>

  </Tidying_away>

  <Comfort_wrapper_second>
     
     <div className='comfort_text_wrapper'>
         <p className='comfort_text'>Ventilated , Lit up</p>
         <p className='comfort_lorem'>In our vans and motorhomes, all our body lighting is 100% LED: a guarantee of energy efficiency and durability.As for ventilation, we also often offer double ventilation in the bathroom (Skylight + window), which is very popular with our customers…Camper relies on legendary Seitz windows. They offer the best insulation and are also the easiest to use and safest because they can’t be removed from the outside.</p>
     </div>

     <div className='comfort_img_wrapper'>
       <img className='comfort_image' src={vantilated_img} alt='comfort_image'/>
     </div>

  </Comfort_wrapper_second>

  <Tidying_away_second>

    <div className='tyning_img_wrapper'>
        <img className='tyning_image' src={easy} alt='tyning_image'/>
    </div>

    <div className='tyning_text_wrapper'>
      <p className='tidying_text'>Easy access</p>
      <p className='tidying_lorem'>We add little touches that your joints will thank you for…All our motorhomes are equipped with a built-in step to facilitate entry to the vehicleAll our vans are equipped with an electric step.</p>
    </div>

  </Tidying_away_second>

  <Comfort_wrapper_third>
     
     <div className='comfort_text_wrapper'>
         <p className='comfort_text'>Heating when driving</p>
         <p className='comfort_lorem'>Fuel heating is now very popular in the industry, but this was not always the case; Camper (once again) led the way in this area over 15 years ago.One of the advantages it offers is that it can heat up your vehicle while you drive, for a more comfortable arrival.</p>
         <div className='heating_butts_wrapper'>
            <Link to={"/AddCart"}><button className='heating_add'>ADD TO CART</button></Link>
            <button className='heating_compare'>COMPARE</button>
         </div>
     </div>

     <div className='comfort_img_wrapper'>
       <img className='comfort_image' src={heating} alt='comfort_image'/>
     </div>

  </Comfort_wrapper_third>



  </CarInfo>

  <BasicTabs />

        </div>
       )
       })}
    </div>
    </MainDetailWrapper>
  )
}

export default Detail;
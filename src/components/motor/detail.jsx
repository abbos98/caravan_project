import React from 'react';
import { Additional_info, Additional_info_three, Additional_info_two, CarInfo, MainDetailWrapper, Tidying_wrapper } from './detailDesign';
import { Link, useParams } from 'react-router-dom';
import { campcar } from '../mock/motorDetail';
import comfort_img from '../../assets/comfort_image.png';
import tidy_car from '../../assets/tidying_image.png';
import vantilated_img from '../../assets/ventilated_img.png';
import easy from '../../assets/Easy_access_img.png';


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
          <p className='mock_info_inside'>{value.car.company}</p>
          <p className='mock_info_inside'>{value.car.place}</p>
          <p className='mock_info_inside'>{value.car.license}</p>
         </div>
      </div>
         </div>
        </div>

    
    <Additional_info>
      <div className='comfort_wrapper'>
        <p className='comport_text'>Comfort</p>
        <p className='lorem_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae id, inventore nulla perferendis quisquam totam officia deserunt enim iusto, ipsa quasi fuga, asperiores officiis sunt est vero architecto mollitia sequi! Deserunt, consectetur. Ea, laudantium enim voluptate nihil unde voluptatem ad repudiandae provident repellendus, architecto temporibus officiis sint accusantium cum doloribus.</p>
      </div>

      <div className='comfort_img'>
       <img src={comfort_img} alt='image_car'/>
      </div>

    </Additional_info>


     <Tidying_wrapper>
       <div className='tidying_img'>
         <img src={tidy_car} alt='inside_image'/>
       </div>

       <div className='tidying_text_wrapper'>
          <p className='tidying_text'>Tidying away is child’s play!</p>
          <p className='tidying_lorem'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates laudantium sequi perferendis, ex consectetur eos pariatur fuga nulla id explicabo, vitae repudiandae. Quibusdam sint voluptate praesentium ratione suscipit quo alias nemo atque quisquam! Labore iusto dolore, aut, praesentium libero vitae ad incidunt, exercitationem vel eos soluta necessitatibus? Nulla accusantium doloribus, maxime repudiandae optio eius esse tempora amet qui est! Eius.</p>
         </div>

     </Tidying_wrapper>

     <Additional_info_two>
      <div className='comfort_wrapper'>
        <p className='comport_text'>Ventilated , Lit up</p>
        <p className='lorem_text_two'>In our vans and motorhomes, all our body lighting is 100% LED: a guarantee of energy efficiency and durability.As for ventilation, we also often offer double ventilation in the bathroom (Skylight + window), which is very popular with our customers…Camper relies on legendary Seitz windows. They offer the best insulation and are also the easiest to use and safest because they can’t be removed from the outside.												


        </p>
      </div>

      <div className='comfort_img'>
       <img src={vantilated_img} alt='image_car'/>
      </div>

    </Additional_info_two>

    <Tidying_wrapper>
       <div className='tidying_img'>
         <img src={easy} alt='inside_image'/>
       </div>

       <div className='tidying_text_wrapper'>
          <p className='tidying_text'>Easy access</p>
          <p className='tidying_lorem_two'>We add little touches that your joints will thank you for…All our motorhomes are equipped with a built-in step to facilitate entry to the vehicle All our vans are equipped with an electric step.
          </p>
         </div>

     </Tidying_wrapper>

     <Additional_info_three>
      <div className='comfort_wrapper'>
        <p className='comport_text'>Heating when driving</p>
        <p className='lorem_text_three'>Fuel heating is now very popular in the industry, but this was not always the case; Camper (once again) led the way in this area over 15 years ago. One of the advantages it offers is that it can heat up your vehicle while you drive, for a more comfortable arrival.</p>
      <div className='last_bottons_wrapper'>
         <button>ADD TO CART</button>
         <button>COMPARE</button>
      </div>
      
      </div>

      <div className='comfort_img'>
       <img src={vantilated_img} alt='image_car'/>
      </div>

    </Additional_info_three>

 

    </CarInfo>



        </div>
       )
       })}
    </div>
    </MainDetailWrapper>
  )
}

export default Detail;
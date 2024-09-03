import styled from "styled-components";

export const MainDetailWrapper = styled.div`
  

.wrapper_vs_img {
  width: 100%;
  height: 704px;
  margin-top: 22px;
  display: flex;

  align-items: center;
  justify-content: center;
} 
.text_buttos_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
}
.Aidal_text {
  color: #FFF;
  text-align: center;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.butts_wrapper {
  padding-top: 31px;
  display: flex;
  gap: 12px;
}
.add_cart_butt {
  max-width: 181.5px;
  width: 100%;
  height: 50.014px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid #FFF;
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  background: transparent;
}
.add_cart_butt:hover {
  background-color: #006DAB;
}
.compare_butt {
  max-width: 181.5px;
  width: 50vmin;
  height: 50.014px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid #FFF;
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  background: transparent;
}
.compare_butt:hover {
  background-color: #006DAB;

}
`

//////////////////////////////////////////////////////////////

export const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

.top_sideCar_detail {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  gap: 20px;
}
.image_wrapper {
  display: flex;
  
img { 
  max-width: 626px;
  width: 100%;
  height: 381px;
  flex-shrink: 0;
 }
}
.text_left_Aidal {
  flex: 3;
  padding: 25px;
  width: 600px;
  height: 360px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
}
.text_top_in {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.text_car_text {
  color: #000;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.text_cost_cost {color: #006DAB;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.wrapper_vs_line {

}
.value_car_small_name {
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
}
.text_inside_information_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
}
.left_side_info_wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.texts_company_head {
  color: var(--text, #373737);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.right_side_info_wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.mock_info_inside {
  color: rgba(55, 55, 55, 0.80);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media only screen and (max-width: 1210px) {


.top_sideCar_detail{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 }
}

`
export const Comfort_wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  

.comfort_text_wrapper {
  padding: 20px;
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
}
.comfort_text {
  color: var(--text, #373737);
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
}
.comfort_lorem {
  max-width: 533px;
  width: 100%;
  height: 169px;
  color: #373737;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}

.comfort_img_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.comfort_image {
  max-width: 683px;
  width: 100%;
  height: 477px;
}

@media only screen and (max-width: 1240px) {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;


.comfort_text_wrapper {
  display: flex;
  justify-content: center;
  padding: 0px;
  margin-left: -30px;
  margin-top: 20px;

}
.comfort_text {
  
}
.comfort_lorem {
  display: flex;
  justify-content: center;
  align-items: center;
}
.comfort_img_wrapper {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.comfort_image {
  width: 674px;
  height: 477px;
  flex-shrink: 0;
  border-radius: 10px;
 }
}
`
export const Tidying_away =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;

  
.tyning_img_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tyning_image {
  max-width: 674px;
  width: 100%;
}
.tyning_text_wrapper {
  color: var(--text, #373737);
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 70px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  
  
}
.tidying_text {
  color: var(--text, #373737);
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-bottom: 20px;
}
.tidying_lorem {
  max-width: 533px;
  width: 100%;
  height: 169px;
  color: #373737;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
@media only screen and (max-width: 1240px) {
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-left: -10px;

  .tyning_img_wrapper {

  }
  .tyning_image {
    border-radius: 10px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
  }
  .tyning_text_wrapper {
    display: flex;
    padding: 20px;
  }
  .tidying_text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}  
`
export const Comfort_wrapper_second = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

.comfort_text_wrapper {
  padding: 20px;
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.comfort_text {
  color: var(--text, #373737);
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
}
.comfort_lorem {
  max-width: 533px;
  width: 100%;
  height: 169px;
  color: #373737;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
.comfort_img_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.comfort_image {
  max-width: 683px;
  width: 100%;
  height: 477px;
}

@media only screen and (max-width: 1240px) {
  display: flex;
  flex-direction: column-reverse;
  margin-top: 50px;

.comfort_text_wrapper {
  margin-left: -50px;
 }
 .comfort_image{
  border-radius: 10px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
 }
}


`
export const Tidying_away_second =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  

  
.tyning_img_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tyning_image {
  max-width: 683px;
  width: 100%;
  height: 477px;
}
.tyning_text_wrapper {
  color: var(--text, #373737);
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 70px;
}
.tidying_text {
  color: var(--text, #373737);
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-bottom: 20px;
}
.tidying_lorem {
  max-width: 533px;
  width: 100%;
  height: 169px;
  color: #373737;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}

@media only screen and (max-width: 1420px) {
  display: none;
}
`
export const Comfort_wrapper_third =styled.div `
 display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;

.comfort_text_wrapper {
  padding: 20px;
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.comfort_text {
  color: var(--text, #373737);
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
}
.comfort_lorem {
  max-width: 533px;
  width: 100%;
  height: 169px;
  color: #373737;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
.heating_butts_wrapper {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
}
.heating_add {
  width: 180px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid #006DAB;
  color: #006DAB;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
}
.heating_add:hover {
  background-color: #006DAB;
  color: white;
}
.heating_compare {
  width: 180px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid #006DAB;
  color: #006DAB;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
}
.heating_compare:hover {
  background-color: #006DAB;
  color: white;
}
.comfort_img_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.comfort_image {
  max-width: 683px;
  width: 100%;
  height: 477px;
}

@media only screen and (max-width: 1240px) {
  display: flex;
  flex-direction: column-reverse;
  margin-top: 50px;

.comfort_text_wrapper {
  margin-left: -30px;
}
.comfort_img_wrapper {

}
.comfort_image {
  border-radius: 10px;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
}
}

`

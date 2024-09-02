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
  flex: 3;
  margin-left: -50px;
  
img { 
  width: 626px;
  height: 381px;
  flex-shrink: 0;
  /* background: url(<path-to-image>) lightgray 50% / cover no-repeat; */
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




`

export const Additional_info = styled.div`
  padding-top: 63px;
  display: flex;
  align-items: center;
  justify-content: center;

.comfort_wrapper {
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  gap: 20px;
  flex: 3;
  flex-direction: column;
  padding: 0px 50px;
  
}
.comport_text {
  color: var(--text, #373737);
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.lorem_text {
  color: #373737;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 
  padding-top: 20px;
  width: 533px;
  height: 169px;
  flex-shrink: 0;
}
.comfort_img {
  display: flex;
  flex: 3;
}
`
////////////////////////////////////////////////////


// Tidying away is child’s play! //

export const Tidying_wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -97px;

.tidying_img {
  display: flex;
  flex: 3;
  width: 683px;
  height: 477px;
  
}
.inside_image {
  
}
.tidying_text_wrapper {
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  gap: 20px;
  flex: 3;
  flex-direction: column;
  padding: 0px 50px;
}
.tidying_text {
  color: var(--text, #373737);
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
  padding: 20px;
  
 
}
.tidying_lorem {
  color: #373737;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 
  width: 533px;
  height: 169px;
  padding: 20px;

}
.tidying_lorem_two {
  width: 533px;
  height: 169px;
  flex-shrink: 0;
  color: #373737;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  
}

`
export const Additional_info_two = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

.comfort_wrapper {
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  gap: 20px;
  flex: 3;
  flex-direction: column;
  padding: 0px 50px;
  
}
.comport_text {
  color: var(--text, #373737);
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.lorem_text_two {
  width: 533px;
  height: 204px;
  flex-shrink: 0;
  color: #373737;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
.comfort_img {
  display: flex;
  flex: 3;
}
`

export const Additional_info_three = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;

.comfort_wrapper {
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  gap: 20px;
  flex: 3;
  flex-direction: column;
  padding: 0px 50px;
  
}
.comport_text {
  color: var(--text, #373737);
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.lorem_text_three {
  width: 533px;
  height: 169px;
  flex-shrink: 0;
  color: #373737;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
.last_bottons_wrapper {
  gap: 12px;
  display: flex;
button {
  width: 180px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid #006DAB;
  cursor: pointer;
  color: #006DAB;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}  
button:hover {
  background-color: #006DAB;
}
}
.comfort_img {
  display: flex;
  flex: 3;
}
`
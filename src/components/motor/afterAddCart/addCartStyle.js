import styled from "styled-components";

export const Main_wrapper = styled.div`


.main_text_top{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
}
.text_style_cart {
  color: var(--text, #373737);
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.line_cart_under {
  width: 100px;
  height: 3px;
  background: #FF7A00;
}

.main_left_and_right_side_wrapper {
    display: flex;
}

.left_side_car_image_wrapper{
  width: 811px;
  height: 476px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
  margin-top: 50px;
  display:flex;
  flex-direction: column;
  align-items:center;
}
.d-block {
  width: 400px;
  height: 406px;
  display: flex;
  justify-content: center;
  align-content:center;
}
.wrapper_info {
    display: flex;
  justify-content: center;
  align-content:center;
}
.cost_car_info {
  display: flex;
  justify-content: center;
  align-content:center;
  max-width: 350px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: rgba(55, 55, 55, 0.10);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
  padding-top: 15px;
}
.purchase_price {
  color: var(--text, #373737);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.purchase_number {
  color: #373737;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 20px;
}

//////////////////////////////////////////////////////////

.right_side_car_image_wrapper {
  overflow-y:scroll;
  height: 600px;
}
.car_top_info {

}
.car_name_text_info {
  color: var(--text, #373737);
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.car_name_number_info {
  color: var(--blue, #006DAB);
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.car_desc {
  color: #373737;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-top: 20px;
}
.car_lorem_text {
  max-width: 311px;
  width: 100%;
  color: rgba(55, 55, 55, 0.70);
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

///////////////////////////////////////////////////

.button_vS_details_wrapper {
  margin-top: 187px;
}
.Enter_Account_Details_wrapper {
    margin-top: 42px;
    margin-bottom: 32px;
}
.Continue_to_payment {
  max-width: 311px;
  width: 100%;
  height: 45px;
  border-radius: 10px;
  background: var(--blue, #006DAB);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
  color: #FFF;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
}
.Continue_to_payment:hover {
  color: #006DAB;
  background: gray;
}
.Account_Details_style {
  color: #000;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.first_name_style {
  color: rgba(55, 55, 55, 0.80);
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 20px;
}
.first_name_input {
  max-width: 311px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: rgba(55, 55, 55, 0.10);
  color: rgba(55, 55, 55, 0.60);
  font-family: "Open Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 20px;
  cursor: pointer;
  border: none;
  
}
.select_in {
  max-width: 311px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: rgba(55, 55, 55, 0.10);
  border: none;
  cursor: pointer;
  padding: 0 15px;
}

.place_order_wrapper {
  margin-top: 58px;
  margin-bottom: 72px;
}
.Place_Order {
  max-width: 311px;
  width: 100%;
  height: 45px;
  border-radius: 10px;
  background: var(--blue, #006DAB);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
  color: #FFF;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
}


`
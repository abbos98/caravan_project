import styled from "styled-components";

export const Main_compare_components = styled.div`

.wrapper_of_text_center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.home_motors {
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.motors {
  color: #FFF;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.compare_models_and_plus_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  margin-top: 80px;
  margin-bottom: 40px;
}
.compare_styled {
  color: var(--text, #373737);
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.wrapper_plus {
  display: flex;
  gap: 10px;
}
.dum {
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 50%;
  stroke-width: 2px;
  stroke: var(--text, #373737);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.dum:hover {
    background-color: gray;
    
}
.add_style {
  color: var(--text, #373737);
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  
}
.asosiy_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 50px;
}
.car_container_uch {
  display: flex;
  flex-direction: column;
  max-width: 395px;
  width: 100%;
  height: 742px;
}
.image_wrapper_inside {
  max-width: 395px;
  width: 100%;
  height: 198px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  align-items: center;
  justify-content: center;
}
.image_style {
  max-width: 289.452px;
  width: 100%;
  height: 173.198px;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
}
.name_wrapper_in {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
}
.car_of_style {
  color: #000;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.button_wrap {
  display:flex;
  align-items: center;
  justify-content: center;
}
.order_slice {
  width: 367px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid var(--blue, #006DAB);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
  color: #006DAB;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 60px;
  
}
.order_slice:hover {
    background-color: aliceblue;
}
`
import styled from "styled-components";

export const The_best_main = styled.div`
  max-width: 222px;
  width: 100%;
  height: 2595px;
  padding-top: 35px;

.cost_style_in {
  color: var(--text, #373737);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; 
  border-bottom: 1px solid gray;
}


@media only screen and (max-width:1240px) {
  
}
`


export const MainWrapper_acardion = styled.div`
 
.from_vs_to {
  display: flex;
  justify-content: center;
  gap: 25px;
}
.from_text {
  color: var(--text, #373737);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; 
}
.text_area {
  width: 91px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid rgba(55, 55, 55, 0.60);
  margin-top: 3px;
  cursor: pointer;
}
.text_area:hover {
  background-color: rgba(213, 213, 213, 0.24);
}
.to_text {
  color: var(--text, #373737);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
}

.box_left_side {
  width: 240px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

h2 {
  display: flex;
  width: 100%;
  padding-bottom: 15px;
  border-bottom: 1px solid gray;
}
.icon_and_text {
  display: flex;
  
h2 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; 
 }
 img {
   cursor: pointer;
 }
}
.wrapper_texts {
  display: flex;
  flex-direction: column;
  gap:10px;
 }
}
.box_left_side_b {
   width: 240px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 116px;
h2 {
   display: flex;
   color: var(--text, #373737);
   font-size: 18px;
   font-weight: 600;
   padding-bottom: 15px;
   border-bottom: 1px solid gray;
}
.from_vs_to {
   display: flex;
   gap: 25px;
   }
}
.text_left_side {
   display:flex;
   
}
.input_in {
   width: 22px;
   height: 22px;
   flex-shrink: 0;
   border-radius: 5px;
   border: 1px solid #666;
   background: #FFF;
   cursor: pointer;
}
.label_text {
   color: var(--text, #373737);
   font-size: 18px;
   font-style: normal;
   font-weight: 500;
   line-height: 100%;
   margin-top: 2px;
}
` 

export const Wrapper_of_buttons = styled.div `
   display: flex;
   gap:8.2px;
   margin-top: 50px;

.cancel_butt {
   width: 115.804px;
   height: 38.968px;
   flex-shrink: 0;
   border-radius: 60px;
   background: var(--sariq, #FF7A00);
   box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
   color: #FFF;
   font-family: "Open Sans";
   font-size: 16px;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
}
.cancel_butt:hover {
   background-color: #006DAB;
}
.search_butt {
   width: 115.804px;
   height: 38.968px;
   flex-shrink: 0;
   border-radius: 60px;
   background: var(--blue, #006DAB);
   box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
   color: #FFF;
   font-family: "Open Sans";
   font-size: 16px;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;  
}
.search_butt:hover {
   background-color:#FF7A00;
}

`

export const Compares_butt_container =styled.div`
  margin-top: 50px;

.compare_style {
  color: var(--blue, #006DAB);
  font-family: "Open Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.small_car_container {
   margin-top: 10px;
}
.car_small_style {
  width: 75px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.10);
}
.compare_butt_wrapper {
  margin-top: 30px;
  display: flex;
  justify-content: end;
}
.comare_style {
  width: 115.804px;
  height: 38.968px;
  border-radius: 60px;
  background: var(--blue, #006DAB);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
  color: #FFF;
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border:none;
  cursor: pointer;
}
.comare_style:hover {
 background-color: #FF7A00;
}
`
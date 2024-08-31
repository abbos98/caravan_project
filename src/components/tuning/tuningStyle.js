import styled from "styled-components";

export const Main_Berdiyor = styled.div `

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
.our_range {
   color: #FFF;
   font-size: 27px;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
}
.motors {
   color: #FFF;
   font-size: 80px;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
}
`

export const Main_items = styled.div `

  display: flex;
  justify-content: center;
  gap: 30px;

@media only screen and (max-width: 1240px) {
.Left_side {
  display:none;
 }
}


`

export const Left_side = styled.div `
  display:flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 57px;

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
   column-gap: 5px;
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
.wrapper_of_buttons {
   display: flex;
   gap:8.2px;
   margin-top: 50px;
}
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
.compare_text {
   color: var(--blue, #006DAB);
   font-family: "Open Sans";
   font-size: 14px;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
}
.wrapper_cars_img {
   display:flex;
   gap: 5px;
   width: 242px;;
}
.img_container {
   display: flex;
   align-items: center;
   justify-content: center;
   width: 75px;
   height: 90px;
   flex-shrink: 0;
   border-radius: 10px;
   background: url(<path-to-image>) lightgray 50% / cover no-repeat, #FFF;
   box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.10);
}

`

export const Small_phone =styled.div `

@media only screen and (max-width: 710px) {
  display: none;
}
`

/////////////////////////////////////////////////////////


export const Right_side = styled.div `
   display: flex;
   flex-direction: column;
   margin-top: 50px;


   .phone_container {
      display: none;
   }
.items_wrapper {
   display: flex;
   align-items: center;
   justify-content: space-between;
   max-width: 956px;
   border-bottom: 1px solid gray;
   padding-bottom: 15px;
}
.item_text_wrapper {
   display: flex;
   align-items: center;

}
.item {
   color: var(--text, #373737);
   font-size: 18px;
   font-style: normal;
   font-weight: 600;
   line-height: 100%;
}
.number {
   color: var(--blue, #006DAB);
   font-size: 18px;
   font-style: normal;
   font-weight: 600;
   line-height: 100%;
   margin-left: 10px;
}

.sort_by_wrapper {
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 10px;
}
.sort_by_text {
   color: var(--text, #373737);
   font-size: 16px;
   font-style: normal;
   font-weight: 500;
   line-height: 100%;
}
.sort_by_select {
   width: 227px;
   height: 30px;
   flex-shrink: 0;
   border-radius: 5px;
   border: 1px solid rgba(55, 55, 55, 0.30);
   color: rgba(55, 55, 55, 0.60);
   font-size: 14px;
   font-style: normal;
   font-weight: 500;
   line-height: 100%;
   display: flex;
   align-items: center;
   padding-left: 10px;
   cursor: pointer;
}
.four_in {
   width: 30px;
   height: 30px;
   flex-shrink: 0;
   border-radius: 0px 5px 5px 0px;
   border: 1px solid rgba(55, 55, 55, 0.30);
   margin-left: -40px;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
}
.four_in:hover {
   background-color: rgba(213, 213, 213, 0.40);
}
.sixteen {
   width: 80px;
   height: 30px;
   flex-shrink: 0;
   border-radius: 5px;
   border: 1px solid rgba(55, 55, 55, 0.30);
}
.icon_down {
   width: 30px;
   height: 30px;
   border-radius: 0px 5px 5px 0px;
   border: 1px solid rgba(55, 55, 55, 0.30);
   margin-left: 50px;
   margin-top: -0.5px;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
}
.icon_down:hover {
   background-color: rgba(213, 213, 213, 0.40);
}
.menu_dropDown {
   display: flex;
}
.menu {
   width: 41px;
   height: 30px;
   border-radius: 5px 0px 0px 5px;
   border: 1px solid rgba(55, 55, 55, 0.30);
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
}
.menu:hover {
   background-color: rgba(213, 213, 213, 0.40);
}
.dropdown {
   width: 40px;
   height: 30px;
   border-radius: 0px 5px 5px 0px;
   border: 1px solid rgba(55, 55, 55, 0.30);
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
}
.dropdown:hover {
   background-color: rgba(213, 213, 213, 0.40);
}
.phone_container {
   display: none;
}

@media only screen and (max-width: 1240px) {
   
.items_wrapper {
      width: 674px;
   }
   .phone_container {
      display: none;
   }
}

@media only screen and (max-width: 710px) {
  .items_wrapper {
   display: none;
  }

.phone_container {
   display: flex;
}  
.phone_items_wrapper {
   display: flex;
   flex-direction: column;
 
 }
.top_side_phone {
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.phone_item_text {
   display: flex;
   gap: 7px;
}
.phone_item {
   color: var(--text, #373737);
   font-size: 18px;
   font-style: normal;
   font-weight: 600;
   line-height: 100%;
}
.phone_num {
   color: var(--blue, #006DAB);
   font-size: 18px;
   font-style: normal;
   font-weight: 600;
   line-height: 100%;
}
.phone_icons_wrapper {
   display: flex;
}
.phone_menu_wr {
   width: 41px;
   height: 30px;
   flex-shrink: 0;
   border-radius: 5px 0px 0px 5px;
   border: 1px solid rgba(55, 55, 55, 0.30);
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;

}
.phone_menu_wr:hover {
   background-color: rgba(240, 242, 240);
}
.phone_drop_down_wr {
   width: 40px;
   height: 30px;
   flex-shrink: 0;
   border-radius: 0px 5px 5px 0px;
   border: 1px solid rgba(55, 55, 55, 0.30);
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
}
.phone_drop_down_wr:hover {
   background-color: rgba(240, 242, 240);
}
}
.bottom_side_phone{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
 }
.phone_sort_by {
  color: var(--text, #373737);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; 
 }

.select_phone {
  width: 176px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid rgba(55, 55, 55, 0.30);
  margin-left: 10px;
  padding-left: 10px;
 }
 .phone_inside_icon {
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 0px 5px 5px 0px;
  border: 1px solid rgba(55, 55, 55, 0.30);
  margin-left: -30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
 }
 .phone_inside_icon:hover {
   background-color: rgba(240, 242, 240);
 }
.phone_sixteen {
  width: 80px;
  height: 30px;
  color: gray;
  border-radius: 5px;
  border: 1px solid rgba(55, 55, 55, 0.30);
  margin-left: 27px;
  display: flex;
  align-items: center;
  padding-left: 10px;
 
} 
.inside_down_icons {
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 0px 5px 5px 0px;
  border: 1px solid rgba(55, 55, 55, 0.30);
  margin-left: 19px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid gray;
}
.inside_down_icons:hover {
 background-color: rgba(240, 242, 240);
}






`

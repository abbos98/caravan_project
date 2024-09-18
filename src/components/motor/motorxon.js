import styled from "styled-components";

export const Main_Murodil = styled.div `

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

export const Small_phone =styled.div `

@media only screen and (max-width: 710px) {
  display: none;
}
`

/////////////////////////////////////////////////////////


export const Right_side = styled.div `
   display: flex;
   flex-direction: column;
   justify-content: start;
   margin-top: 50px;
   padding-top: 0px;


.phone_container {
  display: none;
}
.items_wrapper {
   display: flex;
   align-items: center;
   justify-content: space-between;
   max-width: 956px;
   width: 100%;
   border-bottom: 1px solid gray;
   padding-bottom: 15px;
}
.menuIcon_style {
   display: none;
}
.anchore_wrapper {
   display: none;
}
.item_text_wrapper {
   display: flex;
   align-items: center;
   padding-top: 15px;
  
}
.main_not_left {
   display: none;
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
   padding-top: 15px;
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
.menuIcon_style {
   display: flex;
}
.anchore_wrapper {
   display: flex;
}
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
   align-items: center;
   justify-content: center;
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
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
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




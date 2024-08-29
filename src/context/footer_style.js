import styled from "styled-components";



export const Main_footer = styled.div` 
   width: 100%;
   height: 350px;
   flex-shrink: 0;
   background: var(--blue, #006DAB);
   display: flex;
   align-items: center;
   justify-content: space-around;
   
.texts_container {

}
.single_text {
   color: #FFF;
   font-size: 40px;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
   cursor: pointer;
   padding-bottom: 150px;
}

.larger_text {
   color: #FFF;
   font-size: 20px;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
   padding-bottom: 30px;
}
.order_text {
   padding-top: 9px;
   color: #FFF;
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   cursor: pointer;
}
.order_text:hover {
    text-decoration:underline;

}
.iconss_wrapper {
   gap: 5px;
}
.icons_style {
   width: 25.429px;
   height: 25.429px;
   flex-shrink: 0;
}
`

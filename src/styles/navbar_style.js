import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarOn = styled.div `
   padding-top: 15px;
   display: flex;
   padding-left: 70px;
   
.sss {
   flex: 1;
   img {
      display: none;
   }
}

h1 {
   display: flex;
   justify-content: center;
   align-items: center;
   color: var(--blue, #006DAB);
   font-size: 38px;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
   cursor: pointer;
}
 .Axror_div {                           // hamiwa orab turganiga style ber!
   display: flex;
   flex: 1;
   gap: 20px;
   align-items: center;
   justify-content: start;
   padding-left: 15px;
 }
 .eng {
  display: flex;
  gap:  5px;
  align-items: center;
 }
 .kal {
 display: none;
 }


@media only screen and (max-width: 1240px) {
  .sss {
   flex: 3;
   display: flex;
   align-items: center;
   justify-content: start;
   gap: 16px;
   img {
      display: flex;
      cursor: pointer;
   }
  }
   .three_line_icon {
  display: flex;
  width: 30px;
  height: 30px;
  cursor: pointer;
 } 
 .Axror_div {
   flex: 3;
   display: flex;
   justify-content: end;
   align-items: center;
   padding-right: 80px;
 } 
@media only screen and (max-width: 710px) {
   .sss {
      img{
         display: none;
      }
   }
   .three_line_icon {
      display: none;
   }
   .person_img {
      display: none;
   }
   .eng {
      display: none;
   }
   .kal {
      display: flex;
      cursor: pointer;
   }
   
 }
}
//////////////////////////////////////////


`

export const Nlink = styled(Link)``

export const Murodil_div = styled.div `
   display: flex;
   flex: 3;
   justify-content: space-around;
   align-items: center;
   

.text_in {
   color: var(--text, #373737);
   font-size: 16px;
   font-style: normal;
   font-weight: 600;
   line-height: normal;  
}
.text_in:hover {
   text-decoration: underline;
}
.text_icon {
   display: flex;
   align-items: center;
   justify-content: center;
img {
   margin-left: 5px;
 }   
}
@media only screen and (max-width: 1240px) {
   display: none;

}

@media only screen and (max-width: 710px) {
   display: none;
}

`




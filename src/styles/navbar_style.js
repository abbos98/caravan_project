import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarOn = styled.div `
   padding-top: 15px;
   display: flex;
   padding-left: 10px;
   
 h1 {
   flex: 1;
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

`


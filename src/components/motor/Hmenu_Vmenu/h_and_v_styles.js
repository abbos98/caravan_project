import styled from "styled-components";

// Hmenu starting //

export const Hmenucha = styled.div`
  display: grid;
  grid-template-areas: "a a a a";
  gap: 20px;
  padding: 20px 0px;

.boxcha {
  width: 223px;
  height: 307px;
  border-radius: 20px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.30);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
}
.boxcha_imgcha {
  border-radius: 20px;
  height: 132px;
  
}
.wrapper_of_butt {
   display: flex;
   flex-direction: column;

h3 {
  padding-top: 2px;
  color: var(--text, #373737);
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
 }
h2 {
  padding-top: 18px;
 }
}
.number_grade {
  display:flex;
  width: 100%;
  justify-content: space-between;
  align-items: end;
  color: var(--text, #373737);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.start {
  display:flex;
  align-items: center;
  gap: 3px;
  color: var(--text, #373737);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
img {
  width: 14px;
  height: 14px;
 }
}
.cost_car {
  color: var(--blue, #006DAB);
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.wrapper_of_buttons {
  display: flex;
  padding-top: 13px;
  justify-content: space-between;
 }
.butts {
  width: 94px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid var(--blue, #006DAB);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
  cursor: pointer;
  color: var(--blue, #006DAB);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.butts:hover {
  background-color: #006DAB;
  color: white;
 }

@media only screen and (max-width: 1240px) {
  display: grid;
  grid-template-areas: "a a";

.boxcha {
  width: 327px;
  height: 450px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  justify-content: space-around;
  padding-left: 10px;
 
 
.boxcha_imgcha {
  display: flex;
  justify-content: center;
  width: 305px;
  height: 177px;
 }
}
.wrapper_of_butt {

h3 {
  color: var(--text, #373737);
  font-family: "Open Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 20px;
}
}
.number_grade {
  padding-top: 5px;
 }
.cost_car {
  padding-top: 18px;
}
.wrapper_of_buttons {

.butts {
  width: 144.036px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid var(--blue, #006DAB);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
  color: var(--blue, #006DAB);
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  }
  .butts:hover {
    background-color:  red;
    color: white;
  }
 }
}
margin-bottom: 80px; 

/////////////////////////////////////////

@media only screen and (max-width: 710px) {
  display: grid;
  grid-template-areas: "a";

  .boxcha {
  width: 354px;
  height: 430px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  align-items: center;
 }
 .boxcha_imgcha {
  width: 271px;
  height: 177px;
  flex-shrink: 0;
  border-radius: 20px;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
 }
 .wrapper_of_butt {
  h3 {
      color: var(--text, #373737);
      font-family: "Open Sans";
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
   }
 }
 .number_grade {
  color: var(--text, #373737);
  font-family: "Open Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
 }

.wrapper_of_buttons {
  gap: 10px;
  .butts {
     width: 159.051px;
     height: 45px;
     flex-shrink: 0;
     border-radius: 10px;
     border: 2px solid var(--blue, #006DAB);
     box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
     color: var(--blue, #006DAB);
     font-family: "Open Sans";
     font-size: 16px;
     font-style: normal;
     font-weight: 700;
     line-height: normal;
  }
}
}

`
// Hmenu ending //
/////////////////////////////////////////
// Vmenu starting //

// Vmanu
export const RightNavbarRow = styled.div`
  display: grid;
  grid-template-areas: " i ";
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  row-gap: 20px;

.tuzatish {
  display: flex;
  align-items: center;
  justify-content: center;
} 
.Lengmenus{
  max-width: 955px;
  width: 100%;
  height: 180px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.40);
  border-radius: 18px;
  margin-top: 20px;
  padding: 18px;
  display: flex;
.Car0 img{
  max-width: 280px;
  width: 100%;
  height: 143px;
  border-radius: 20px;
}
.menu-wrap{
    max-width:100%;
    width: 100%;    
}
.to-wrap{
    display: flex;
    justify-content: space-between;
    margin-top: 10px; 
    div {
    display: flex;
    } 
} 
h5{
    display: flex;
    justify-content: space-between;
}
.ww {
    display: flex;
    margin-top: 30px;
    gap: 14px;
} .to-wrap h2 {
    color: #006DAB;
}
.ww button {
  width: 100%;
  height: 35px;
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid var(--blue, #006DAB);
  background-color: white;
  color: #006DAB;
  cursor: pointer;
  margin-top: 13px;
}
.ww :hover{
    background-color:  #006DAB;
    color: white;
 }
}







@media only screen and (max-width: 710px){
  width: 100%;

.Lengmenus {
  margin: 7px;
}


}



`;



// Vmenu ending //

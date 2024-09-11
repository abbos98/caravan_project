import styled from "styled-components";

export const MainDetails_in = styled.div`




.campingIn_container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
}
.camping_style {
  width: 194px;
  height: 147px;
  border-radius: 10px;
  cursor: pointer;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
}
.texts_under_images {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 20px;
}
.camping_del {
  color: #000;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.location_vs_map {
  display: flex;
  padding-top: 11px;
}
.location_style {
  color: var(--blue, #006DAB);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.copy_map_butt {
  max-width: 120px;
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--sariq, #FF7A00);
  color: var(--sariq, #FF7A00);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 20px;
}



.under_line {
  max-width: 1226px;
  width: 100%;
  height: 1px;
  background: rgba(55, 55, 55, 0.20);
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

@media only screen and (max-width: 1240px) {
  .campingIn_container {
   display: grid;
   grid-template-areas: 'a a a a a';
  }
  .absd {
    display: none;
  }
}
@media only screen and (max-width: 1060px) {
  .campingIn_container {
   display: grid;
   grid-template-areas: 'a a a a ';
  }
  .absd {
    display: none;
  }
  .abs {
    display: none;
  }
}
@media only screen and (max-width: 850px) {
  .campingIn_container {
   display: grid;
   grid-template-areas: 'a a a';
  }
  .absd {
    display: none;
  }
  .abs {
    display: none;
  }
  .ab {
    display: none;
  }
}
@media only screen and (max-width: 640px) {
  .campingIn_container {
   display: grid;
   grid-template-areas: 'a a ';
  }
  .absd {
    display: none;
  }
  .abs {
    display: none;
  }
  .ab {
    display: none;
  }
  .a {
    display: none;
  }
}
@media only screen and (max-width: 520px) {
  .campingIn_container {
   display: grid;
   grid-template-areas: 'a';
  }
  .absd {
    display: none;
  }
  .abs {
    display: none;
  }
  .ab {
    display: none;
  }
  .a {
    display: none;
  }
  .h {
    display: none;
  }
}
/* ///////////////////////////////////////// */

.location_container {
  display: flex;
  align-content: center;
  justify-content: start;
  padding: 0px 20px;
}
.Korea_seul_wrap {
  display: flex;
  justify-content: center;
}
.carbon_img {
  width: 20px;
  height: 20px;
}
.korea_text {
  color: var(--text, #373737);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 10px;
  cursor: pointer
}
.Korea_seul_wrap_two {
  display: flex;
  justify-content: center;
  margin-left: 127px;
}
.Korea_seul_wrap_three {
  display: flex;
  justify-content: center;
  margin-left: 100px;
}
.two {
  color: var(--blue, #006DAB);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
}


/* ///////////////////////////////////////// */

.Description_wrap {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.desc_text {
  color: var(--blue, #006DAB);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.desc_lorem {
  color: var(--text, #373737);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.main_map_image {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
} 
.map_image_style {
  max-width: 1226px;
  width: 100%;
  height: 552px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
}


`
import styled from "styled-components";

export const WrapperCampingCar = styled.div`

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


.images_wrapper {
  margin-top: 80px;
  margin-bottom: 180px;
  display: grid;
  grid-template-areas: 'a a a';
  justify-content: center;
  row-gap: 110px;
  column-gap: 20px;


}
.firstImage {
  width: 395px;
  height: 300px;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
}
.campingPlace_text {
  color: var(--text, #373737);
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 15px;
}
.locationText {
  color: var(--text, #373737);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 5px;
}


`


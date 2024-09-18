import styled from "styled-components";

export const Top_text_info = styled.div`


.Premium_vs_best_wrapper {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.premium_wrap {

}
.premium_style {
  color: var(--text, #373737);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.best_wrap {
  max-width: 177px;
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid rgba(55, 55, 55, 0.30);
  background: #FFF;
}
.best_right {
  max-width: 43px;
  width: 100%;
  height: 35px;
  border-radius: 0px 5px 5px 0px;
  border: 1px solid rgba(55, 55, 55, 0.30);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 133px;
  margin-top: -1px;
}
.best_right:hover {
    background-color: gray;
}

.car_info_boxes_wrapper {
  padding: 0px 20px;
  margin-top: 44px;
}
.box {
  display: flex;
  justify-content: space-between;
}
.left_side_image {
  display: flex;
}
.image_ins {
 
}
.middle_side_text_wrap {
  width: 500px;
  margin-left: 15px;

}
.text_style_one {
  color: var(--text, #373737);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.text_style_two {
  color: rgba(55, 55, 55, 0.80);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.text_style_three {
  color: #373737;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.right_side_info_box {
  max-width: 180px;
  width: 100%;
}

.line_under {
  width: 100%;
  height: 1px;
  background: rgba(55, 55, 55, 0.15);
  margin-top: 30px;
}
`

export const Q_vs_A_wrapper_main = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 20px;



.Third_text {
  width: 707px;
  margin: 50px 0px 70px 0px;
}
.QvsA_wrapper_login {
  max-width: 450px;
  width: 100%;
  height: 452px;
  border-radius: 10px;
  border: 1px solid rgba(0, 109, 171, 0.10);
  background: #FFF;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
.qa_style {
  color: var(--text-color, #023047);
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; 
  margin-top: 30px;
}
.input_style {
  max-width: 390px;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: 1px solid var(--text, #373737);
  color: rgba(55, 55, 55, 0.70);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  padding-left: 20px;
  margin-top: 20px;
  cursor: pointer;
}
.input_style_two {
  max-width: 390px;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  border: 1px solid var(--text, #373737);
  color: rgba(55, 55, 55, 0.70);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; 
  padding-left: 20px;
  margin-top: 20px;
  cursor: pointer;
}
.send_question_style {
  color: #FFF;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; 
  max-width: 390px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: var(--blue, #006DAB);
  border: none;
  margin-top: 25px;
  cursor: pointer;
}
.send_question_style:hover {
  background-color: aliceblue;
  color: black;
}

@media only screen and (max-width: 1240px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

.Third_text {
  width: 674px;

}
.QvsA_wrapper_login {
  background-color: red; 
 }
}
`

export const FAQ_main_wrapper = styled.div`
 display: flex;
 justify-content: space-between;
 padding: 0px 30px;

.first_side_in {
  max-width: 727px;
  width: 100%;
  margin-top: 80px;
}
.QvsA_wrapper_login {
  max-width: 450px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgba(0, 109, 171, 0.10);
  background: #FFF;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);

}
.qa_style {
  color: var(--text-color, #023047);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; 
 
}
.input_style {
  max-width: 390px;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: 1px solid var(--text, #373737);
  color: rgba(55, 55, 55, 0.70);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  padding-left: 20px;
  margin-top: 20px;
  cursor: pointer;
  border: none;
}
.input_style_two {
  max-width: 390px;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  border: 1px solid var(--text, #373737);
  color: rgba(55, 55, 55, 0.70);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; 
  padding-left: 20px;
  margin-top: 20px;
  cursor: pointer;
}
.send_question_style {
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; 
  max-width: 390px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: var(--blue, #006DAB);
  border: none;
  margin-top: 25px;
  cursor: pointer;
}
.send_question_style:hover {
  background-color: aliceblue;
  color: black;
}

@media only screen and (max-width: 1240px) {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.first_side_in {
  max-width: 674px;
  width: 100%;
}
.QvsA_wrapper_login {
  max-width: 674px;
  width: 100%;
  height: 432px;
  border-radius: 10px;
  border: 1px solid rgba(0, 109, 171, 0.10);
  background: #FFF;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
  margin-left: 0px;
  margin-top: 40px;
}
.input_style {
  max-width: 614px;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: 1px solid var(--text, #373737);
}
.input_style_two {
  max-width: 614px;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  border: 1px solid var(--text, #373737);
}
.send_question_style {
  max-width: 614px;
  width: 100%;
  height: 50px;
}




`

export const Map_side = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 80px;
  padding: 0px 30px;
  

.left_side_image {
  margin-top: 50px;
}
.imaage_wrap_jh {

}
.imaage_wrap_style {
  max-width: 707px;
  width: 100%;
  height: 298px;
  border-radius: 10px;
  background: url(<path-to-image>) lightgray -236.007px -34.061px / 173.41% 152.73% no-repeat;
}
.two_box_wrap {
  display: flex;
  gap: 28px;
  margin-top: 28px;
}
.phone_num {
  max-width: 340px;
  width: 100%;
  height: 109px;
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
}
.email {
  max-width: 340px;
  width: 100%;
  height: 109px;
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
}
.QvsA_wrapper_login {
  max-width: 450px;
  width: 100%;
  height: 452px;
  border-radius: 10px;
  border: 1px solid rgba(0, 109, 171, 0.10);
  background: #FFF;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
  margin-left: 70px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.qa_style {
  color: var(--text-color, #023047);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; 
 
}
.input_style {
  max-width: 390px;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: 1px solid var(--text, #373737);
  color: rgba(55, 55, 55, 0.70);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  padding-left: 20px;
  margin-top: 20px;
  cursor: pointer;
  border: none;
}
.input_style_two {
  max-width: 390px;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  border: 1px solid var(--text, #373737);
  color: rgba(55, 55, 55, 0.70);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; 
  padding-left: 20px;
  margin-top: 20px;
  cursor: pointer;

}
.send_question_style {
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; 
  max-width: 390px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: var(--blue, #006DAB);
  border: none;
  margin-top: 25px;
  cursor: pointer;
}
.send_question_style:hover {
  background-color: aliceblue;
  color: black;
}


@media only screen and (max-width: 1240px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}




`










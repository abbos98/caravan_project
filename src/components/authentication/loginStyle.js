import React from "react";
import styled from "styled-components";


export const LoginMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

.login_wrapper {
  width: 500px;
  height: 614px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: aliceblue;

}
.sign_ing_text {
    p {
    color: var(--text, #373737);
    font-family: "Open Sans";
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
.email_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 37px;
}
.email_text {
  color: rgba(55, 55, 55, 0.80);
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.yourEmail_text {
  width: 434px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(55, 55, 55, 0.10);
  color: rgba(55, 55, 55, 0.60);
  font-family: "Open Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
  border: none;
  padding-left: 20px;
  cursor: pointer;
  
}
.password_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
}
.Password_text {
  color: rgba(55, 55, 55, 0.80);
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.yourPassword_text {
  width: 434px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(55, 55, 55, 0.10);
  color: rgba(55, 55, 55, 0.60);
  font-family: "Open Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
  padding-left: 20px;
  border: none;
  cursor: pointer;
}
.keepMe_and_forgetP_wrapper {
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding: 10px;
}
.keepMe_wrapper {
  display: flex;
}
.checkbox_input {
    cursor: pointer;
}
.keepMe_text {
  color: #373737;
  font-family: "Open Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 5px;
}
.forget_pass_wrapper {

}
.forget_text {
  color: #373737;
  font-family: "Open Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
} 
.butts_container {
  padding-top: 25px;
}
.sign_in_butt {
  width: 434px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--blue, #006DAB);
  color: #FFF;
  font-family: "Open Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  cursor: pointer;
}
.sign_in_butt:hover {
    background-color: white;
    color:#006DAB;
    border: 2px solid var(--blue, #006DAB);
}
.line_or_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
}
.left_line_or {
  width: 119.017px;
  height: 1px;
  background: rgba(55, 55, 55, 0.15);
}
.or_text {
    padding: 0px 10px;
}
.right_line_or {
  width: 119.017px;
  height: 1px;
  background: rgba(55, 55, 55, 0.15);
}

.icons_wrapper_in {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9.2px;
  padding-top: 20px;
}
.naver_icon {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: #039600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.N_inside {
  width: 20.7px;
  height: 18.4px;
  flex-shrink: 0;
  color: white;
}
.g_icon {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: #BC0000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.g_text {
  
}

.k_talk {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: #FFC700;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.createAccout_but_wrapper {
  padding-top: 20px;
}
.create_acc_butt {
  width: 434px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid var(--blue, #006DAB);
  color: var(--blue, #006DAB);
  font-family: "Open Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
}
.create_acc_butt:hover {
    background-color: #006DAB;
    color: white;
}



`
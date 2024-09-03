import styled from "styled-components"; 

export const RegisterMain =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

.registerMain_container {
  max-width: 500px;
  width: 100%;
  height: 530px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
  padding: 35px;
}
.regist_x_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.registrate_text {
  color: var(--text, #373737);
  font-family: "Open Sans";
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.cancel_icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  cursor: pointer;
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
.password_wrapper_two {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
}
.Password_text_two {
  color: rgba(55, 55, 55, 0.80);
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.yourPassword_text_two {
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
.checkbox_keep {
  display: flex;
  align-items: center;
  gap: 5px;
  padding-top: 15px;
}
.checkbox_hob {
  width: 23px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 5px;
  background: rgba(55, 55, 55, 0.15);
  cursor: pointer;
}
.keep_text_me {
  color: #373737;
  font-family: "Open Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.register_button_wrapper {
  display: flex;
  padding-top: 27px;
}
.register_butt_text {
  width: 440px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--blue, #006DAB);
  border: none;
  cursor: pointer;
  color: #FFF;
  font-family: "Open Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.register_butt_text:hover {
  background-color: white;
  color:#006DAB ;
}

`
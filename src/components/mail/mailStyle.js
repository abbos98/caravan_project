import styled from "styled-components";

export const Mail_wrapper = styled.form`
  border-radius: 10px;
  border: 1px solid rgba(0, 109, 171, 0.10);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
  max-width: 450px;
  width: 100%;
  height: 432px;
  display: flex;
  justify-content: center;
  margin-top: 50px;

.style_text_wrap {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}
.have_you_style {
  color: var(--text-color, #023047);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  padding-left: 20px;
}
.inputs_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
}
.name_user_style {
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
  background-color: rgba(236, 236, 236, 0.8);
  border: none;
}
.your_question_style {
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
  cursor: pointer;
  background-color: rgba(236, 236, 236, 0.8);
  border: none;
  padding-top: 10px;
}
.submit_style {
  margin-top: 10px;
  max-width: 390px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: var(--blue, #006DAB);
  color: #FFF;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; 
  border: none;
  cursor: pointer;
}
.submit_style:hover {
  background-color: rgba(247, 255, 210, 0.8);
  color: black;
}


`
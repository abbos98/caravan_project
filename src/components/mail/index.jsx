import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail_wrapper } from './mailStyle';

export const EmailComponent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wkq66y7', 'template_703qz2l', form.current, {
        publicKey: 'hkaRDx_2p4rN1BrWA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <Mail_wrapper>
    <form ref={form} onSubmit={sendEmail}>
      <div className='style_text_wrap'>
        <p className='have_you_style'>Have you got a question</p>
      </div>
      <div className='inputs_wrapper'>
      <input className='name_user_style' type="text" name="user_name" placeholder='Your name' />
      <input className='name_user_style' type="email" name="user_mail"placeholder='Your email' />
      <textarea className='your_question_style' name="message" />
      <input className='submit_style's type="submit" value="Send" placeholder=' padding-left: 20px;'/>
      </div>
    </form>
    </Mail_wrapper>
  );
};
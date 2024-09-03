import React from 'react';
import { LoginMain, LoginMain_wrapper } from './loginStyle';
import naver_text from '../../assets/vs_naver.svg';
import g_text from '../../assets/g_icon.svg';
import talk_text from '../../assets/talk_img.svg';
import { Link, NavLink } from 'react-router-dom';

const LoginComponent = () => {
  return (
    <LoginMain>
      <div className='login_wrapper'>
        <div className='sign_ing_text'><p>Sign in</p></div>

        <div className='email_wrapper'>
           <p className='email_text'>Email</p>
           <input className='yourEmail_text' placeholder='Your_email'></input>
        </div>

        <div className='password_wrapper'>
           <p className='Password_text'>Password</p>
           <input className='yourPassword_text' placeholder='Your password'></input>
        </div>

        <div className='keepMe_and_forgetP_wrapper'>

           <div className='keepMe_wrapper'> 
              <input className='checkbox_input' type="checkbox" />
              <p className='keepMe_text'>Keep me logged in</p>
           </div>
            
            <div className='forget_pass_wrapper'>
                <p className='forget_text'>Forget your password ?</p>
            </div>

        </div>

      
      <div className='butts_container'>
        <button className='sign_in_butt'>SIGN IN</button>
      </div>

      <div className='line_or_wrapper'>
        <div className='left_line_or'></div>
           <p className='or_text'>OR</p>
        <div className='right_line_or'></div>

      </div>
       

       <div className='icons_wrapper_in'>
            <div className='naver_icon'><img src={naver_text} alt='naver'/></div>
            <div className='g_icon'><img src={g_text} alt='g_text'/></div>
            <div className='k_talk'><img src={talk_text} alt='naver'/></div>
       </div>

       <Link to={'/register'}><div className='createAccout_but_wrapper'>
      <button className='create_acc_butt'>CREATE ACCOUNT</button>
       </div>
</Link> 
      </div>
    </LoginMain>
  )
}

export default LoginComponent;
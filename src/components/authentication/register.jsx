import React from 'react';
import { RegisterMain } from './registerStyle';
import cancel from '../../assets/x_img.svg';
import { Nlink } from '../../styles/navbar_style';
import { Link, NavLink } from 'react-router-dom';


const RegisterComponent = () => {
  return (
    <RegisterMain>
      <div className='registerMain_container'>

          <div className='regist_x_wrapper'>
              <p className='registrate_text'>Registrate</p>
              <img className='cancel_icon' src={cancel} alt='cancel_icon'/>
          </div>

          <div className='email_wrapper'>
           <p className='email_text'>Email</p>
           <input className='yourEmail_text' placeholder='Your_email'></input>
        </div>

        <div className='password_wrapper'>
           <p className='Password_text'>Password</p>
           <input className='yourPassword_text' placeholder='Your password'></input>
        </div>

        <div className='password_wrapper_two'>
           <p className='Password_text_two'>Repeat your password</p>
           <input className='yourPassword_text_two' placeholder='Your password'></input>
        </div>
        
        <div className='checkbox_keep'>
           <input className='checkbox_hob' type='checkbox'></input>
           <p className='keep_text_me'>Keep me logged in</p>
        </div>

    <Link to={'/createaccount'}><div className='register_button_wrapper'>
           <button className='register_butt_text'>REGISTRATE</button>
     </div> </Link>
      </div>
     

    </RegisterMain>
  )
}

export default RegisterComponent;
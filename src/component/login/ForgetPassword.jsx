import React, { useState } from 'react'
import { BsFillEyeSlashFill } from "react-icons/bs";
import Otp from './Otp';
import { _sendOTP } from '@/network/auth';


const Forget = () => {
    const [showOtp, setShowOtp] =  useState(false);
    const [forgetPassword, setForgetPassword] = useState({
      email: "",
      phone: ""
    });
const handleForgetPassSubmit = (e)=>{
  e.preventDefault();
  _sendOTP({email:forgetPassword.email, phone:forgetPassword.phone}).then((res)=>{
        // console.log("forget password", res)
  })
    setShowOtp(true);
}

const handleForgetPass = (e)=>{
  setForgetPassword((prevState)=>{
    return{
      ...prevState,
      [e.target.name]: e.target.value,
    }
  })
  console.log("aise lahra ke wo ru baru a gyi", forgetPassword);
}

  return (
      <>  
      {showOtp?<Otp/> :
        <div className='container--responsive flex flex--justify-content-center flex--align-items-center'>
      <form className="login bg--shadow bg--radius mt--100 flex flex--direction-column flex--justify-content-center flex--align-items-center">
          <input
           type="text"
            name='email'
            placeholder='Enter email' 
            onChange={handleForgetPass}
            />

          <input 
          type="text"
           name='phone'
            placeholder='Mobile no'
            onChange={handleForgetPass}
            />
          <button type='submit' className='bg--radius pd--10 login--btn fs--20 mt--30' onClick={handleForgetPassSubmit}>Submit</button>

      </form>
    </div>
     }
    </>

  )
}

export default Forget
import React, { useState } from 'react'
import { BsFillEyeSlashFill } from "react-icons/bs";
import Otp from './Otp';


const Forget = () => {
    const [showOtp, setShowOtp] =  useState(false);
const handleShow = ()=>{
    setShowOtp(true);
}

  return (
      <>  
      {showOtp?<Otp/> :
        <div className='container--responsive flex flex--justify-content-center flex--align-items-center'>
      <div className="login bg--shadow bg--radius mt--100 flex flex--direction-column flex--justify-content-center flex--align-items-center">
          <input type="text" name='username' placeholder='Enter email ' className=''/>
          <input type="text" name='username' placeholder='Mobile no'className=''/>
          <button className='bg--radius pd--10 login--btn fs--20 mt--30' onClick={handleShow}>Submit</button>

      </div>
    </div>
     }
    </>

  )
}

export default Forget
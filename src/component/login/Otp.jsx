import React, { useState } from 'react'
import NewPassword from './NewPassword';

const Otp = () => {
    const[newPassword, setNewPassword] = useState(false);
    const handleNewPassword=()=>{
        setNewPassword(true);
    }
  return (
    <>
    {newPassword? <NewPassword/> :
    <div className='container--responsive flex flex--justify-content-center flex--align-items-center'>
      <div className="login bg--shadow bg--radius mt--100 flex flex--direction-column flex--justify-content-center flex--align-items-center">
        <span className='fs--18 color--success mb--20'>An OTP is sent to txxt@xxail.com and +91 XXXXXX4821</span>
          <input type="text" name='username' placeholder='Enter email otp ' className=''/>
          <input type="text" name='username' placeholder='Enter Mobile otp 'className=''/>
          <span className='color--grey'>Resend OTP</span>

          <button className='bg--radius pd--10 login--btn fs--20 mt--30' onClick={handleNewPassword}>Submit</button>

      </div>
    </div>
}
    </>
  )
}

export default Otp
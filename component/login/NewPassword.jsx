import React, { useState } from 'react'
import Login from './Login';
import { BsFillEyeSlashFill } from "react-icons/bs";


const NewPassword = () => {
    const[changePassword, setChangePassword] = useState(false);
    const handleChangePassword=()=>{
        setChangePassword(true);
    }
  return (
    <>
    {changePassword ? <Login/> :
<div className='container--responsive flex flex--justify-content-center flex--align-items-center'>
      <div className="login bg--shadow bg--radius mt--100 flex flex--direction-column flex--justify-content-center flex--align-items-center">
          <div className="position--relative width--column-one flex flex--justify-content-center">
          <input type="text" name='username' placeholder='Enter New Password'className=''/>
          <BsFillEyeSlashFill  className='position--absolute eye-icon'/>
          </div>
          <div className="position--relative width--column-one flex flex--justify-content-center">
          <input type="text" name='username' placeholder='Confirm Password'className=''/>
          <BsFillEyeSlashFill  className='position--absolute eye-icon'/>
          </div>
          <button className='bg--radius pd--10 login--btn fs--20 mt--30' onClick={handleChangePassword}>Change Password</button>

      </div>
    </div>  }
    </>

    )
}

export default NewPassword
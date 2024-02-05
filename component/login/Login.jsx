import React, { useContext, useState } from 'react'
import { BsFillEyeSlashFill } from "react-icons/bs";
import { ApplicationCtx } from '../../context/ApplicatonCtx';
import Forget from './Forget';

const Login = () => {
    const [forgetPass, setForgetPass] = useState(false);
  const {isUserLoggedIn, setIsUserLoggedIn} = useContext(ApplicationCtx);

  const handleLogin = () => {
    setIsUserLoggedIn(!isUserLoggedIn);
  }
  const handleForget =()=>{
    setForgetPass(true);
  }

  return (
   <>
      {forgetPass? <Forget/>:

     <div className='container--responsive flex flex--justify-content-center flex--align-items-center'>
     <div className="login bg--shadow bg--radius mt--100 flex flex--direction-column flex--justify-content-center flex--align-items-center">
         <input type="text" name='username' placeholder='Enter email or username' className=''/>
         <div className="position--relative width--column-one flex flex--justify-content-center">
         <input type="text" name='username' placeholder='password'className=''/>
         <BsFillEyeSlashFill  className='position--absolute eye-icon'/>
         </div>
         <span className='color--grey' onClick={handleForget}>Forget Password?</span>
         <button className='bg--radius pd--10 login--btn fs--20 mt--30' onClick={handleLogin}>Login</button>

     </div>
   </div>
}
   </>
  )
}

export default Login
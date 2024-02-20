import React, { useContext, useEffect, useState } from 'react'
import { BsFillEyeSlashFill } from "react-icons/bs";
import { ApplicationCtx } from '../../context/ApplicatonCtx';
import Forget from './Forget';
import { _adminLogin } from '../../network/auth';

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });
    const [forgetPass, setForgetPass] = useState(false);
  const {isUserLoggedIn, setIsUserLoggedIn} = useContext(ApplicationCtx);

  useEffect(() => {
    console.log({login});
  }, [login])

  const handleLogin = (e) => {
    e.preventDefault();
    _adminLogin({ email: login.email, password: login.password })
    .then(({ data, success, message })=>{
      setIsUserLoggedIn(true);
    })
    .catch((error)=>{
      console.log("Login faild", error );
    });
  }

  const handleForget =()=>{
    setForgetPass(true);
  }

  const handleInputChange = (e) => {

    console.log({e});
    setLogin((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
   <>
      {forgetPass? <Forget/>:

     <div className='container--responsive flex flex--justify-content-center flex--align-items-center'>
     <form className="login bg--shadow bg--radius mt--100 flex flex--direction-column flex--justify-content-center flex--align-items-center">
         <input type="text" name='email' placeholder='Enter email' className='' onChange={handleInputChange}/>
         <div className="position--relative width--column-one flex flex--justify-content-center">
         <input type="text" name='password' placeholder='password' className='' onChange={handleInputChange}/>
         <BsFillEyeSlashFill  className='position--absolute eye-icon'/>
         </div>
         <span className='color--grey' onClick={handleForget}>Forget Password?</span>
         <button type='submit' className='bg--radius pd--10 login--btn fs--20 mt--30' onClick={handleLogin}>Login</button>

     </form>
   </div>
}
   </>
  )
}

export default Login
import React, { useContext } from 'react'
import Login from "../component/login/Login"
import { ApplicationCtx } from '../context/ApplicatonCtx';
import Order from './order/Order';

const Home = () => {
  const {isUserLoggedIn, setIsUserLoggedIn} = useContext(ApplicationCtx);

  return (
    <>
    {isUserLoggedIn ? <Order/> :
    <Login/>
  }
    </>
  )
}

export default Home
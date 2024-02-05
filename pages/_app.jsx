import Footer from '../component/footer/Footer';
import Header from '../component/header/Header';
import '../styles/style.scss';
import { ApplicationCtx } from '../context/ApplicatonCtx';
import React, { useState } from 'react';


export default function App({ Component, pageProps }) {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return <>
    <ApplicationCtx.Provider value={{isUserLoggedIn, setIsUserLoggedIn}}>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </ApplicationCtx.Provider>
  </>
}

import { useEffect, useState } from "react";
import Header from "../component/header/Header";
import { ApplicationCtx } from "../context/ApplicatonCtx";
import "../styles/style.scss";

export default function App({ Component, pageProps }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <>
      <ApplicationCtx.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
        <Header />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </ApplicationCtx.Provider>
    </>
  );
}

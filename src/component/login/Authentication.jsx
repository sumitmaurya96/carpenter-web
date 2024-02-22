import { useContext, useState } from "react";
import { ApplicationCtx } from "../../context/ApplicatonCtx";
import { _adminLogin } from "../../network/auth";
import Forget from "./ForgetPassword";
import Login from "./Login";

const INITIAL_LOGIN_FORM_STATE = {
  email: "",
  password: "",
};

const INITIAL_VISIBLE_PAGES_STATE = {
  login: true,
  sendOtp: false,
  verifyOtp: false,
  resetPassword: false,
};

const Authentication = () => {
  const [loginForm, setLoginFrom] = useState(INITIAL_LOGIN_FORM_STATE);

  const visiblePages = useState(INITIAL_VISIBLE_PAGES_STATE);
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(ApplicationCtx);

  const handleLogin = (e) => {
    e.preventDefault();

    _adminLogin({ email: loginForm.email, password: loginForm.password })
      .then(({ data, statusCode, message }) => {
        setIsUserLoggedIn(true);
      })
      .catch(({ statusCode, message, isRetriable }) => {
        console.log("Login faild", error);
      });
  };

  const handleForget = () => {
    setForgetPass(true);
  };

  const handleInputChange = (e) => {
    console.log({ e });
    setLogin((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      {forgetPass ? (
        <Forget />
      ) : (
        <Login
          handleForgetPassword={handleForget}
          handleInputChange={handleInputChange}
          handleLogin={handleLogin}
        />
      )}
    </>
  );
};

export default Login;

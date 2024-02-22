import { useContext } from "react";
import { ApplicationCtx } from "../context/ApplicatonCtx";
import Login from "./login/Authentication";
import Order from "./order/Order";

const Home = () => {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(ApplicationCtx);

  return <>{isUserLoggedIn ? <Order /> : <Login />}</>;
};

export default Home;

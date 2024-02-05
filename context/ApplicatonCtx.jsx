import { createContext } from "react";

export const ApplicationCtx = createContext({
  isUserLoggedIn: null,
  setIsUserLoggedIn: Function
});
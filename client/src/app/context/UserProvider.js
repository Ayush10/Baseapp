import { createContext } from "react";
import { getCookie } from "../utils/cookies";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const user = getCookie("Auth");
  const userId = user?.id;
  return (
    <UserContext.Provider value={{ userId }}>{children}</UserContext.Provider>
  );
};

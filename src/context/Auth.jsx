import { createContext, useEffect, useState } from "react";
import { AppRoutes } from "../constant/constant";
import Cookies from "js-cookie";
import axios from "axios";
export const authContext = createContext();
function Auth({ children }) {
  let [user, setUser] = useState("");

  useEffect(() => {
    let token = Cookies.get("token");
    if (token) {
      userInfo(token);
    }
  }, []);
  let userInfo = (token) => {
    axios
      .get(AppRoutes.user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        setUser(data.data.data);
      });
  };
  return (
    <authContext.Provider value={{ user, setUser }}>
      {children}
    </authContext.Provider>
  );
}

export default Auth;

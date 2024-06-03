import { useEffect, useState } from "react";
import { createContext } from "react";

import { Auth } from "../Api/auth";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [isBusy, setIsBusy] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await Auth.getLogin();
      setAuth(result);
      setIsBusy(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsBusy(false);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, isBusy, setIsBusy }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

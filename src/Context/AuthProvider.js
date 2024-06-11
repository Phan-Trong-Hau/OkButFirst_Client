import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

import { Auth } from "../Api/auth";
import LoadingContext from "./LoadingProvider";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await Auth.getLogin();
        setAuth(result);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setLoading]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

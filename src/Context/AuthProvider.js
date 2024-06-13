import { useEffect, useState } from "react";
import { createContext } from "react";

import { Auth } from "../Api/auth";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await Auth.getLogin();
        setAuth(result);
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, loading, error, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

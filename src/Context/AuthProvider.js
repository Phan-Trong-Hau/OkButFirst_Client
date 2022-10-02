import { useEffect, useState } from "react";
import { createContext } from "react";

import api from "../utils/apiCaller";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [isBusy, setIsBusy] = useState(true);

    useEffect(() => {
        api.get("/auth/login")
            .then((res) => {
                setAuth(res.data);
                setIsBusy(false);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(setIsBusy(true));
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth, isBusy, setIsBusy }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

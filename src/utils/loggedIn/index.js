import api from "../apiCaller";

const checkLoggedIn = (setAuth) => {
    api.get("/auth/login")
        .then((res) => {
            setAuth(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally();
};

export default checkLoggedIn;

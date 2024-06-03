import { Auth } from "../../Api/auth";

const checkLoggedIn = async (setAuth) => {
  try {
    const result = await Auth.getLogin();
    setAuth(result);
  } catch (error) {
    console.log(error);
  }
};

export default checkLoggedIn;

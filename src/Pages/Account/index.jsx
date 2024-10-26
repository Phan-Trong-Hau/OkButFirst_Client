import { useContext, useEffect } from "react";
import AuthContext from "../../Context/AuthProvider";
import CheckLoggedIn from "../../utils/loggedIn";
import "./Account.scss";

const Account = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const handleOnClick = () => {
    CheckLoggedIn(setAuth);
    if (auth) console.log(auth.user.isAdmin);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Account | OKBF";
  }, []);

  return (
    <>
      <div className="account">
        <h1>Account page</h1>
        <button onClick={handleOnClick}>check</button>
      </div>
    </>
  );
};

export default Account;

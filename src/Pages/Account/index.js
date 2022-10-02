import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthProvider";
import CheckLoggedIn from "../../utils/loggedIn";
import "./Account.scss";

const Account = () => {
    const { auth, setAuth } = useContext(AuthContext);

    const handleOnClick = () => {
        CheckLoggedIn(setAuth);
        if(auth)
          console.log(auth.user.role);
    };

    return (
        <>
            <div className="account">
                <h1>Account page</h1>
                <button onClick={handleOnClick}>check</button>
                <Link to='/admin'>admin</Link>
            </div>
        </>
    );
};

export default Account;

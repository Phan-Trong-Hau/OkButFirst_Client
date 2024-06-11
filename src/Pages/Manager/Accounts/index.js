import { useContext, useEffect, useState } from "react";
import Breadcrumb from "../../../Components/Breadcrumb";
import LoadingSpinner from "../../../Components/Loading";
import PopUp from "../../../Components/PopUp";
import { AccountApi } from "../../../Api/account";
import "./Account.scss";
import AuthContext from "../../../Context/AuthProvider";

const UsersManager = () => {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const [fetchAccounts, setFetchAccounts] = useState();
  const [openPopup, setOpenPopup] = useState(false);
  const [account, setAccount] = useState(null);

  const { auth } = useContext(AuthContext);

  const fetchData = async () => {
    try {
      const result = await AccountApi.getAllAccounts();
      setFetchAccounts(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (account) => {
    setOpenPopup(true);
    setAccount(account);
  };

  const handleSetAccounts = async () => {
    try {
      const newAccountData = {
        ...account,
        isAdmin: !account.isAdmin,
      };
      setBusy(true);
      await AccountApi.updateAccount(newAccountData);
      await fetchData();
    } catch (error) {
      setError(true);
    } finally {
      setBusy(false);
    }
    setOpenPopup(false);
  };

  const listProduct = fetchAccounts?.map((account, index) => {
    return (
      <tr key={account._id}>
        <td>{index + 1}</td>
        <td>{account.username}</td>
        <td>{account.email}</td>
        <td>
          <label className="switch">
            <input
              type="checkbox"
              onClick={() => handleClick(account)}
              checked={account.isAdmin}
              disabled={auth.user.username === account.username}
            />
            <span className="slider round"></span>
          </label>
        </td>
      </tr>
    );
  });

  return (
    <>
      <main className="accounts-manager">
        <section>
          <Breadcrumb
            breadcrumb="Accounts"
            list={[{ title: "Admin", path: "/admin" }]}
          />
        </section>
        <section>
          {busy || !fetchAccounts ? (
            <LoadingSpinner />
          ) : (
            <div className="container">
              <div className="users-manager-wrapper">
                <div className="list-user">
                  <h3 className="user-title">Accounts Manager</h3>
                  <div className="user-table">
                    <table>
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>User Name</th>
                          <th>Email</th>
                          <th>Is Admin</th>
                        </tr>
                      </thead>
                      <tbody>{fetchAccounts && listProduct}</tbody>
                    </table>
                  </div>
                </div>

                {error && (
                  <PopUp
                    message={"Error! Please notify the developer :< "}
                    setPopUp={setError}
                  />
                )}
                {openPopup && (
                  <PopUp setPopUp={setOpenPopup}>
                    <div className="desc">
                      Are you sure you want to change the permissions of{" "}
                      <span style={{ color: "red" }}> {account.username}</span>{" "}
                      account ?
                    </div>
                    <button
                      className="theme-btn__black"
                      onClick={() => setOpenPopup(false)}
                    >
                      No
                    </button>
                    &nbsp; &nbsp;
                    <button
                      className="theme-btn__white"
                      onClick={() => handleSetAccounts(account)}
                    >
                      Yes
                    </button>
                  </PopUp>
                )}
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default UsersManager;

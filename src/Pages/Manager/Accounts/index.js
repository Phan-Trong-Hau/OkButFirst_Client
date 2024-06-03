import { useEffect, useState } from "react";
import Breadcrumb from "../../../Components/Breadcrumb";
import LoadingSpinner from "../../../Components/Loading";
import PopUp from "../../../Components/PopUp";
import { AccountApi } from "../../../Api/account";
import "./Account.scss";

const UsersManager = () => {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const [fetchAccounts, setFetchAccounts] = useState();

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

  const handleSetAccounts = async (account) => {
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
              defaultChecked={account.isAdmin}
              onClick={() => handleSetAccounts(account)}
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
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default UsersManager;

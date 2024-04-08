import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Breadcrumb from "../../../Components/Breadcrumb";
import LoadingSpinner from "../../../Components/Loading";
import PopUp from "../../../Components/PopUp";

import "./Account.scss";

const UsersManager = () => {
  const selector = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const [fetchProducts, setFetchProducts] = useState();

  useEffect(() => {
    setFetchProducts(selector);
  }, [selector]);

  const listProduct = fetchProducts?.map((product, index) => {
    return (
      <tr key={product._id}>
        <td>{index + 1}</td>
        <td>{product.name}</td>
        <td>{product.price.toFixed(2)}</td>
        <td>
          <div className="table-desc">{product.description}</div>
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
          {busy || !fetchProducts ? (
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
                          <th>Rule</th>
                        </tr>
                      </thead>
                      <tbody>{fetchProducts && listProduct}</tbody>
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

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb";
import "./Collection.scss";
import { ProductApi } from "../../Api/product";
import { MerchApi } from "../../Api/merch";

const Collection = () => {
  const [countProducts, setCountProducts] = useState();
  const [countMerch, setCountMerch] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [products, merchs] = await Promise.all([
          ProductApi.getAllProducts(),
          MerchApi.getAllMerch(),
        ]);

        setCountProducts(products.length);
        setCountMerch(merchs.length);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Collections | OKBF";
  }, []);

  return (
    <>
      <main className="collection">
        <section>
          <Breadcrumb breadcrumb="Collections" />
        </section>
        <section>
          <div className="container">
            <div className="collection-wrapper">
              <div className="collection-title">
                <h2>Collections</h2>
              </div>
              <div className="collection-content">
                <div className="collection-list">
                  <div className="collection-item">
                    <h3 className="item-title">Coffee shop</h3>
                    <div className="item-products">
                      {countProducts} products
                    </div>

                    <Link
                      to="/collections/coffee-shop"
                      className="theme-btn__white"
                    >
                      Shop Now
                    </Link>
                  </div>
                  <div className="collection-item">
                    <h3 className="item-title">Merch shop</h3>
                    <div className="item-products">{countMerch} products</div>
                    <Link
                      to="/collections/merch-shop"
                      className="theme-btn__black"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Collection;

import { useEffect } from "react";
import { useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb";
import CollectionTemplate from "../../Components/CollectionTemplate";
import "./CoffeeShop.scss";
import { ProductApi } from "../../Api/product";

const CoffeeShop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await ProductApi.getAllProducts();
        setProducts(result);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <main className="coffee-shop">
        <section>
          <Breadcrumb breadcrumb="Buy Premium Coffee Beans & Best Coffee Products Online | OKBF" />
        </section>
        <section>
          <div className="container">
            <div className="coffee-shop-wrapper">
              <CollectionTemplate data={products} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CoffeeShop;

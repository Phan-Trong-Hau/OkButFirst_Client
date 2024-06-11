import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { MerchApi } from "../Api/merch";
import { ProductApi } from "../Api/product";
import LoadingContext from "./LoadingProvider";

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [merch, setMerch] = useState(null);
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [merchList, products] = await Promise.all([
          MerchApi.getAllMerch(),
          ProductApi.getAllProducts(),
        ]);
        setProducts(products);
        setMerch(merchList);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setLoading]);

  return (
    <ProductContext.Provider value={{ merch, products, setProducts, setMerch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;

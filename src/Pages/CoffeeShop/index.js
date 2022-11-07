import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Breadcrumb from "../../Components/Breadcrumb";
import CollectionTemplate from "../../Components/CollectionTemplate";
import "./CoffeeShop.scss";

const CoffeeShop = () => {
    const selector = useSelector((state) => state.products);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(selector);
    }, [selector]);

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

import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Breadcrumb from "../../Components/Breadcrumb";
import CollectionTemplate from "../../Components/CollectionTemplate";
import "./MerchShop.scss";

const MerchShop = () => {
    const selector = useSelector((state) => state.merch);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(selector);
    }, [selector]);

    return (
        <>
            <main className="merch-shop">
                <section>
                    <Breadcrumb
                        breadcrumb="Coffee Company For Cool Merch Products Online | OKBF"
                    />
                </section>

                <section>
                    <div className="container">
                        <div className="merch-shop-wrapper">
                            <div className="sidebar"></div>
                            <CollectionTemplate data={products} defineSort={"best-selling"}/>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default MerchShop;

import { Link } from "react-router-dom";

import "./Breadcrumb.scss";
import arrowDown from "../../Assets/svg/arrowDown.svg";

const Breadcrumb = (props) => {
    const list = props.list?.map((item,index) => {
        return (
            <li className="breadcrumb__item" key={index}>
                <Link to={item.path}>{item.title}</Link>
                <img src={arrowDown} alt="arrow-down" />
            </li>
        );
    })

    return (
        <>
            <div className="breadcrumb-wrapper">
                <div className="container">
                    <ul className="breadcrumb">
                        <li className="breadcrumb__item">
                            <Link to="/">Home</Link>
                            <img src={arrowDown} alt="arrow-down" />
                        </li>
                        {list}
                        <li className="breadcrumb__item">
                            <span>{props.breadcrumb}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Breadcrumb;

import './ShowImage.scss'
import iconClose from "../../../../Assets/svg/iconClose.svg";


export const ShowImages = ({ data, setData }) => {
    const handleDeleteImg = (e, index) => {
        e.preventDefault();

        setData((prevState) => {
            return prevState.filter((val, i) => i !== index);
        });
    };

    const listImg = data?.map((e, index) => (
        <div className="img-wrapper" key={index}>
            <img src={e} alt="choose" />
            <button
                className="delete-img"
                type="button"
                onClick={(e) => handleDeleteImg(e, index)}
            >
                <img src={iconClose} alt="icon-close" />
            </button>
        </div>
    ));

    return <div className="show-image">{listImg}</div>;
};

export const ShowImage = ({ data, setData }) => {
    const handleDeleteImg = (e) => {
        e.preventDefault();
        setData();
    };

    return (
        <div className="show-image">
            {data && (
                <div className="img-wrapper">
                    <img src={data} alt="chose" />
                    <button
                        className="delete-img"
                        type="button"
                        onClick={handleDeleteImg}
                    >
                        <img src={iconClose} alt="icon-close" />
                    </button>
                </div>
            )}
        </div>
    );
};


import { Image } from "cloudinary-react";

import "./ShowImage.scss";
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
            {e?.length > 40 ? (
                <img src={e} alt="chose" />
            ) : (
                <Image
                    cloudName="ok-but-first-coffee"
                    publicId={e}
                    crop="scale"
                ></Image>
            )}
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
                    {data?.length > 40 ? (
                        <img src={data} alt="chose" />
                    ) : (
                        <Image
                            cloudName="ok-but-first-coffee"
                            publicId={data}
                            crop="scale"
                        ></Image>
                    )}

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

import "./PopUp.scss";

const PopUp = ({ setPopUp, message, children }) => {
  const handlePopUp = () => {
    setPopUp(false);
  };
  return (
    <>
      <div className="popup">
        <div className="popup-box">
          <div className="popup-content">
            {!children && (
              <>
                <div className="desc">{message}</div>
                <button className="theme-btn__black" onClick={handlePopUp}>
                  OK
                </button>
              </>
            )}
            {children}
          </div>
        </div>
        <div className="popup-background" onClick={handlePopUp}></div>
      </div>
    </>
  );
};

export default PopUp;

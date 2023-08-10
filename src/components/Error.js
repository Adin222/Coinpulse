import Notfound from "../assets/Notfound.svg";
import "./Error.css";
export const Error = () => {
  return (
    <div className="errorMsg">
      <img
        className="pictureError"
        src={Notfound}
        alt="Page not found (Couldn't load)"
      />
      <div className="errorTxt">
        <h1>Coin Not Found ☹</h1>
      </div>
    </div>
  );
};

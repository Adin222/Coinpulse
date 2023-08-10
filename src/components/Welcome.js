import { useNavigate } from "react-router-dom";
import Picture from "../assets/icon.svg";
import "./Welcome.css";
export const Welcome = () => {
  const navigate = useNavigate();
  const navigateGecko = () => {
    window.open("https://www.coingecko.com/en/api/documentation", "_blank");
  };
  return (
    <div className="section-welcome">
      <div className="section-1">
        <h1 className="heading">Welcome to CoinPulse</h1>
        <h3 className="heading">
          On this webpage, you have the ability to review the prices of all
          cryptocurrencies currently available in the market.
          <br />
          This page is powered by CoinGecko API.
        </h3>

        <button onClick={() => navigate(`/cryptodata`)} className="button">
          Check Market
        </button>
        <button
          onClick={() =>
            navigateGecko(`/https://www.coingecko.com/en/api/documentation`)
          }
          className="buttonGecko"
        >
          CoinGecko Site
        </button>
      </div>

      <div className="section-2">
        <img className="image" src={Picture} alt="ImageCrypto" />
      </div>
    </div>
  );
};

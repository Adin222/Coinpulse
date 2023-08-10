import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SingleCoin } from "./api";
import { useParams } from "react-router-dom";
import { CoinInfo } from "./CoinInfo";
import "./DisplayCoin.css";

export const DisplayCoin = () => {
  const navigationCoin = useNavigate();
  const { id } = useParams();
  const [coin, setCoin] = useState({});

  const cleanText = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const textContent = doc.body.textContent.trim();

    const firstDotIndex = textContent.indexOf(".");
    return firstDotIndex !== -1
      ? textContent.substring(0, firstDotIndex + 1)
      : textContent;
  };

  const fetchCoin = async (id) => {
    try {
      const { data } = await axios.get(SingleCoin(id));
      setCoin(data);
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };

  useEffect(() => {
    fetchCoin(id);
  }, [id]);

  return (
    <section className="displaying">
      <div className="crp-1">
        <img className="crypto-pic" src={coin?.image?.large} alt="CryptoPic" />
        <h2 className="cryptoName">{coin?.name}</h2>
        <p className="cryptoText">{cleanText(coin?.description?.en)}</p>
        <h2 className="cryptoRank">Rank: {coin?.market_cap_rank}</h2>
        <h2 className="cryptoPrice">
          Current Price: ${coin?.market_data?.current_price.usd}
        </h2>
      </div>
      <div className="graph">
        <div> {coin?.id && <CoinInfo id={coin?.id} />} </div>
        <button
          onClick={() => navigationCoin(`/cryptodata`)}
          className="graph-button"
        >
          Back to market
        </button>
      </div>
    </section>
  );
};

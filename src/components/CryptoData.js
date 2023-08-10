import { useFetch } from "./useFetch";
import { useNavigate } from "react-router-dom";
import "./CryptoData.css";
import Error from "../assets/error.svg";

export const CryptoData = () => {
  const navigate1 = useNavigate();
  const { data } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en"
  );

  if (!data) {
    return <img className="error" src={Error} alt="ErrorMessage" />;
  }

  return (
    <>
      <div className="container">
        <table className="tg">
          <thead>
            <tr>
              <th>#</th>
              <th>Cryptocurrency</th>
              <th>Ticker</th>
              <th>Percent Change in 24h</th>
              <th>Market Cap in USD</th>
              <th>Highest in 24h</th>
              <th>Lowest in 24h</th>
            </tr>
          </thead>
          <tbody>
            {data.map((crypto) => (
              <tr key={crypto.id}>
                <td onClick={() => navigate1(`/cryptodata/${crypto.id}`)}>
                  {crypto.market_cap_rank}{" "}
                </td>
                <td onClick={() => navigate1(`/cryptodata/${crypto.id}`)}>
                  {crypto.name}
                </td>
                <td onClick={() => navigate1(`/cryptodata/${crypto.id}`)}>
                  {crypto.symbol}
                </td>
                <td>{crypto.market_cap_change_percentage_24h}</td>
                <td>{crypto.market_cap}</td>
                <td>{crypto.high_24h}</td>
                <td>{crypto.low_24h}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

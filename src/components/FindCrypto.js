import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FindCrypto.css";

export const FindCrypto = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const word = searchTerm.toLowerCase();
      const response = await fetch(
        `//api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en`
      );
      const data = await response.json();

      const matchingCoins = data.filter((coin) => {
        const coinName = coin.name.toLowerCase();
        return coinName.includes(word);
      });

      if (matchingCoins.length > 0) {
        const selectedCoin = matchingCoins[0];
        navigate(`/cryptodata/${selectedCoin.id}`);
      } else {
        navigate(`/cryptodata/Error`);
      }
    } catch (error) {
      console.error("Error while fetching:", error);
    }
  };

  return (
    <section>
      <form onSubmit={handleSearch}>
        <input
          className="searchBar"
          type="text"
          name="task"
          autoComplete="off"
          placeholder="find cryptocurrency"
          maxLength="20"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </section>
  );
};

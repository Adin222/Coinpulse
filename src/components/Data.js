import { Card } from "./Card";
import walletImage from "../assets/wallet.png";
import bitcoinImage from "../assets/bitcoin.png";
import mobileImage from "../assets/mobile.png";
import miningImage from "../assets/mining.png";
export const Data = () => {
  const data = [
    {
      id: 1,
      image: walletImage,
      name: "ONLINE WALLET",
      text: "Crypto wallets store your private keys, keeping your crypto safe and accessible.",
    },
    {
      id: 2,
      image: bitcoinImage,
      name: "SEND COINS",
      text: "Send, receive, and spend cryptocurrencies like Bitcoin and Ethereum.",
    },
    {
      id: 3,
      image: mobileImage,
      name: "MOBILE APP",
      text: "Soon, our first application for Coinpulse is coming.",
    },
    {
      id: 4,
      image: miningImage,
      name: "COIN MINING",
      text: "Crypto miners, this is your storage haven for mined treasures.",
    },
  ];
  return (
    <section className="card-container">
      {data.map((card, index) => (
        <Card
          key={card.id}
          index={index}
          image={card.image}
          name={card.name}
          text={card.text}
        />
      ))}
    </section>
  );
};

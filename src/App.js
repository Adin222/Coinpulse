import { Routes, Route } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { CryptoData } from "./components/CryptoData";
import { Footer } from "./components/Footer";
import { DisplayCoin } from "./components/DisplayCoin";
import { Error } from "./components/Error";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="cryptodata" element={<CryptoData />}></Route>
          <Route path="cryptodata/:id" element={<DisplayCoin />}></Route>
          <Route path="cryptodata/Error" element={<Error />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

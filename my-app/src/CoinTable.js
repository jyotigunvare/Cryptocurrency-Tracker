import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import "./CoinTable.css"
import Coin from "./Coin";
import { coinPassed } from "./CoinSearch";

const CoinTable = () => {
  const [coins, setCoins] = useState([]);
  const passedCoinName = useContext(coinPassed);

  useEffect(() => {
    axios
      .get(
        "https://api.coinstats.app/public/v1/coins"
      )
      .then((response) => {
        console.log(response);
        setCoins(response.data.coins);
       
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);


  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(passedCoinName.toLowerCase())
  );

  return (
    <>
      <table className = "coinTable" >
      <thead>
      <tr>
        <th>Coin</th>
        <th>Name</th>
        <th>Symbol</th>
        <th>Supply</th>
        <th>Price (INR)</th>
        <th>Market Cap Rank</th>
        <th>Price Change(1W)</th>
        <th>Market Cap (INR)</th>
        <th>Volume (INR)</th>
        </tr>
        </thead>
        <tbody>
        {filteredCoins.map((coin) => {
          console.log(coin);
          return <Coin 
          key = {coin.id} 
          name = {coin.name} 
          icon = {coin.icon}
          symbol = {coin.symbol}
          supply={coin.totalSupply}
          price = {coin.price}
          volume = {coin.volume}
          priceChange = {coin.priceChange1w}
          marketCap = {coin.marketCap}
          marketCapRank = {coin.rank}
          />;
        })}
        </tbody>
      </table>
    </>
  );
};

export default CoinTable;
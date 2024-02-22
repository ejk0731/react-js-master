import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [budget, setBudget] = useState("");
  const [dollarForCoin, setDollarForCoin] = useState("");
  const [count, setCount] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
      .then((response) => response.json())
      .then((json) => setCoins(json));
    setIsLoading(false);
  }, []);

  const changeBudgetVal = (e) => {
    setBudget(e.target.value);
  };
  const changeCoinOption = (e) => {
    setDollarForCoin(e.target.value);
  };
  const handleCoinChanger = () => {
    setCount(Math.floor(budget / dollarForCoin))
  };

  return (
    <>
      <h1>The Coins! ({coins.length})</h1>
      {isLoading ? (
        <span>loading...</span>
      ) : (
        <div>
          <input
            type="text"
            value={budget}
            onChange={changeBudgetVal}
            id="money"
            placeholder="Show me what you got!"
          />
          <select id="coinList" onChange={changeCoinOption}>
            {coins.map((coin, i) => {
              return (
                <option key={i} value={coin.quotes.USD.price}>
                  {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
                </option>
              );
            })}
          </select>
          <button type="submit" onClick={handleCoinChanger}>
            How many coins can i buy?
          </button>
          <p> {count} {count > 1 ? "coins" : "coin"} </p>
        </div>
      )}
    </>
  );
}

export default App;

import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myinput, setMyinput] = useState();
  const [price, setPrice] = useState(22192.7);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((myjson) => {
        setCoins(myjson);
        setLoading(false);
      });
  }, []);
  const myChange = (event) => {
    setMyinput(event.target.value);
  };
  const findPrice = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <label htmlFor="dollar">dollar </label>
      <input onChange={myChange} value={myinput} type="number" id="dollar" />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={findPrice}>
            {coins.map((coin) => (
              <option value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <br />
          <label htmlFor="coin">You can get </label>
          <input
            value={myinput / price}
            type="number"
            id="coin"
            disabled={true}
          />
          coins
        </div>
      )}
    </div>
  );
}

export default App;

import '../styles/hero.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiSolidUpArrow,  BiSolidDownArrow } from "react-icons/bi";

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/search/trending'
        );
        const trendingData = response.data.coins;
        const top3TrendingCoins = trendingData.slice(0, 3);
        
        // Fetch additional data for each trending coin
        const coinDataPromises = top3TrendingCoins.map(async (coin) => {
          const coinResponse = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${coin.item.id}`
          );
          return coinResponse.data;
        });

        const coinData = await Promise.all(coinDataPromises);
        setTrendingCoins(coinData);
      } catch (error) {
        console.error('Failed to fetch trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div>
      <h2>Trending Coins (24h)</h2>
      <ul>
        {trendingCoins.map((coin, index) => (
          <li key={index} className='trendinglist'>
<div>
<img src={coin.image.small} alt={coin.name} className='image-logo'/>
            <span className='coinName'>{coin.name}</span>
            <span>({coin.symbol.toUpperCase()})</span>
</div>

            <div>
            {(coin.market_data.price_change_percentage_24h_in_currency.usd)> 0 && (
    <div className='pricesup' >
        <BiSolidUpArrow color='#14B079'/><p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%</p>
</div>
)}

{(coin.market_data.price_change_percentage_24h_in_currency.usd)< 0 && (
    <div className='pricesdown' >
        <BiSolidDownArrow color='#ff0000'/><p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%</p>
</div>
)}
            </div>
          </li>

        ))}
         {!trendingCoins && <p>Loading...</p>}
      </ul>
    </div>
  );
};

export default TrendingCoins;


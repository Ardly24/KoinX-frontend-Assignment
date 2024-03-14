import '../styles/performance.css'
import React, { useState, useEffect } from 'react';
import { Slider, Typography } from 'antd';
import axios from 'axios';

const { Text } = Typography;

const BitcoinPriceRange = () => {
  const [lowestPrice, setLowestPrice] = useState(null);
  const [highestPrice, setHighestPrice] = useState(null);
  const [selectedRange, setSelectedRange] = useState([0, 100]); // Default range

  useEffect(() => {
    const fetchBitcoinPriceRange = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range',
          {
            params: {
              vs_currency: 'usd',
              from: Math.floor(Date.now() / 1000) - 86400, // 24 hours ago
              to: Math.floor(Date.now() / 1000),
            },
          }
        );
        const prices = response.data.prices;
        const todayLowestPrice = Math.min(...prices.map(price => price[1])).toLocaleString(undefined, { minimumFractionDigits: 2 });
        const todayHighestPrice = Math.max(...prices.map(price => price[1])).toLocaleString(undefined, { minimumFractionDigits: 2 });
        setLowestPrice(todayLowestPrice); // Format lowest price
        setHighestPrice(todayHighestPrice); // Format highest price
        setSelectedRange([todayLowestPrice, todayHighestPrice]);
      } catch (error) {
        console.error('Failed to fetch Bitcoin price range:', error);
      }
    };

    fetchBitcoinPriceRange();
  }, []);

  const handleRangeChange = (range) => {
    setSelectedRange(range);
  };

  return (

<>

<div className='slider'>
 <div>
 <p> Today's Low </p>
 <h4>$ {lowestPrice}</h4>
 </div>

      <Slider
        range
        min={parseFloat(lowestPrice)}
        max={parseFloat(highestPrice)}
        defaultValue={lowestPrice}
        onChange={handleRangeChange}
        style={{
            background: 'linear-gradient(to right,orange,red, yellow, green)',// Change gradient colors here
            height: '7px'
          }}
          className='slide'
      />

<div>
<p> Today's High</p>
        <h4>$ {highestPrice}</h4>
</div>
    </div>



    <div className='slider'>
 <div>
 <p>52W Low </p>
 <h4>$ {lowestPrice}</h4>
 </div>

      <Slider
        range
        min={parseFloat(lowestPrice)}
        max={parseFloat(highestPrice)}
        defaultValue={lowestPrice}
        onChange={handleRangeChange}
        style={{
            background: 'linear-gradient(to right,orange,red, yellow, green)',// Change gradient colors here
            height: '7px'
          }}
          className='slide'
      />

<div>
<p> 52W High</p>
        <h4>$ {highestPrice}</h4>
</div>
    </div>


</>



  );
};

export default BitcoinPriceRange;


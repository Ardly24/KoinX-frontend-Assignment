import '../styles/hero.css'
import React, { useState, useEffect } from 'react';
import { BiSolidUpArrow,  BiSolidDownArrow } from "react-icons/bi";
import axios from 'axios';

const BitcoinPrices = () => {
  const [usdPrice, setUsdPrice] = useState(null);
  const [inrPrice, setInrPrice] = useState(null);
  const [usdChange, setUsdChange] = useState(null);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price',
          {
            params: {
              ids: 'bitcoin',
              vs_currencies: 'inr,usd',
              include_24hr_change: true,
            },
          }
        );
        const bitcoinData = response.data.bitcoin;
        setUsdPrice(formatPrice(bitcoinData.usd));
        setInrPrice(formatPrice(bitcoinData.inr));
        setUsdChange(formatPrice(bitcoinData.usd_24h_change));
      } catch (error) {
        console.error('Failed to fetch Bitcoin price:', error);
      }
    };

    fetchBitcoinPrice();
  }, []);

  // Function to format price with commas and '00' for cents
  const formatPrice = (price) => {
    return price.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div>
      {usdPrice && (
    <div className='rates'>
<div>
    <h1>${usdPrice}</h1>
    <h3 className='rupee'> ₹{inrPrice}</h3>
  </div>


<div className='pleft'>


{usdChange > 0 && (
    <div className='pricesup' >
        <BiSolidUpArrow color='#14B079'/><p>{usdChange}%</p>
</div>
)}

{usdChange < 0 && (
    <div className='pricesdown' >
        <BiSolidDownArrow color='#ff0000'/><p>{usdChange}%</p>
</div>
)}

<p className='time'>(24H)</p>
</div>
 </div>
      )}
      {!usdPrice && <p>Loading...</p>}
    </div>
  );
};

export default BitcoinPrices;
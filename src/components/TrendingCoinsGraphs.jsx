import "../styles/coinsGraphs.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card} from "antd";
import Slider from "react-slick";

const TrendingCoinsGraphs = () => {
    const [trendingCoins, setTrendingCoins] = useState([]);
    const [RandTrendingCoins, setRandTrendingCoins] = useState([]);

    useEffect(() => {
        const fetchTrendingCoins = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
                const trendingCoinsData = response.data.coins;
                
                const shuffledCoins = trendingCoinsData.slice(5, 20);
                
                setRandTrendingCoins(shuffledCoins);

                setTrendingCoins(trendingCoinsData);
            } catch (error) {
                console.error('Error fetching trending coins:', error);
            }
        };

        fetchTrendingCoins();
    }, []);


    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "gray", borderRadius: '50%' }}
            onClick={onClick}
          />
        );
      }


      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ],
        nextArrow: <SamplePrevArrow />,
        prevArrow: <SamplePrevArrow />,
      };


    return (
        <div className="coin-card">
          <h2>You may also like</h2>
<Slider {...settings}>
{RandTrendingCoins.map((coin, index) => (
        <div key={index}>
          <Card
          bodyStyle={{padding: "0"}}
            className="trendingCard"
          >
            <div className="coinDetails">
            <img src={coin.item.small} alt={coin.item.name} className='image-logo' />
             <span>{coin.item.symbol.toUpperCase()}</span>

             <div>
            {(coin.item.data.price_change_percentage_24h.usd)> 0 && (
    <div className='pricesup' >
        <p> + {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%</p>
</div>
)}

{(coin.item.data.price_change_percentage_24h.usd)< 0 && (
    <div className='pricesdown' >
       <p> {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%</p>
</div>
)}
            </div>
            </div>
            <h3>{coin.item.data.price}</h3>

            <img src={coin.item.data.sparkline} alt="Price Graph" className="priceGraph"/>
          </Card>
        </div>

))}
      </Slider>

<h2 className="trend">Trending Coins</h2>
<Slider {...settings}>
{trendingCoins.map((coin, index) => (
        <div key={index} className="coin-card">
          <Card
          bodyStyle={{padding: "0"}}
            className="trendingCard"
          >
            <div className="coinDetails">
            <img src={coin.item.small} alt={coin.item.name} className='image-logo' />
             <span>{coin.item.symbol.toUpperCase()}</span>

             <div>
            {(coin.item.data.price_change_percentage_24h.usd)> 0 && (
    <div className='pricesup' >
        <p> + {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%</p>
</div>
)}

{(coin.item.data.price_change_percentage_24h.usd)< 0 && (
    <div className='pricesdown' >
       <p>{coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%</p>
</div>
)}
            </div>
            </div>
            <h3>{coin.item.data.price}</h3>

            <img src={coin.item.data.sparkline} alt="Price Graph" className="priceGraph"/>
          </Card>
        </div>

))}
      </Slider>
            </div>

    );

}

export default TrendingCoinsGraphs




    








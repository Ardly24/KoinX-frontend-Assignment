import '../styles/hero.css'
import bitcoin from '../assets/Bitcoin.png'; 
import getStarted from '../assets/gtStarted.png'; 
import { MdOutlineKeyboardDoubleArrowRight, MdCurrencyRupee } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import TradingViewWidget from './TradingViewWidget';
import BitcoinPrices from './BitcoinPrices';
import TrendingCoins from './TrendingCoins';
import Performance from './Performance';
import Sentiment from './Sentiment';
import AboutBitcoin from './AboutBitcoin';
import Tokenomics from './Tokenomics';
import Team from './Team';
import TrendingCoinsGraphs from './TrendingCoinsGraphs';



const Hero = () => {
  return (
    <div className="hero">
      <p className='crypto'>CryptoCurrencies <MdOutlineKeyboardDoubleArrowRight className='icon'/> <p className='text'>Bitcoin</p></p>
<div className='container'>
<div className='left'>
<div className='aboutbitcoin'>
<div className='heading'>
  <img src={bitcoin} alt="Logo" style={{ width: '40px', height: '40px' }}/>
      <h1 className='bitcoin'>Bitcoin</h1>
      <h3 className='btc'>BTC</h3>
           <p className='tag'>Rank #1</p>
  </div>
  <div>
<BitcoinPrices/>
  </div>

<div className='chart'>
  <h3>Bitcoin price Chart(USD)</h3>
<TradingViewWidget />
</div>
</div>

{/* Performance */}

<Performance/>


<Sentiment/>

<AboutBitcoin />

<Tokenomics/>

<Team/>

{/* <TrendingCoinsGraphs/> */}

</div>


<div className='right'>
<div className='getStarted'>
<h2>Get Started with KoinX for FREE</h2>
        <p>With or range of features that you can equip for free, KoinX allows you to be more educated and aware of your text reports</p>

        <img className='image1' src={getStarted} alt="Logo"/>

       <div className='button'>
       <Link to="/" className="btn btn-light"> Get Started for FREE <GoArrowRight /></Link>
       </div>
</div>

<div className='trendingCoins'>
 <TrendingCoins/>
</div>
      </div>
</div>
</div>
  )
}

export default Hero
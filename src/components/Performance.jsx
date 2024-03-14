import '../styles/performance.css'
import React from 'react'
import  {Tabs} from 'antd';
import { BsFillInfoCircleFill } from "react-icons/bs";
import BitcoinPriceRange from './BitcoinPriceRange';
import Fundamentals from './Fundamentals';
import Sentiment from './Sentiment';
import Tokenomics from './Tokenomics';
import Team from './Team';

const Performance = () => {
    const onChange = (key) => {
        console.log(key);
      };
      const items = [
        {
          key: '1',
          label: 'OverView',
          children: (
            <div className='performance'>
             <h2>Performance</h2>
             <BitcoinPriceRange/>

             <div className='fundamentals'>
              <h3 className='head'>Fundamentals <BsFillInfoCircleFill  color='gray'/></h3>
               <Fundamentals/>
             </div>
            </div>
          )
        },
        {
          key: '2',
          label: 'Fundamentals',
          children: <div className='fundamentals'>
          <h3 className='head'>Fundamentals <BsFillInfoCircleFill  color='gray'/></h3>
           <Fundamentals/>
         </div>
        },
        {
          key: '3',
          label: 'New Insights',
          children: 'New Insights',
        },
        {
            key: '4',
            label: 'Sentiments',
            children: <div>
              <Sentiment/>
            </div>
          },

          {
            key: '5',
            label: 'Team',
            children: <div>
              <Team/>
            </div>
          },

          {
            key: '6',
            label: 'Techinicals',
            children: 'Techinicals',
          },
          {
            key: '7',
            label: 'Tokenomics',
            children:<div>
              <Tokenomics/>
            </div>
          },
      ];

  return (
    <div className='tabsContainer'>

  <Tabs defaultActiveKey="1" items={items} onChange={onChange} size='large'/>
        
    </div>
  )
}

export default Performance
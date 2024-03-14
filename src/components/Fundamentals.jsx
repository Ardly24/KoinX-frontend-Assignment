import React from 'react'
import '../styles/performance.css'
import  {Table} from 'antd';

const Fundamentals = () => {

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a className='nameB'>{text}</a>,
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        }
      ]

const columns1 =[
        {
          title: 'Name1',
          dataIndex: 'name1',
          key: 'name1',
          render: (text) => <a className='nameB'>{text}</a>,
        },

        {
          title: 'Price1',
          dataIndex: 'price1',
          key: 'price1',
        },
      ];

      const data = [
        {
          key: '1',
          name: 'Bitcoin Price',
          price: '$16,345.23'
        },
        {
            key: '2',
            name: '24h Low/24h High',
            price: '$16,345.23/$18,125.00'
          },

          {
            key: '3',
            name: '7d Low/7High',
            price: '$14,345.23/$19,185.92'
          },

          {
            key: '4',
            name: 'Trading Volume',
            price: '$14,345.23'
          },

          {
            key: '4',
            name: 'Market Cap Rank',
            price: '#1'
          },
      ];


      const data1 = [
        {
          key: '1',
          name1: 'Market Cap',
          price1: '$32,345,233.20',
        },
        {
            key: '2',
            name1: 'Market Cap dominace',
            price1:'23.421%',
          },

          {
            key: '3',
            name1: 'Volume/Market Cap',
            price1: '0.0176',
          },

          {
            key: '4',
            name1: 'All-time High',
            price1: '$19,185.92',
          },

          {
            key: '4',
            name1: 'All-time Low',
            price1: '$10,185.92',
          },
      ]
    
  return (
<div className='tables'>
<Table columns={columns} dataSource={data} showHeader={false} pagination={false} className='table1'/>
    <Table columns={columns1} dataSource={data1} showHeader={false} pagination={false} className='table1'/>
</div>
  )
}

export default Fundamentals
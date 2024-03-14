import React from 'react'
import '../styles/tokenomics.css'
import { PieChart, Pie, Cell,Legend, Tooltip } from 'recharts';

const Chart = () => {

    const data = [
        { name: 'Crowdsale investors: 80%', value: 80 },
        { name: 'Foundation: 20%', value: 20 },
      ];
      const COLORS = ['#0088FE',  '#FFBB28'];

      
  return (
    <div className='chart1'>
    <PieChart width={450} height={250} style={{ padding: 0 }}>
        <Pie
          data={data}
          cx="40%"
          cy= "40%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
      </PieChart>
    </div>
  )
}

export default Chart
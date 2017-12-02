import React, { Component } from 'react';
import Papa from 'papaparse';
import  {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart, Area, Bar, BarChart, ReferenceLine} from 'recharts';
import './Blockchain.css'

import csv from './google_blockchain.csv'
var results = Papa.parse(csv, {
  header: true,
  delimiter: ","
});

console.log(results);

const data = [
      {time: '1', blockchain: 4000, bitcoin: 2400, ethereum: 2400},
      {time: '2', blockchain: 3000, bitcoin: 1398, ethereum: 2210},
      {time: '3', blockchain: 2000, bitcoin: 9800, ethereum: 2290},
      {time: '4', blockchain: 2780, bitcoin: 3908, ethereum: 2000},
      {time: '5', blockchain: 1890, bitcoin: 4800, ethereum: 2181},
      {time: '6', blockchain: 2390, bitcoin: 3800, ethereum: 2500},
      {time: '7', blockchain: 3490, bitcoin: 4300, ethereum: 2100},
      {time: '8', blockchain: 4000, bitcoin: 2400, ethereum: 2400},
      {time: '9', blockchain: 3000, bitcoin: 1398, ethereum: 2210},
      {time: '10', blockchain: 2000, bitcoin: 9800, ethereum: 2290},
      {time: '11', blockchain: 2780, bitcoin: 3908, ethereum: 2000},
      {time: '12', blockchain: 1890, bitcoin: 4800, ethereum: 2181},
      {time: '13', blockchain: 2390, bitcoin: 3800, ethereum: 2500},
      {time: '14', blockchain: 3490, bitcoin: 4300, ethereum: 2100},
];

class Blockchain extends Component {
	render () {
  	return (
      <div>
      <div className="blockheader">
        <h1>Blockchain</h1>
        <p>
          Scraping historical data from Google Trends, sentiment analysis of news
          articles from all major tech news sources, trendcast provides visualization for
          this data and predicts which cryptocurrencies will disrupt the crypto market.
        </p>
      </div>
      <div className="blockchain">
      	<LineChart width={1040} height={500} data={data}
              margin={{top: 20, right: 30, left: 20, bottom: 20}}>
           <XAxis dataKey="time"/>
           <YAxis yAxisId="left" />
           <YAxis yAxisId="right" orientation="right" />
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Line yAxisId="left" type="monotone" dataKey="blockchain" stroke="#8884d8" activeDot={{r: 5}}/>
           <Line yAxisId="right" type="monotone" dataKey="bitcoin" stroke="#82ca9d" />
        </LineChart>
        <ComposedChart width={1040} height={400} data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area type="monotone" dataKey="ethereum" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="bitcoin" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="rating" stroke="#ff7300" />
        </ComposedChart>
        <BarChart width={1000} height={400} data={data}
              margin={{top: 50, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="name"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <ReferenceLine y={0} stroke='#000'/>
         <Bar dataKey="bitcoin" fill="#8884d8" />
         <Bar dataKey="ethereum" fill="#82ca9d" />
        </BarChart>
      </div>
      </div>
    );
  }
}

export default Blockchain

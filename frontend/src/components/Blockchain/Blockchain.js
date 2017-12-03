import React, { Component } from 'react';
import  {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine} from 'recharts';
import blockchainData from './blockchain.json'
import './Blockchain.css'

class Blockchain extends Component {
	render () {
  	return (
      <div>
        <div className="blockheader">
          <h1>Blockchain</h1>
          <p>
            Predicting which cryptocurrencies will disrupt the blockchain market next
          </p>
        </div>
        <div className="blockchain">
        	<LineChart width={1040} height={650} data={blockchainData}
                margin={{top: 20, right: 30, left: 20, bottom: 20}}>
             <XAxis dataKey="Week"/>
             <YAxis yAxisId="blockchain" />
             <ReferenceLine x="2017-12-03" stroke="red" label="today" />
             <CartesianGrid strokeDasharray="3 3"/>
             <Tooltip/>
             <Legend />
             <Line yAxisId="blockchain" type="monotone" dataKey="Blockchain" stroke="#c7db37"/>
             <Line yAxisId="blockchain" type="monotone" dataKey="Bitcoin" stroke="#78d9e7" />
             <Line yAxisId="blockchain" type="monotone" dataKey="Ethereum" stroke="#000046" />
             <Line yAxisId="blockchain" type="monotone" dataKey="Ripple" stroke="#82ca9d" />
             <Line yAxisId="blockchain" type="monotone" dataKey="Litecoin" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    );
  }
}

export default Blockchain

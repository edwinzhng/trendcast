import React, { Component } from 'react';
import  {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart, Area, Bar, BarChart, ReferenceLine} from 'recharts';
import './Blockchain.css'

class Blockchain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {time: '2012-06-07', blockchain: 5},
        {time: '2012-07-07', blockchain: 7},
        {time: '2012-08-07', blockchain: 6},
        {time: '2012-09-07', blockchain: 2},
        {time: '2012-10-07', blockchain: 1},
      ],
    }
  }

	render () {
  	return (
      <div>
        <div className="blockheader">
          <h1>Blockchain</h1>
          <p>
            By scraping historical data from Google Trends, performing sentiment analysis of
            articles from major tech news sources, Trendcast provides data visualization and
            predicts which cryptocurrencies will disrupt the crypto market next.
          </p>
        </div>
        <div className="blockchain">
        	<LineChart width={1040} height={500} data={this.state.data}
                margin={{top: 20, right: 30, left: 20, bottom: 20}}>
             <XAxis dataKey="week"/>
             <YAxis yAxisId="left" />
             <YAxis yAxisId="right" orientation="right" />
             <CartesianGrid strokeDasharray="3 3"/>
             <Tooltip/>
             <Legend />
             <Line yAxisId="left" type="monotone" dataKey="blockchain" stroke="#8884d8" activeDot={{r: 5}}/>
             <Line yAxisId="right" type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
          <ComposedChart width={1040} height={400} data={this.state.data}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area type="monotone" dataKey="ethereum" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="bitcoin" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="rating" stroke="#ff7300" />
          </ComposedChart>
          <BarChart width={1000} height={400} data={this.state.data}
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

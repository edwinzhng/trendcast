import React, { Component } from 'react';
import  {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart, Area, Bar} from 'recharts';
import './AI.css';
import aiData from './ai.json'

class AI extends Component {
	render () {
  	return (
      <div>
      <div className="aiheader">
        <h1>Artificial Intelligence</h1>
        <p>
          Insert artifical intelligence text here
        </p>
      </div>
      <div className="ai">
      	<LineChart width={1040} height={500} data={aiData}
              margin={{top: 20, right: 30, left: 20, bottom: 20}}>
           <XAxis dataKey="week"/>
           <YAxis yAxisId="left" />
           <YAxis yAxisId="right" orientation="right" />
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Line yAxisId="left" type="monotone" dataKey="Artificial Intelligence" stroke="#8884d8" activeDot={{r: 5}}/>
           <Line yAxisId="right" type="monotone" dataKey="Machine Learning" stroke="#82ca9d" />
        </LineChart>
        <ComposedChart width={1040} height={400} data={aiData}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area type="monotone" dataKey="Artificial Intelligence" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="Machine Learning" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="Deep Learning" stroke="#ff7300" />
        </ComposedChart>
      </div>
      </div>
    );
  }
}

export default AI

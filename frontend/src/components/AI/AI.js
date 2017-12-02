import React, { Component } from 'react';
import  {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart, Area, Bar, PieChart, Pie, Sector} from 'recharts';
import './AI.css'

const data = [
      {time: '1', ai: 4000, machinelearning: 2400, deeplearning: 2400},
      {time: '2', ai: 3000, machinelearning: 1398, deeplearning: 2210},
      {time: '3', ai: 2000, machinelearning: 9800, deeplearning: 2290},
      {time: '4', ai: 2780, machinelearning: 3908, deeplearning: 2000},
      {time: '5', ai: 1890, machinelearning: 4800, deeplearning: 2181},
      {time: '6', ai: 2390, machinelearning: 3800, deeplearning: 2500},
      {time: '7', ai: 3490, machinelearning: 4300, deeplearning: 2100},
      {time: '8', ai: 4000, machinelearning: 2400, deeplearning: 2400},
      {time: '9', ai: 3000, machinelearning: 1398, deeplearning: 2210},
      {time: '10', ai: 2000, machinelearning: 9800, deeplearning: 2290},
      {time: '11', ai: 2780, machinelearning: 3908, deeplearning: 2000},
      {time: '12', ai: 1890, machinelearning: 4800, deeplearning: 2181},
      {time: '13', ai: 2390, machinelearning: 3800, deeplearning: 2500},
      {time: '14', ai: 3490, machinelearning: 4300, deeplearning: 2100},
];

class AI extends Component {
	render () {
  	return (
      <div className="ai">
      	<LineChart width={1040} height={500} data={data}
              margin={{top: 20, right: 30, left: 20, bottom: 20}}>
           <XAxis dataKey="time"/>
           <YAxis yAxisId="left" />
           <YAxis yAxisId="right" orientation="right" />
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Line yAxisId="left" type="monotone" dataKey="ai" stroke="#8884d8" activeDot={{r: 5}}/>
           <Line yAxisId="right" type="monotone" dataKey="ml" stroke="#82ca9d" />
        </LineChart>
        <ComposedChart width={1040} height={400} data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area type="monotone" dataKey="ai" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="machinelearning" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="deeplearning" stroke="#ff7300" />
        </ComposedChart>
      </div>
    );
  }
}

export default AI

import React, { Component } from 'react';
import  {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart, Area, Bar} from 'recharts';
import './AI.css'

const data = [
      {time: '1', 'Artificial Intelligence': 4000, 'Machine Learning': 2400, 'Deep Learning': 2400},
      {time: '2', 'Artificial Intelligence': 3000, 'Machine Learning': 1398, 'Deep Learning': 2210},
      {time: '3', 'Artificial Intelligence': 2000, 'Machine Learning': 9800, 'Deep Learning': 2290},
      {time: '4', 'Artificial Intelligence': 2780, 'Machine Learning': 3908, 'Deep Learning': 2000},
      {time: '5', 'Artificial Intelligence': 1890, 'Machine Learning': 4800, 'Deep Learning': 2181},
      {time: '6', 'Artificial Intelligence': 2390, 'Machine Learning': 3800, 'Deep Learning': 2500},
      {time: '7', 'Artificial Intelligence': 3490, 'Machine Learning': 4300, 'Deep Learning': 2100},
      {time: '8', 'Artificial Intelligence': 4000, 'Machine Learning': 2400, 'Deep Learning': 2400},
      {time: '9', 'Artificial Intelligence': 3000, 'Machine Learning': 1398, 'Deep Learning': 2210},
      {time: '10', 'Artificial Intelligence': 2000, 'Machine Learning': 9800, 'Deep Learning': 2290},
      {time: '11', 'Artificial Intelligence': 2780, 'Machine Learning': 3908, 'Deep Learning': 2000},
      {time: '12', 'Artificial Intelligence': 1890, 'Machine Learning': 4800, 'Deep Learning': 2181},
      {time: '13', 'Artificial Intelligence': 2390, 'Machine Learning': 3800, 'Deep Learning': 2500},
      {time: '14', 'Artificial Intelligence': 3490, 'Machine Learning': 4300, 'Deep Learning': 2100},
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
           <Line yAxisId="left" type="monotone" dataKey="Artificial Intelligence" stroke="#8884d8" activeDot={{r: 5}}/>
           <Line yAxisId="right" type="monotone" dataKey="Machine Learning" stroke="#82ca9d" />
        </LineChart>
        <ComposedChart width={1040} height={400} data={data}>
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
    );
  }
}

export default AI

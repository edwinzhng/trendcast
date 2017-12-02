import React, { Component } from 'react';
import  {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart, Area, Bar} from 'recharts';
import './Blockchain.css'

const data = [
      {name: 'A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'G', uv: 3490, pv: 4300, amt: 2100},
];

class Blockchain extends Component {
	render () {
  	return ( 
      <div className="blockchain">
      	<LineChart width={600} height={300} data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="name"/>
           <YAxis yAxisId="left" />
           <YAxis yAxisId="right" orientation="right" />
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
           <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        <ComposedChart width={730} height={250} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </div>
    );
  }
}

export default Blockchain

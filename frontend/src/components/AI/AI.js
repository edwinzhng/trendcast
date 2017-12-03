import React, { Component } from 'react';
import  {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import './AI.css';
import aiData from './ai_trends.json'

class AI extends Component {
	render () {
  	return (
      <div>
      <div className="aiheader">
        <h1>Artificial Intelligence</h1>
        <p>
          Predicting the next biggest trends in AI and ML technology
        </p>
      </div>
      <div className="ai">
      	<LineChart width={1040} height={650} data={aiData}
              margin={{top: 20, right: 30, left: 20, bottom: 20}}>
           <XAxis dataKey="Week"/>
           <YAxis yAxisId="left" />
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Line yAxisId="left" type="monotone" dataKey="Artificial Intelligence" stroke="#8884d8"/>
           <Line yAxisId="left" type="monotone" dataKey="Machine Learning" stroke="#82ca9d" />
					 <Line yAxisId="left" type="monotone" dataKey="Deep Learning" stroke="#78d9e7"/>
					 <Line yAxisId="left" type="monotone" dataKey="Natural Language Processing" stroke="#e778d9"/>
					 <Line yAxisId="left" type="monotone" dataKey="Computer Vision" stroke="#000046"/>
					 <Line yAxisId="left" type="monotone" dataKey="Biometrics" stroke="#a8e063"/>
        </LineChart>
      </div>
      </div>
    );
  }
}

export default AI

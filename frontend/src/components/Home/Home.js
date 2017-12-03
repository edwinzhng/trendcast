import React, { Component } from 'react';
import  {LineChart, Line, XAxis, YAxis, PieChart, Pie, CartesianGrid, Tooltip, Legend, ComposedChart, Area, Bar} from 'recharts';
import { Row, Col } from 'reactstrap';
import { Popup, Divider } from 'semantic-ui-react';
import Header from '../Header/Header.js';
import './Home.css';

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
const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
const data02 = [{name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
                  {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
                  {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];

class Home extends Component {
	render () {
  	return (
      <div className="home">
        <Header />
        <div className="algorithm">
        <h1> Our Algorithm </h1>
        <p className="algorithm-text">
          Trendcast scrapes historical data from Google Trends, performs sentiment analysis of
          articles from major tech news sources over the past five years and uses machine learning to predict
          future trends through LSTM networks.
        </p>
        <Row className = "columns">
          <Col xs="6" sm="4">
            <Popup
              className = 'popup'
              trigger = { <div><span>Google Trends</span><i class="fa fa-line-chart" color="teal" aria-hidden="true"></i></div> }
              position = 'bottom center'
              content = 'Predicting relative popularity of technologies using Google Trends data.'
            />
          </Col>
          <Col xs="6" sm="4" className = "middle">
            <Popup
              className = 'popup'
              trigger = { <div><span>Sentiment Analysis</span><i class="fa fa-smile-o" aria-hidden="true"></i></div> }
              position = 'bottom center'
              content = 'Analyzing sentiment of news articles from major tech news sources.'
            />
          </Col>
          <Col xs="6" sm="4">
            <Popup
              className = 'popup'
              trigger = { <div><span>Machine Learning</span><i class="fa fa-cogs" aria-hidden="true"></i></div> }
              position = 'bottom center'
              content = 'Using LSTM networks to generate a multi-step time series prediction.'
            />
          </Col>
        </Row>
        </div>
        <Divider />
        <div className="trending">
           <Row>
          <Col xs="6" className = "aitrending">AI
          <PieChart width={400} height={400} className="piegraph">
          <Pie isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={130} fill="#56ab2f" label/>
          <Tooltip/>
          </PieChart>
          </Col>
          <Col xs="6">Blockchain
          <PieChart width={400} height={400} className="piegraph">
          <Pie isAnimationActive={false} data={data02} cx={200} cy={200} outerRadius={130} fill="#1e90ff" label/>
          <Tooltip/>
          </PieChart>
          </Col>
        </Row>
        </div>
        <div className="home-content">
        	<LineChart width={1040} height={500} data={data}
                margin={{top: 35, right: 30, left: 20, bottom: 10}}>
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
        </div>
      </div>
    );
  }
}

export default Home

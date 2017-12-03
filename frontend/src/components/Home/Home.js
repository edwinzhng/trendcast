import React, { Component } from 'react';
import  {LineChart, Line, XAxis, YAxis, PieChart, Pie, CartesianGrid, Tooltip, Legend} from 'recharts';
import { Row, Col } from 'reactstrap';
import { Popup, Divider } from 'semantic-ui-react';
import Header from '../Header/Header.js';
import './Home.css';
import {Link} from 'react-router-dom'
import data from './homedata.json'

const data01 = [{name: 'Deep learning', value: 400}, {name: 'Machine Learning', value: 300},
                  {name: 'Natural Language Processing', value: 300}, {name: 'Computer Vision', value: 200}];
const data02 = [{name: 'Ripple', value: 0.17}, {name: 'Ethereum', value: 0.23},
                  {name: 'Litecoin', value: 0.15}, {name: 'Bitcoin', value: 0.44},
                  {name: 'Bitcoin Cash', value: 0.21}];

console.log(data02[0]["value"]  );
class Home extends Component {
  render () {
    return (

      <div className="home">
        <Header />
        <div className="algorithm">
        <h1> Our Algorithm </h1>
        <p className="algorithm-text">
          Trendcast scrapes historical data from Google Trends, performs sentiment analysis of
          articles from major tech news sources over the past three years and uses machine learning to predict
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
          <Col xs="6" className = "aitrending" >  <Link to="/artificial-intelligence" className="chartlinks">AI</Link>
          <PieChart width={400} height={400} className="piegraph">
          <Pie isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={130} fill="#56ab2f" label/>
          <Tooltip/>
          </PieChart>
          </Col>
          <Col xs="6"><Link to="/blockchain" className="chartlinks2">Blockchain</Link>
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
             <XAxis dataKey="Week"/>
             <YAxis yAxisId="left" />
             <CartesianGrid strokeDasharray="3 3"/>
             <Tooltip/>
             <Legend />
             <Line yAxisId="left" type="monotone" dataKey="Blockchain" stroke="#1e90ff"/>
             <Line yAxisId="left" type="monotone" dataKey="Artificial Intelligence" stroke="#56ab2f" />
          </LineChart>
        </div>
      </div>
    );
  }
}

export default Home

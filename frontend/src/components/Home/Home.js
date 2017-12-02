import React, { Component } from 'react';
import  {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart, Area, Bar} from 'recharts';
import { Container, Row, Col } from 'reactstrap';
import Header from '../Header/Header.js'
import './Home.css'

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

class Home extends Component {
	render () {
  	return (
      <div className="home">
        <Header />
        <div className="algorithm">
        <h1> Our Algorithm </h1>
        <Container>
        <Row className = "columns">
          <Col xs="6" sm="4">Google Trends</Col>
          <Col xs="6" sm="4" className = "middle">Sentiment Analysis</Col>

          <Col sm="4">Machine Learning</Col>
        </Row>
        </Container>
        </div>
        
        <div className="home-content">
        	<LineChart width={1040} height={500} data={data}
                margin={{top: 5, right: 30, left: 20, bottom: 10}}>
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

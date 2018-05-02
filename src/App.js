import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './custom.css';
import Home from './components/home';
import About from './components/about';
import Footer from './components/footer';
import Header from './components/header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
const App = () => (
	<Router>
		<div>
			<Header />
			<hr />
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Footer />
		</div>
	</Router>
);


export default App;
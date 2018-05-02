import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';



const Header = () => (
	<div className="top-nav">
		<div className="intop-nav">
			<div className="row">
				<div className="intop-nav-left">
					<p>SINCE 1995</p>
				</div>
				<div className="intop-nav-right">
					<i className="material-icons" id="header-icon-call">call</i>&nbsp;
					<a href="tel:2813622714"><p>281 362 2714</p></a>
				</div>
			</div>
		</div>
		<div className="main-nav">
			<div className="main-nav-row row">
				<div className="col-md-6 col-sm-6 top-nav-left-ul">
					<ul className="nav-link-ul">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/about">Service</Link>
						</li>
						<li>
							<Link to="/">Projects</Link>
						</li>
					</ul>
				</div>
				<div className="col-md-6 col-sm-6 top-nav-right-ul">
					<ul className="nav-link-ul">
						<li>
							<Link to="/">Careers</Link>
						</li>
						<li>
							<Link to="/about">Contacts</Link>
						</li>
						<li>
							<Link to="/about">Resource Center</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<a href="#" className="intop-nav-center">
			<img className="top-nav-center-img" src="images/logo.text.png" alt="company_logo"/>
		</a>
	</div>


);


		// <Navbar inverse fixedTop>
		// <Headertop />
		// 	<Grid>
		// 		<Navbar.Header>
		// 			<Navbar.Brand>
		// 				<Link to="/">Home</Link> |
		// 				<Link to="/about">About</Link>

		// 			</Navbar.Brand>
		// 			<Navbar.Toggle />
		// 		</Navbar.Header>
		// 	</Grid>
		// </Navbar>

export default Header;


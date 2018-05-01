import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
const Header = () => (
	<Navbar inverse fixedTop>
		<Grid>
			<Navbar.Header>
				<Navbar.Brand>
					<Link to="/">Home</Link> |
				<Link to="/about">About</Link>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
		</Grid>
	</Navbar>
);

export default Header;


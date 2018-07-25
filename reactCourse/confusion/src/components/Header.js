import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, NavItem, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
	state = { isOpen: false };
	toggleNav = () => {
		this.setState(prev => {
			return { isOpen: !prev.isOpen };
		});
	};
	render() {
		return (
			<React.Fragment>
				<Navbar dark expand="md">
					<div className="container">
						<NavbarToggler onClick={this.toggleNav} />
						<NavbarBrand className="mr-auto" href="/">
							<img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
						</NavbarBrand>
						<Collapse navbar isOpen={this.state.isOpen}>
							<Nav navbar>
								<NavItem>
									<NavLink className="nav-link" to="/home">
										<span className="fa fa-home fa-lg" />Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/aboutus">
										<span className="fa fa-info fa-lg" />About Us
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/menu">
										<span className="fa fa-list fa-lg" />Menu
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/contactus">
										<span className="fa fa-address-card fa-lg" />Contact Us
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
				<Jumbotron>
					<div className="container">
						<div className="row row-header">
							<div className="col-12 col-sm-6">
								<h1>Ristorante con Fusion</h1>
								<p>
									We take inspiration from the World's best cuisines, and create a unique fusion
									experience. Our lipsmacking creations will tickle your culinary senses!
								</p>
							</div>
						</div>
					</div>
				</Jumbotron>
			</React.Fragment>
		);
	}
}

export default Header;

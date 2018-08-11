import React, { Component } from 'react';
import {
	Navbar,
	NavbarBrand,
	Jumbotron,
	Nav,
	NavbarToggler,
	NavItem,
	Collapse,
	Modal,
	ModalBody,
	ModalHeader,
	Button,
	Form,
	FormGroup,
	Label,
	Input
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
	state = { isOpen: false, isModalOpen: false };
	toggleNav = () => {
		this.setState(prev => {
			return {
				isOpen: !prev.isOpen
			};
		});
	};
	toggleModal = () => {
		this.setState(prev => {
			return {
				isModalOpen: !prev.isModalOpen
			};
		});
	};
	handleLogin = event => {
		this.toggleModal();
		alert(
			'Username: ' +
				this.username.value +
				' Password: ' +
				this.password.value +
				' Remember: ' +
				this.remember.checked
		);

		event.preventDefault();
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
							<Nav className="ml-auto">
								<NavItem>
									<Button outline onClick={this.toggleModal}>
										<span className="fa fa-sign-in fa-lg" /> Login
									</Button>
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
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleLogin}>
							<FormGroup>
								<Label htmlFor="username">Username</Label>
								<Input
									type="text"
									id="username"
									name="username"
									innerRef={input => (this.username = input)}
								/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="password">Password</Label>
								<Input
									type="password"
									id="password"
									name="password"
									innerRef={input => (this.password = input)}
								/>
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input
										type="checkbox"
										name="remember"
										innerRef={input => (this.remember = input)}
									/>{' '}
									Remember Me
								</Label>
							</FormGroup>
							<Button type="submit" value="submit" className="bg-primary">
								Login
							</Button>
						</Form>
					</ModalBody>
				</Modal>
			</React.Fragment>
		);
	}
}

export default Header;

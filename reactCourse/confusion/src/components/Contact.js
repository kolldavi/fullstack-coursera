import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
class Contact extends React.Component {
	state = {
		firstName: '',
		lastName: '',
		telNum: '',
		email: '',
		agree: false,
		contactType: 'Tel.',
		message: ''
	};
	handleInputChange = event => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({ [name]: value });
	};

	handleSubmit = event => {
		event.preventDefault();
		console.log('state' + JSON.stringify(this.state));
	};
	render() {
		return (
			<div className="container">
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to="/home">Home</Link>
					</BreadcrumbItem>
					<BreadcrumbItem>
						<Link to="/menu">Menu</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>Contact</BreadcrumbItem>
				</Breadcrumb>
				<div className="col-12">
					<h3>Contact Us</h3>
					<hr />
				</div>
				<div className="row row-content">
					<div className="col-12">
						<h3>Location Information</h3>
					</div>
					<div className="col-12 col-sm-4 offset-sm-1">
						<h5>Our Address</h5>
						<address>
							121, Clear Water Bay Road<br />
							Clear Water Bay, Kowloon<br />
							HONG KONG<br />
							<i className="fa fa-phone" />: +852 1234 5678<br />
							<i className="fa fa-fax" />: +852 8765 4321<br />
							<i className="fa fa-envelope" />: <a href="mailto:confusion@food.net">confusion@food.net</a>
						</address>
					</div>
					<div className="col-12 col-sm-6 offset-sm-1">
						<h5>Map of our Location</h5>
					</div>
					<div className="col-12 col-sm-11 offset-sm-1">
						<div className="btn-group" role="group">
							<a role="button" className="btn btn-primary" href="tel:+85212345678">
								<i className="fa fa-phone" /> Call
							</a>
							<a role="button" className="btn btn-info">
								<i className="fa fa-skype" /> Skype
							</a>
							<a role="button" className="btn btn-success" href="mailto:confusion@food.net">
								<i className="fa fa-envelope-o" /> Email
							</a>
						</div>
					</div>
				</div>
				<div className="row row-content">
					<div className="col-12">
						<h3>Send Us Your Feedback</h3>
						<div className="col-12 col-md-9">
							<Form onSubmit={this.handleSubmit}>
								<FormGroup row>
									<Label htmlFor="firstName" md={2}>
										First Name
									</Label>
									<Col md={10}>
										<Input
											type="text"
											id="firstName"
											name="firstName"
											placeholder="First Name"
											value={this.state.firstName}
											onChange={this.handleInputChange}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label htmlFor="lastName" md={2}>
										Last Name
									</Label>
									<Col md={10}>
										<Input
											type="text"
											id="lastName"
											name="lastName"
											placeholder="Last Name"
											value={this.state.lastName}
											onChange={this.handleInputChange}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label htmlFor="telNum" md={2}>
										Tel. Number
									</Label>
									<Col md={10}>
										<Input
											type="tel"
											id="telNum"
											name="telNum"
											placeholder="Contact Telephone Number"
											value={this.state.telNum}
											onChange={this.handleInputChange}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label htmlFor="email" md={2}>
										Email
									</Label>
									<Col md={10}>
										<Input
											type="email"
											id="email"
											name="email"
											placeholder="Email"
											value={this.state.email}
											onChange={this.handleInputChange}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Col md={{ size: 6, offset: 2 }}>
										<FormGroup check>
											<Label check>
												<Input
													type="checkbox"
													name="agree"
													onChange={this.handleInputChange}
													checked={this.state.agree}
												/>
												<strong>May we contact you?</strong>
											</Label>
										</FormGroup>
									</Col>
									<Col md={{ size: 3, offset: 1 }}>
										<Input
											type="select"
											name="contactType"
											value={this.state.contactType}
											onChange={this.handleInputChange}
										>
											<option>Tel.</option>
											<option>Email</option>
										</Input>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label htmlFor="feedback" md={2}>
										Your Feedback
									</Label>
									<Col md={10}>
										<Input
											type="textarea"
											id="message"
											name="message"
											rows="12"
											value={this.state.message}
											onChange={this.handleInputChange}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Col md={{ size: 10, offset: 2 }}>
										<Button type="submit" color="primary">
											Send Feedback
										</Button>
									</Col>
								</FormGroup>
							</Form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;

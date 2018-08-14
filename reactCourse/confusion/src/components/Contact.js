import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

class Contact extends React.Component {
	handleSubmit = values => {
		console.log('state' + JSON.stringify(values));
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
							<LocalForm onSubmit={values => this.handleSubmit(values)}>
								<Row className="form-group">
									<Label htmlFor="firstName" md={2}>
										First Name
									</Label>
									<Col md={10}>
										<Control.text
											model=".firstName"
											id="firstName"
											name="firstName"
											className="form-control"
											placeholder="First Name"
										/>
									</Col>
								</Row>
								<Row className="form-group">
									<Label htmlFor="lastName" md={2}>
										Last Name
									</Label>
									<Col md={10}>
										<Control.text
											model=".lastName"
											className="form-control"
											id="lastName"
											name="lastName"
											placeholder="Last Name"
										/>
									</Col>
								</Row>
								<Row className="form-group">
									<Label htmlFor="telNum" md={2}>
										Tel. Number
									</Label>
									<Col md={10}>
										<Control.text
											model=".telnum"
											className="form-control"
											id="telNum"
											name="telNum"
											placeholder="Contact Telephone Number"
										/>
									</Col>
								</Row>
								<Row className="form-group">
									<Label htmlFor="email" md={2}>
										Email
									</Label>
									<Col md={10}>
										<Control.text
											model=".email"
											className="form-control"
											id="email"
											name="email"
											placeholder="Email"
										/>
									</Col>
								</Row>
								<Row className="form-group">
									<Col md={{ size: 6, offset: 2 }}>
										<div className="form-check">
											<Label check>
												<Control.checkbox
													model=".agree"
													name="agree"
													className="form-check-input"
												/>
												<strong>May we contact you?</strong>
											</Label>
										</div>
									</Col>
									<Col md={{ size: 3, offset: 1 }}>
										<Control.select
											model=".contractType"
											name="contactType"
											className="form-control"
										>
											<option>Tel.</option>
											<option>Email</option>
										</Control.select>
									</Col>
								</Row>
								<Row className="form-group">
									<Label htmlFor="feedback" md={2}>
										Your Feedback
									</Label>
									<Col md={10}>
										<Control.textarea
											model=".message"
											className="form-control"
											id="message"
											name="message"
											rows="12"
										/>
									</Col>
								</Row>
								<Row className="form-group">
									<Col md={{ size: 10, offset: 2 }}>
										<Button type="submit" color="primary">
											Send Feedback
										</Button>
									</Col>
								</Row>
							</LocalForm>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;

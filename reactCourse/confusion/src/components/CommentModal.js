import React from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = length => val => !val || val.length <= length;
const minLength = length => val => val && val.length >= length;
const isNumber = val => !isNaN(Number(val));
const isValidEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class CommentModal extends React.Component {
	state = {
		isOpen: false
	};
	toggle = () => {
		this.setState(prev => {
			return { isOpen: !prev.isOpen };
		});
	};
	handleSubmit = values => {
		alert(JSON.stringify(values));
		this.toggle();
	};
	render() {
		return (
			<div>
				<Button className="bg-light text-secondary" onClick={this.toggle}>
					<span className="fa fa-pencil fa-lg" /> Submit Comment
				</Button>

				<Modal isOpen={this.state.isOpen} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>Submit Comment</ModalHeader>
					<LocalForm onSubmit={values => this.handleSubmit(values)}>
						<ModalBody>
							<Row className="form-group">
								<Label htmlFor="Rating" md={2}>
									Rating
								</Label>
								<Col md={10}>
									<Control.select
										defaultValue="5"
										model=".rating"
										name="rating"
										className="form-control"
										validators={{ required }}
									>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</Control.select>
									<Errors
										className="text-danger"
										model=".rating"
										show="touched"
										messages={{
											required: 'Required'
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="name" md={2}>
									Name
								</Label>
								<Col md={10}>
									<Control.text
										model=".name"
										id="name"
										name="name"
										className="form-control"
										placeholder="Name"
										validators={{
											required,
											minLength: minLength(3),
											maxLength: maxLength(15)
										}}
									/>
									<Errors
										className="text-danger"
										model=".name"
										show="touched"
										messages={{
											required: 'Required',
											minLength: ' Must be greater than 2 characters',
											maxLength: 'Must be less than 15 characters'
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="comment" md={2}>
									Comment
								</Label>
								<Col md={10}>
									<Control.textarea
										model=".comment"
										className="form-control"
										id="comment"
										name="comment"
										rows="6"
									/>
								</Col>
							</Row>
						</ModalBody>
						<ModalFooter>
							<Button color="primary" type="submit">
								Submit
							</Button>{' '}
							<Button color="secondary" onClick={this.toggle}>
								Cancel
							</Button>
						</ModalFooter>
					</LocalForm>
				</Modal>
			</div>
		);
	}
}

export default CommentModal;

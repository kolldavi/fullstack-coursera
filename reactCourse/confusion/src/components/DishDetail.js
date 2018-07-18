import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
function DishDetail({ dish }) {
	if (dish != null)
		return (
			<div className="row">
				<div className="col-12 col-md-5 m-1">
					<Card>
						<CardImg top src={dish.image} alt={dish.name} />
						<CardBody>
							<CardTitle>{dish.name}</CardTitle>
							<CardText>{dish.description}</CardText>
						</CardBody>
					</Card>
				</div>
				<div className="col-12 col-md-5 m-1">
					<h1>Comments</h1>
					{dish.comments.map(comment => (
						<div key={comment.id}>
							<p>{comment.comment}</p>
							<p>
								--{comment.author}, {comment.date}{' '}
							</p>
						</div>
					))}
				</div>
			</div>
		);
	else return <div />;
}

export default DishDetail;

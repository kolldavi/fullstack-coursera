import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
const RenderCard = ({ dish }) => {
	if (dish != null)
		return (
			<div className="col-12 col-md-5 m-1">
				<Card>
					<CardImg top src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			</div>
		);
};
const RenderComment = ({ dish }) => {
	return dish.comments && dish.comments !== null && dish.comments.length > 0 ? (
		<div className="col-12 col-md-5 m-1">
			<h4>Comments</h4>
			{dish.comments.map(comment => (
				<div key={comment.id}>
					<p>{comment.comment}</p>
					<p>
						--{comment.author},{' '}
						{new Intl.DateTimeFormat('en-us', {
							year: 'numeric',
							month: 'short',
							day: '2-digit'
						}).format(new Date(Date.parse(comment.date)))}
					</p>
				</div>
			))}
		</div>
	) : (
		<div />
	);
};

function DishDetail({ dish }) {
	if (dish != null)
		return (
			<div className="container">
				<div className="row">
					<RenderCard dish={dish} />
					<RenderComment dish={dish} />
				</div>
			</div>
		);
	else return <div />;
}

export default DishDetail;

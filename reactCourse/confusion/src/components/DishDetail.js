import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import CommentModal from './CommentModal';
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
const RenderComment = ({ comments, addComment, dishId }) => {
	return comments && comments !== null && comments.length > 0 ? (
		<div className="col-12 col-md-5 m-1">
			<h4>Comments</h4>
			{comments.map(comment => (
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

			<CommentModal dishId={dishId} addComment={addComment} />
		</div>
	) : (
		<div />
	);
};

function DishDetail({ dish, comments, addComment }) {
	if (dish != null)
		return (
			<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to="/menu">Menu</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>{dish.name}</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>{dish.name}</h3>
						<hr />
					</div>
				</div>
				<div className="row">
					<RenderCard dish={dish} />
					<RenderComment comments={comments} addComment={addComment} dishId={dish.id} />
				</div>
			</div>
		);
	else return <div />;
}

export default DishDetail;

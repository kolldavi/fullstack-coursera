import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './Loading';
function RenderCard({ dish }) {
	return (
		<Card>
			<Link to={`/menu/${dish.id}`}>
				<CardImg width="100%" src={dish.image} alt={dish.name} />
				<CardImgOverlay>
					<CardTitle>{dish.name}</CardTitle>
				</CardImgOverlay>
			</Link>
		</Card>
	);
}
const Menu = ({ dishes }) => {
	if (dishes.isLoading) {
		return (
			<div className="container">
				<div className="row">
					<Loading />
				</div>
			</div>
		);
	} else if (dishes.errMsg) {
		return (
			<div className="container">
				<div className="row">
					<h4>{dishes.errMsg}</h4>
				</div>
			</div>
		);
	} else {
		return (
			<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to="/home">Home</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>Menu</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>Menu</h3>
						<hr />
					</div>
				</div>
				<div className="row">
					{dishes.dishes.map(dish => {
						return (
							<div className="col-12 col-md-5 m-1" key={dish.id}>
								<RenderCard dish={dish} />
							</div>
						);
					})}
				</div>
			</div>
		);
	}
};
export default Menu;

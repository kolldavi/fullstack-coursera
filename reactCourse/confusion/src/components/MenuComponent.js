import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderCard(props) {
	const { dish, onClick } = props;
	return (
		<Card onClick={() => onClick(dish.id)}>
			<CardImg width="100%" src={dish.image} alt={dish.name} />
			<CardImgOverlay>
				<CardTitle>{dish.name}</CardTitle>
			</CardImgOverlay>
		</Card>
	);
}
const Menu = ({ dishes, onClick }) => {
	return (
		<div className="container">
			<div className="row">
				{dishes.map(dish => {
					return (
						<div className="col-12 col-md-5 m-1" key={dish.id}>
							<RenderCard dish={dish} onClick={onClick} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Menu;

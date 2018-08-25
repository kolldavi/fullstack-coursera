import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './Loading';
import { baseUrl } from '../shared/baseUrl';
console.log(baseUrl);
function RenderCard({ item, isLoading, errMsg }) {
	if (isLoading) {
		return <Loading />;
	} else if (errMsg) {
		return <h4>{errMsg}</h4>;
	} else {
		return (
			<Card className="h-100">
				<CardBody>
					<CardImg src={baseUrl + item.image} alt={item.name} />
					<CardTitle>{item.name}</CardTitle>
					{item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
					<CardText>{item.description}</CardText>
				</CardBody>
			</Card>
		);
	}
}

function Home(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12 col-md mt-2 mb-2">
					<RenderCard item={props.dishes} isLoading={props.dishesLoading} errMsg={props.dishesErrMsg} />
				</div>
				<div className="col-12 col-md mt-2 mb-2">
					<RenderCard
						item={props.promotions}
						isLoading={props.promotionsLoading}
						errMsg={props.promotionsErrMsg}
					/>
				</div>
				<div className="col-12 col-md mt-2 mb-2">
					<RenderCard item={props.leaders} />
				</div>
			</div>
		</div>
	);
}

export default Home;

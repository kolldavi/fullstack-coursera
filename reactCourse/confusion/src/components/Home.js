import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './Loading';
function RenderCard({ item, isLoading, errMsg }) {
	if (isLoading) {
		return <Loading />;
	} else if (errMsg) {
		return <h4>{errMsg}</h4>;
	} else {
		return (
			<Card className="h-100">
				<CardImg src={item.image} alt={item.name} />
				<CardBody>
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
					<RenderCard item={props.dish} isLoading={props.dishesLoading} dishesErrMsg={props.errMsg} />
				</div>
				<div className="col-12 col-md mt-2 mb-2">
					<RenderCard item={props.promotion} />
				</div>
				<div className="col-12 col-md mt-2 mb-2">
					<RenderCard item={props.leader} />
				</div>
			</div>
		</div>
	);
}

export default Home;

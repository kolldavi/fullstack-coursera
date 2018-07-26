import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Header from './Header';
import Footer from './Footer';
import DishDetail from './DishDetail';
import Home from './Home';
import Contact from './Contact';
import { Switch, Route, Redirect } from 'react-router-dom';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			comments: COMMENTS,
			promotions: PROMOTIONS,
			leaders: LEADERS
		};
	}

	render() {
		const HomePage = () => {
			return (
				<Home
					dish={this.state.dishes.filter(dish => dish.featured)[0]}
					promotion={this.state.promotions.filter(promo => promo.featured)[0]}
					leader={this.state.leaders.filter(leader => leader.featured)[0]}
				/>
			);
		};
		return (
			<div>
				<Header />
				<Switch>
					<Route path="/home" component={HomePage} />
					<Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
					<Route exact path="/contactus" component={Contact} />} />
					<Redirect to="/home" />
				</Switch>

				{
					//<DishDetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} />
				}
				<Footer />
			</div>
		);
	}
}

export default Main;

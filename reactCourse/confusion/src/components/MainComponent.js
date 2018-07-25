import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Header from './Header';
import Footer from './Footer';
import DishDetail from './DishDetail';
import Home from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';
class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			selectedDish: null
		};
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route path="/home" component={Home} />
					<Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
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

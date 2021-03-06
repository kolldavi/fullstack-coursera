import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './Header';
import Footer from './Footer';
import DishDetail from './DishDetail';
import Home from './Home';
import Contact from './Contact';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import About from './About';
import { connect } from 'react-redux';
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreater';
import { actions } from 'react-redux-form';
const mapStateToProps = state => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders
	};
};
const mapDispatchToProps = dispatch => ({
	addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
	fetchDishes: () => dispatch(fetchDishes()),
	fetchComments: () => dispatch(fetchComments()),
	fetchPromos: () => dispatch(fetchPromos()),
	resetFeedbackForm: () => {
		dispatch(actions.reset('feedback'));
	}
});

class Main extends Component {
	componentDidMount() {
		this.props.fetchDishes();
		this.props.fetchComments();
		this.props.fetchPromos();
	}
	render() {
		const HomePage = () => {
			return (
				<Home
					dishes={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
					dishesLoading={this.props.dishes.isLoading}
					dishesErrMsg={this.props.dishes.errMsg}
					promotions={this.props.promotions.promotions.filter(promo => promo.featured)[0]}
					promotionsLoading={this.props.promotions.isLoading}
					promotionsErrMsg={this.props.promotions.errMsg}
					leaders={this.props.leaders.filter(leader => leader.featured)[0]}
				/>
			);
		};
		const DishWithId = ({ match }) => {
			return (
				<DishDetail
					dish={this.props.dishes.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
					comments={this.props.comments.comments.filter(
						comment => comment.dishId === parseInt(match.params.dishId, 10)
					)}
					isLoading={this.props.dishes.isLoading}
					errMsg={this.props.dishes.errMsg}
					addComment={this.props.addComment}
				/>
			);
		};
		return (
			<div>
				<Header />
				<Switch>
					<Route path="/home" component={HomePage} />
					<Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
					<Route path="/menu/:dishId" component={DishWithId} />
					<Route
						exact
						path="/contactus"
						component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />}
					/>
					<Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
					<Redirect to="/home" />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

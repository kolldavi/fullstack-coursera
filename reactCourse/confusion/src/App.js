import React, { Component } from 'react';
import './App.css';
import Menu from './components/MenuComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from './shared/dishes';
class App extends Component {
	state = { dishes: DISHES };
	render() {
		return (
			<div className="App">
				<Navbar dark color="primary">
					<div className="container">
						<NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
					</div>
				</Navbar>
				<Menu dishes={this.state.dishes} />
			</div>
		);
	}
}

export default App;
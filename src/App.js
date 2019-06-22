import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import VendingMachine from './VendingMachine'

import Food from './Food'
import NotFound from './NotFound'
import Login from './Login'
import FoodRoute from './FoodRoute'

import './App.css'
class App extends Component {
	render() {
		return (
			<div className='App'>
				<NavBar />
				<Switch>
					<Route exact path='/' render={(routeProps) => <VendingMachine {...routeProps} />} />
					<Route exact path='/login' render={() => <Login />} />
					<FoodRoute exact path='/food/:name' component={Food} />
					<Route render={NotFound} />
				</Switch>
			</div>
		);
	}
}

export default App
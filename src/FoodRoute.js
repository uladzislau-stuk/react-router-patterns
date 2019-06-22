import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const FoodRoute = ({ component: Component, ...rest }) => {

	return (
		<Route {...rest} render={ ({ match }) => (
			match.params.food === 'soda' ? (
					<Redirect to='/' />
				) : (
					<Component name={match.params.name} />
				)
			)}
		/>
	);
};

export default FoodRoute
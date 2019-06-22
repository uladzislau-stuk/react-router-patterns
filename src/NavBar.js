import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import './NavBar.css'
import { withRouter } from 'react-router-dom'

class NavBar extends Component {
	handleLogin = () => {
		alert('Redirecting to login page')

		this.props.history.push('/login')
	}
	render() {
		return (
			<nav className='NavBar'>
				<NavLink to='/' className='NavBar-item' activeClassName='NavBar-item--active'>Home</NavLink>
				<NavLink to='/chips' className='NavBar-item' activeClassName='NavBar-item--active'>Chips</NavLink>
				<NavLink to='/sardines' className='NavBar-item' activeClassName='NavBar-item--active'>Sardines</NavLink>
				<NavLink to='/soda' className='NavBar-item' activeClassName='NavBar-item--active'>Soda</NavLink>
				<button className='NavBar-item NavBar-login' onClick={this.handleLogin}>Log in</button>
			</nav>
		)
	}
}

export default withRouter(NavBar)
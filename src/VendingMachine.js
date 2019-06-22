import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import './VendingMachine.css'

class VendingMachine extends Component {
	constructor(props) {
		super(props)

		this.state = {
			newFood: ''
		}
	}
	handleChange = (evt) => {
		this.setState({
			[evt.target.name] : evt.target.value
		})
	}
	handleClick = () => {
		const prevState = {...this.state}

		alert('Save new food')

		this.setState(() => ({
			newFood: ''
		}), () => (
			this.props.history.push(`/food/${prevState.newFood}`)
		))
	}
	render() {
		return (
			<div className='VendingMachine'>
				<div className='VendingMachine-question'>Do you want something?</div>
				<div className='VendingMachine-goods'>
					<ul>
						<li><NavLink to='/food/chips'>Chips</NavLink></li>
						<li><NavLink to='/food/sardines'>Sardines</NavLink></li>
						<li><NavLink to='/food/soda'>Soda</NavLink></li>
					</ul>
				</div>
				<div className='VendingMachine-addFood'>
					<input
						type='text'
						placeholder='Enter food name'
						name='newFood'
						value={this.state.newFood}
						onChange={this.handleChange}
					/>
					<button onClick={this.handleClick}>Add</button>
				</div>
			</div>
		);
	}
}

export default VendingMachine
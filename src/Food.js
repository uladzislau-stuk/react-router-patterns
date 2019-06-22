import React from 'react';
import { Link } from 'react-router-dom'

const Food = (props) => {
	const { name } = props

	return (
		<div>
			<div>{name}</div>
			<Link to='/'>Go Back</Link>
		</div>
	)
}

export default Food
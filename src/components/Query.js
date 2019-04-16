import React from 'react'
import { connect } from 'react-redux'

// Action creators
import * as actions from '../actions/actionCreators.js'

class Query extends React.Component { 
	render() {
		const { fetchConnections } = this.props

		return(
			<div id="query-wrappe">

				<label htmlFor="flyFrom">From</label>
				<input id="flyFrom" type="text" />
				<label htmlFor="flyFrom">To</label>
				<input id="flyFrom" type="text" />
				<label htmlFor="dateFrom">Leave date</label>
				<input id="dateFrom" type="date" />

				<span>Sort by:</span>
				<input type="radio" id="sort-by-quality" name="sort" value="quality" defaultChecked />
				<label htmlFor="sort-by-quality">Quality</label>
				<input type="radio" id="sort-by-price" name="sort" value="price" />
				<label htmlFor="sort-by-price">Price</label>
				<input type="radio" id="sort-by-duration" name="sort" value="duration" />
				<label htmlFor="sort-by-duration">Duration</label>
				<button onClick={() => fetchConnections("Prague", "London", "24/05/2019", "price")}>Search</button>
			</div>
		)
	}
}

Query = connect(
	null,
	actions
)(Query)

export default Query
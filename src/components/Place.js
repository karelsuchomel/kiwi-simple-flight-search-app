import React from 'react'
import { connect } from 'react-redux'

export default class Place extends React.Component {
	constructor(props) {
		super(props)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.state = {
			suggested: []
		}
	}
	handleInputChange(term, placeType) {
		const { handleChange } = this.props
		
		handleChange(term, placeType)
		this.fetchLocations(term).then(response => {
			this.setState({
				suggested: response.locations.map(loc => loc.name)
			})
		})
	}

	fetchLocations(term) {
		let APIcall = 'https://api.skypicker.com/locations?'
		APIcall += 'term=' + term
		APIcall += '&location_types=city'

		return( fetch(APIcall)
			.then( response => {
				if (response.ok) {
					return response.json()
				}
				throw new Error('Network response was not ok.')
			})
		)
	}

	render() {
		const {labelText, inputId, placeType} = this.props
		const {suggested} = this.state
		let inputNode

		return (
			<label className="inset-label" htmlFor={inputId}>
				{labelText}
				<input 
					id={inputId}
					type="text" 
					onChange={() => this.handleInputChange(inputNode.value, placeType)}
					ref={node => {inputNode = node}}
				/>
				{suggested.length > 0 && (
				<ul className="suggested-places">
					{suggested.map((loc, index) => 
						(
						<li key={index} onClick={() => {
							this.props.handleChange(loc, placeType)
							inputNode.value = loc
							this.setState({suggested: []})} 
						}>
							{loc}
						</li>
						)
					)}
				<div className="cancel-popup" onClick={() => this.setState({suggested: []})}></div>
				</ul>
				)}
			</label>
		)
	}
}
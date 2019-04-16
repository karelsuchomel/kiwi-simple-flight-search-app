import React from 'react'

const Connection = (props) => {
	const dateDeparture = new Date(props.departure)

	return (
		<li>
			<div className="connection-basic">
					Price: {props.price}
					Departure: {dateDeparture.getDate()}
					Arrival: {props.arrival}
					From: {props.cityFrom}
					To: {props.cityTo}
					Flight duration: {props.flyDuration}
				<a href={props.kiwiLink}>Continue on KIWI</a>
			</div>
		</li>
	)
}

export default Connection
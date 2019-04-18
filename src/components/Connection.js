import React from 'react'

import {dateFromUnixTimestamp as dFUT, timeFromUnixTimestamp as tFUT } from '../utils/UnixTimestampFormating'

const Connection = (props) => {
	return (
		<li>
			<div className="connection-basic">
					<div className="price">{props.price}&euro;</div>
					<div className="departure-time">{tFUT(props.departure)} - {tFUT(props.arrival)}</div>
					<div className="departure-date">{dFUT(props.departure)}</div>
					From: {props.cityFrom}
					To: {props.cityTo}
					Flight duration: {props.flyDuration}
				<a href={props.kiwiLink}>Continue on KIWI</a>
			</div>
		</li>
	)
}

export default Connection
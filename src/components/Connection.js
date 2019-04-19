import React from 'react'

import {dateFromUnixTimestamp as dFUT, timeFromUnixTimestamp as tFUT } from '../utils/UnixTimestampFormating'

const Connection = (props) => {
	return (
		<li>
			<div className="price">{props.price}&euro;</div>
			<div className="departure">
				<div className="departure-time">{tFUT(props.departure)} - {tFUT(props.arrival)}</div>
				<div className="departure-date">{dFUT(props.departure)}</div>
			</div>
			<div className="flight">
				<div className="duration">{props.flyDuration}</div>
				<div className="direction">
					{props.cityFrom} -> {props.cityTo}
				</div>
			</div>
			<a href={props.kiwiLink} target="_blank">Book with<br />KIWI.com</a>
		</li>
	)
}

export default Connection
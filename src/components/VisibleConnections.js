import React from 'react'
import { connect } from 'react-redux'

// Action creators
import { getVisibleConnections, getIsFetching } from '../reducers'
// Components
import Connection from './Connection'

class VisibleConnections extends React.Component {
	render() {
		const {connections, isFetching} = this.props

		return(
			<div id="visible-connections-wrapper">
				{ isFetching && <div>Loading...</div> }
				{ connections.length > 0 &&
					(<ul>
						{ connections.map(cn => 
								<Connection
									key={cn.id}
									price={cn.price}
									departure={cn.dTime}
									arrival={cn.aTime}
									cityFrom={cn.cityFrom}
									cityTo={cn.cityTo}
									flyDuration={cn.fly_duration}
									kiwiLink={cn.deep_link}
								/>
							)
						}
					</ul>)
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		connections: getVisibleConnections(state),
		isFetching: getIsFetching(state),
	}
}

VisibleConnections = connect(
	mapStateToProps
)(VisibleConnections)

export default VisibleConnections
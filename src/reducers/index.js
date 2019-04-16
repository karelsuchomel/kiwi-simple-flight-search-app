import { combineReducers } from 'redux'

const isFetching = (state = false, action) => {
	switch (action.type) {
		case 'FETCH_CONNECTIONS_REQUEST':
			return true
		case 'FETCH_CONNECTIONS_SUCCESS':
		case 'FETCH_CONNECTIONS_FAILURE':
			return false
		default:
			return state
	}
}

const connectionsById = (state = {}, action) => {
	switch(action.type) {
		case 'FETCH_CONNECTIONS_SUCCESS':
			const nextState = {...state}
			action.response.data.forEach(connection =>
				nextState[connection.id] = connection
			)
			return nextState
		default:
			return state
	}
}

const listOfIds = (state = [], action) => {
	switch(action.type) {
		case 'FETCH_CONNECTIONS_SUCCESS':
			return action.response.data.map(connection => connection.id)
		default:
			return state
	}
}

const rootReducer = combineReducers({
	connectionsById,
	listOfIds,
	isFetching
})

export default rootReducer

export const getVisibleConnections = (state) => 
	state.listOfIds.map(id => state.connectionsById[id])

export const getIsFetching = (state) => state.isFetching
import * as api from '../api'

export const fetchConnections = (flyFrom, to, dateFrom, dateTo, sort) => (dispatch) => {
	dispatch({
		type: 'FETCH_CONNECTIONS_REQUEST'
	})

	return api.fetchConnections(flyFrom, to, dateFrom, dateTo, sort).then(
		response => {
			dispatch({
				type: 'FETCH_CONNECTIONS_SUCCESS',
				response: response
			})
		},
		error => {
			dispatch({
				type: 'FETCH_CONNECTIONS_FAILURE',
				message: error.message || 'Something went wrong.'
			})
		}
	)
}
export const fetchConnections = (flyFrom, flyTo, dateFrom, sort) => {

	let APIcall = 'https://api.skypicker.com/flights?'
	APIcall += 'flyFrom=' + flyFrom
	APIcall += '&to=' + flyTo
	APIcall += '&dateFrom=' + dateFrom 
	APIcall += '&dateTo=' + dateFrom
	APIcall += '&sort=' + sort
	APIcall += '&partner=picky'

	console.log(APIcall)

	return( fetch(APIcall)
		.then( response => {
			if (response.ok) {
				return response.json()
			}
			throw new Error('Network response was not ok.')
		})
	)
}

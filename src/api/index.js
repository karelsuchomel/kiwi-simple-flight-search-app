export const fetchConnections = (flyFrom, to, dateFrom, sort) => 
	fetch('https://api.skypicker.com/flights?flyFrom=PRG&to=LGW&dateFrom=20/5/2019&dateTo=20/5/2019&partner=picky')
		.then( response => {
			if (response.ok) {
				return response.json()
			}
			throw new Error('Network response was not ok.')
		})

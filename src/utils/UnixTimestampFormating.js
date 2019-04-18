// Date from UNIX timestamp
export const dateFromUnixTimestamp = (unixTimeStamp) => {
	const date = new Date(unixTimeStamp * 1000)

	// Day 0 - 6 by their name ()
	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	let renderDate = daysOfWeek[ date.getUTCDay() ]

	// Month
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	renderDate += ' ' + months[ date.getUTCMonth() ]
	// Day 1 - 31
	renderDate += ' ' + date.getUTCDate()


	return renderDate
}

// Time (AM/PM) from UNIX timestamp
export const timeFromUnixTimestamp = (unixTimeStamp) => {
	const date = new Date(unixTimeStamp * 1000)

	// Hours in 12 hour format
	const hours = date.getUTCHours()
	let renderTime = (hours % 12)
	renderTime += ':' + date.getUTCMinutes()
	renderTime += (hours >= 12 ? ' PM' : ' AM')

	return renderTime
}

// Date object to DD/MM/YYYY format
export const parseDate = (date) => {
	const days = date.getDate()
	let parsedDate = days < 10 ? ('0' + days) : days 
	const months = date.getMonth() + 1
	parsedDate += '/' + (months < 10 ? ('0' + months) : months)
	parsedDate += '/' + date.getFullYear()

	return parsedDate 
}
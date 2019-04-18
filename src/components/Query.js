import React from 'react'
import { connect } from 'react-redux'

// Action creators
import * as actions from '../actions/actionCreators.js'
// Date picker
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
// Parse date
import { parseDate as tFUT} from '../utils/UnixTimestampFormating'

class Query extends React.Component { 
	constructor(props) {
		super(props)
		this.handleDateFromChange = this.handleDateFromChange.bind(this)
		this.handleDateToChange = this.handleDateToChange.bind(this)
		this.handleSortChange = this.handleSortChange.bind(this)
		this.state = {
			selectedDateFrom: undefined,
			selectedDateTo: undefined,
			sortType: 'price'
		}
	}
	handleDateFromChange(day, { selected, disabled }) {
		if (disabled) {
      return
    }
    if (selected) {
      // Unselect the day if already selected
      this.setState({ selectedDateFrom: undefined })
      return
    }

		this.setState({ selectedDateFrom: day })
	}
	handleDateToChange(day, { selected, disabled }) {
		if (disabled) {
      return
    }
    if (selected) {
      // Unselect the day if already selected
      this.setState({ selectedDateTo: undefined })
      return
    }

		if (!this.state.selectedDateFrom) {
			this.setState({ selectedDateTo: undefined })
			return
		}

		if (this.state.selectedDateFrom.getTime() >= day.getTime()) {
			this.setState({ selectedDateTo: undefined })
		} else {
			this.setState({ selectedDateTo: day})
		}
	}
	handleSortChange(filter) {
		this.setState({ sortType: filter})
	}

	render() {
		const { fetchConnections } = this.props
		const todaysDate = new Date()

		let fromInputNode
		let toInputNode
		let sortType

		return(
			<div id="query-wrappe">

				<label htmlFor="flyFrom">
					From
				</label>
				<input 
					id="flyFrom" 
					type="text" 
					ref={node => {fromInputNode = node}}
				/>

				<label htmlFor="flyTo">
					To
				</label>
				<input 
					id="flyTo" 
					type="text" 
					ref={node => {toInputNode = node}}
				/>

				<label htmlFor="dateFrom">
					First date to leave
				</label>
				<DayPickerInput 
					className="DayPicker"
					onDayChange={this.handleDateFromChange}
					placeholder="YYYY-MM-DD"
					selectedDays={this.state.selectedDateFrom}
          disabledDays={new Date(2019,4,19) }
					inputProps={({id: 'dateFrom'})}
				/>

				<label htmlFor="dateTo">
					Last date to leave
				</label>
				<DayPickerInput 
					className="DayPicker"
					onDayChange={this.handleDateToChange}
					placeholder="YYYY-MM-DD"
					selectedDays={this.state.selectedDateTo}
          disabledDays={{ before: this.state.selectedDateFrom }}
					inputProps={({id: 'dateTo'})}
				/>


				<span>Sort by:</span>
				<input 
					type="radio" 
					id="sort-by-price" 
					name="sort" 
					value="price" 
					onChange={() => this.handleSortChange('price')} 
					checked={this.state.sortType === 'price' && true}
				/>
				<label htmlFor="sort-by-price">Price</label>
				<input 
					type="radio" 
					id="sort-by-quality" 
					name="sort" 
					value="quality"  
					onChange={() => this.handleSortChange('quality')} 
					checked={this.state.sortType === 'quality' && true}
				/>
				<label htmlFor="sort-by-quality">Quality</label>
				<input 
					type="radio" 
					id="sort-by-duration" 
					name="sort" 
					value="duration"
					onChange={() => this.handleSortChange('duration')} 
					checked={this.state.sortType === 'duration' && true}
				/>
				<label htmlFor="sort-by-duration">Duration</label>
				<button onClick={() => fetchConnections(fromInputNode.value, toInputNode.value, tFUT(this.state.selectedDateFrom), this.state.sortType)}>Search</button>
			</div>
		)
	}
}

Query = connect(
	null,
	actions
)(Query)

export default Query
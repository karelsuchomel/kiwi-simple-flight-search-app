import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import BMOApp from './App'

const Root = ({ store }) => (
	<Provider store={store}>
		<BMOApp />
	</Provider>
)
Root.propTypes = {
	store: PropTypes.object.isRequired
}

export default Root

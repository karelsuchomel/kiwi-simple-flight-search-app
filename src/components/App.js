import React from 'react'

// components
import Header from './Header.js'
import Query from './Query.js'
import VisibleConnections from './VisibleConnections.js'

const TodoApp = () => (
	<div id="app-wrapper">
		<Header />
		<Query />
		<VisibleConnections />
	</div>
)


export default TodoApp
import React from 'react'

// components
import Header from './Header.js'
import Query from './Query.js'
import VisibleConnections from './VisibleConnections.js'
// BMO graphics
import BMOGraphicsURL from '../images/bmo-body-optimized.svg'

const TodoApp = () => (
	<div id="bmo-body">
		<img src={BMOGraphicsURL}/>
		<div id="app-wrapper">
			<Header />
			<Query />
			<VisibleConnections />
		</div>
	</div>
)


export default TodoApp
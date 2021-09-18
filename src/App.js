import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppContainer from './routes'

const App = () => {
	return (
		<NavigationContainer>
			<AppContainer />
		</NavigationContainer>
	)
}

export default App

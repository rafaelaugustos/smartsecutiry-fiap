import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Home from '../pages/Home'
const { Navigator, Screen } = createNativeStackNavigator()

const AppNavigation = () => {
	return (
		<Navigator>
			<Screen name="Login" component={Login} options={{ headerShown: false }} />
			<Screen name="Signup" component={Signup} />
			<Screen name="Home" component={Home} options={{ headerShown: false }} />
		</Navigator>
	)
}

export default AppNavigation

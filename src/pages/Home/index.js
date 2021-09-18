import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const Home = () => {
	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				region={{
					latitude: -22.981701,
					longitude: -46.990601,
					latitudeDelta: 0.015,
					longitudeDelta: 0.0121,
				}}
			>
				<Marker
					coordinate={{ latitude: -22.981701, longitude: -46.990601 }}
					title="Roubo"
					description="Roubaram meu celular na frente do banco Itau"
				/>
				<View
					style={{
						position: 'absolute',
						bottom: 0,
						height: 100,
						width: '100%',
						justifyContent: 'center',
						alignItems: 'flex-end',
					}}
				>
					<TouchableOpacity style={styles.addButton}>
						<Text style={styles.addButtonText}>+</Text>
					</TouchableOpacity>
				</View>
			</MapView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		position: 'relative',
		...StyleSheet.absoluteFillObject,
	},
	addButton: {
		width: 50,
		height: 50,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#3AD29F',
		marginRight: 20,
	},
	addButtonText: {
		color: '#FFF',
		fontSize: 24,
	},
})

export default Home

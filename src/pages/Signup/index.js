import React from 'react'
import {
	View,
	ScrollView,
	StyleSheet,
	Dimensions,
	Text,
	TouchableOpacity,
	TextInput,
} from 'react-native'

const { height } = Dimensions.get('window')

const Signup = () => {
	return (
		<ScrollView style={{ backgroundColor: '#fff' }}>
			<View style={style.container}>
				<View style={style.form}>
					<Text style={{ fontSize: 25, fontWeight: 'bold' }}>Cadastro</Text>
					<Text style={{ color: '#666' }}>
						Preencha os campos abaixo para criar sua conta
					</Text>

					<View style={style.formInput}>
						<Text>Nome completo</Text>
						<TextInput style={style.input} />
					</View>

					<View style={style.formInput}>
						<Text>Email</Text>
						<TextInput style={style.input} />
					</View>

					<View style={style.formInput}>
						<Text>Senha</Text>
						<TextInput style={style.input} />
					</View>

					<TouchableOpacity style={style.button}>
						<Text style={style.buttonText}>Cadastrar</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	)
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		height: height,
	},
	logo: {
		alignSelf: 'center',
	},
	form: {
		padding: 20,
	},
	formInput: {
		marginTop: 20,
	},
	input: {
		borderWidth: 1,
		height: 45,
		borderRadius: 5,
		paddingLeft: 10,
		marginTop: 5,
		borderColor: '#D8D8E8',
	},
	button: {
		backgroundColor: '#3AD29F',
		height: 50,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20,
	},
	buttonText: {
		color: '#fff',
	},
	forgotPassword: {
		marginTop: 30,
		borderBottomWidth: 1,
		borderColor: '#f5f5f5',
		paddingBottom: 30,
	},
	signup: {
		marginTop: 30,
		alignSelf: 'center',
	},
})

export default Signup

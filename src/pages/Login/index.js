import React from 'react'
import {
	View,
	Image,
	ScrollView,
	StyleSheet,
	TextInput,
	Text,
	TouchableOpacity,
	Dimensions,
} from 'react-native'

const { height } = Dimensions.get('window')

const Login = ({ navigation }) => {
	return (
		<ScrollView style={{ backgroundColor: '#fff' }}>
			<View style={style.container}>
				<Image source={require('../../assets/logo.png')} style={style.logo} />

				<View style={style.form}>
					<View style={style.formInput}>
						<Text>Email</Text>
						<TextInput style={style.input} />
					</View>
					<View style={style.formInput}>
						<Text>Senha</Text>
						<TextInput style={style.input} />
					</View>

					<TouchableOpacity style={style.button}>
						<Text style={style.buttonText}>Entrar</Text>
					</TouchableOpacity>

					<View style={style.forgotPassword}>
						<TouchableOpacity>
							<Text>Esqueci minha senha</Text>
						</TouchableOpacity>
					</View>

					<TouchableOpacity
						style={style.signup}
						onPress={() => navigation.navigate('Signup')}
					>
						<Text style={{ color: '#8C8A97' }}>Quero me cadastrar</Text>
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
		justifyContent: 'center',
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

export default Login

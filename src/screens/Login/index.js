import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import styles from "./styles";
import { Storage } from "../../common/helper/common";
import { Constant, Matrics } from "../../common/styles";
import Routes from "../Router/routes";
import { TextFieldView, ButtonView } from "../../components";
import { userLoginWatcher, userLoginEmailChanged, userLoginPasswordChanged } from "../../store/actions";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEmailError: false,
			isPwdError: false
		};
	}

	// ------ React Lifecycles ------ //
	componentWillMount() {}

	componentDidMount() {}

	// ------ Email changed ------ //
	onEmailChanged = (email) => {
		this.props.userLoginEmailChanged(email);
	};

	// ------ Password changed ------ //
	onPasswordChanged = (pwd) => {
		this.props.userLoginPasswordChanged(pwd);
	};

	// ------ Login api calling.. ------ //
	_loginApiCall = async () => {
		const param = {
			email: this.props.userEmail,
			password: this.props.userPassword
		};
		this.props.userLoginWatcher(
			param,
			(response) => {
				response.json().then((value) => {
					console.log("resposen....", value);
					if (value && value.success == true) {
						this.loginSuccess();
					} else {
						alert(value.message ? value.message : "Something went wrong");
					}
				});
			},
			(error) => {
				console.log("error..", error);
			}
		);
	};

	loginSuccess = async () => {
		await Storage.setItem(Constant.AsynchStoragekey.IS_USER_LOGIN, true);
		this.goToHome();
	};

	// ------ Button Click ------ //
	onSubmit = () => {
		const { userEmail, userPassword } = this.props;
		if (userEmail == "") {
			this.setState({ isEmailError: true }, () =>
				setTimeout(() => {
					this.setState({ isEmailError: false });
				}, 2000)
			);
		} else if (userPassword == "") {
			this.setState({ isPwdError: true }, () =>
				setTimeout(() => {
					this.setState({ isPwdError: false });
				}, 2000)
			);
		} else {
			this._loginApiCall();
		}
	};

	// ------ Custom functions ------ //
	goToHome = () => {
		this.props.navigation.dispatch(
			StackActions.reset({
				index: 0,
				actions: [ NavigationActions.navigate({ routeName: Routes.Authenticated }) ],
				key: null
			})
		);
	};

	renderLoginView = () => {
		const { userEmail, userPassword, userLoginLoader } = this.props;
		const { isEmailError, isPwdError } = this.state;

		return (
			<View style={styles.loginViewContainerStyle}>
				<TextFieldView
					title="Email"
					titleTextStyle={isEmailError == true ? { color: "red" } : {}}
					value={userEmail}
					KeyboardType="email-address"
					onChageValue={(text) => this.onEmailChanged(text)}
				/>
				<TextFieldView
					title="Password"
					titleTextStyle={isPwdError == true ? { color: "red" } : {}}
					value={userPassword}
					secureTextEntry={true}
					onChageValue={(text) => this.onPasswordChanged(text)}
				/>
				<ButtonView title="Login" onPress={() => this.onSubmit()} showLoader={userLoginLoader} />
			</View>
		);
	};

	// ------ React render method ------ //
	render() {
		return <View style={styles.mainContainer}>{this.renderLoginView()}</View>;
	}
}

// ------ Connect to props functions and values ------ //
function mapStateToProps({ login }) {
	const { loginData, userToken, userEmail, userPassword, userLoginLoader } = login;
	return { loginData, userToken, userEmail, userPassword, userLoginLoader };
}

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			userLoginWatcher,
			userLoginEmailChanged,
			userLoginPasswordChanged
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

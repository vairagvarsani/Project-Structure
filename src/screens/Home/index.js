import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import styles from "./styles";
import { Matrics, Constant } from "../../common/styles";
import { Storage } from "../../common/helper/common";
import Routes from "../Router/routes";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	// ------ React Lifecycles ------ //
	componentWillMount() {}

	componentDidMount() {}

	// ------ Button Click ------ //
	onLogoutClicked = async () => {
		await Storage.removeItem(Constant.AsynchStoragekey.IS_USER_LOGIN);
		this.goToLogin();
	};

	// ------ Custom functions ------ //
	goToLogin = () => {
		this.props.navigation.dispatch(
			StackActions.reset({
				index: 0,
				actions: [ NavigationActions.navigate({ routeName: Routes.NonAuthenticated }) ],
				key: null
			})
		);
	};

	// ------ React render method ------ //
	render() {
		return (
			<View style={styles.mainContainer}>
				<View style={styles.headerStyle}>
					<TouchableOpacity
						style={styles.logOutButtonStyle}
						onPress={() => {
							this.onLogoutClicked();
						}}
					>
						<Text>Logout</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.viewContainerStyle}>
					<Text> Home screen </Text>
				</View>
			</View>
		);
	}
}

export default Home;

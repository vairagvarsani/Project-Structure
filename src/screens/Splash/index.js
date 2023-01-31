import React, { Component } from "react";
import { Image, View } from "react-native";
import { Images, Matrics } from "../../common/styles";
import NonAuthenticated from "../Router/NonAuthenticated";
import Authenticated from "../Router/Authenticated";
import Routes from "../Router/routes";
import { Storage } from "../../common/helper/common";
import { StackActions, NavigationActions } from "react-navigation";
import constant from "../../common/styles/constant";

class Splash extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: ""
		};
	}
	componentWillMount() {}

	async componentDidMount() {
		let is_user_login = await Storage.getItem(constant.AsynchStoragekey.IS_USER_LOGIN);
		if (is_user_login !== null && is_user_login == true) {
			setTimeout(() => {
				this.renderScreen(Routes.Authenticated);
			}, 1000);
		} else {
			setTimeout(() => {
				this.renderScreen(Routes.NonAuthenticated);
			}, 1000);
		}
	}

	shouldComponentUpdate(nextState, nextProps) {
		if (this.props !== nextProps || this.state !== nextState) {
			return true;
		}
		return false;
	}

	renderScreen(routeName) {
		this.props.navigation.dispatch(
			StackActions.reset({
				index: 0,
				actions: [ NavigationActions.navigate({ routeName: routeName }) ],
				key: null
			})
		);
	}

	render() {
		return (
			<View
				style={{
					width: Matrics.screenWidth,
					height: Matrics.screenHeight,
					backgroundColor: "white"
				}}
			/>
		);
	}
}

export default Splash;

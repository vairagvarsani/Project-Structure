import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Login from "../../../screens/Login";
import Routes from "../routes";

export default createStackNavigator(
	{
		[Routes.LOGIN]: {
			screen: Login
		}
	},
	{
		initialRouteName: Routes.LOGIN,
		headerMode: "none",
		defaultNavigationOptions: {
			headerVisible: false,
			gestureEnabled: false
		}
	}
);

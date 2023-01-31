import React from "react";
import Home from "../../Home";
import Routes from "../routes";
import { createStackNavigator } from "react-navigation-stack";

export default createStackNavigator(
	{
		[Routes.HOME]: {
			screen: Home
		}
	},
	{
		initialRouteName: Routes.HOME,
		headerMode: "none",
		defaultNavigationOptions: {
			headerVisible: false,
			gestureEnabled: false
		}
	}
);

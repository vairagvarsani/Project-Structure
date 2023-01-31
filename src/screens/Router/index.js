import React from "react";
import Routes from "./routes";
import NonAuthenticated from "./NonAuthenticated";
import Authenticated from "./Authenticated";
import Splash from "../Splash";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

export const AppNavigator = (isLoggedIn = false) => {
	const app = createStackNavigator(
		{
			[Routes.SPLASH]: {
				screen: Splash,
				navigationOptions: {
					headerShown: false
				}
			},
			[Routes.NonAuthenticated]: {
				screen: NonAuthenticated,
				navigationOptions: {
					headerShown: false
				}
			},
			[Routes.Authenticated]: {
				screen: Authenticated,
				navigationOptions: {
					headerShown: false
				}
			}
		},
		{
			headerMode: "none",
			defaultNavigationOptions: {
				headerVisible: false,
				gestureEnabled: false
			}
		}
	);
	const container = createAppContainer(app);
	return container;
};

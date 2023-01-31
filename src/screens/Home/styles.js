import { Matrics, Font, Color } from "../../common/styles";
import { Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default (styles = {
	mainContainer: {
		flex: 1
	},
	headerStyle: {
		backgroundColor: "#ffffff",
		shadowRadius: 0,
		shadowOffset: {
			height: 0
		},
		height: Matrics.ScaleValue(60),
		justifyContent: "center"
	},
	viewContainerStyle: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	logOutButtonStyle: {
		width: Matrics.ScaleValue(80),
		height: Matrics.ScaleValue(30),
		justifyContent: "flex-end",
		alignItems: "center",
		alignSelf: "flex-end"
	}
});
module.exports = styles;

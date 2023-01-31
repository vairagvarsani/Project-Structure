import { Matrics, Font, Color } from "../../common/styles";
import { Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default (styles = {
	mainContainer: {
		flex: 1
	},
	loginViewContainerStyle: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginHorizontal: Matrics.ScaleValue(25)
	}
});
module.exports = styles;

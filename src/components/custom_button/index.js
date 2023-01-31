import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { Matrics } from "../../common/styles";

const ButtonView = ({ title, onPress, containerStyle, buttonViewStyle, buttonTextStyle, showLoader = false }) => {
	return (
		<View style={[ styles.buttonOuterViewStyle, containerStyle ]}>
			{showLoader == true ? (
				<View style={styles.buttonOuterStyle}>
					<ActivityIndicator color={"black"} />
				</View>
			) : (
				<TouchableOpacity style={[ styles.buttonOuterStyle, buttonViewStyle ]} onPress={onPress}>
					<Text style={[ styles.buttonTextStyle, buttonTextStyle ]}> {title} </Text>
				</TouchableOpacity>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	buttonOuterViewStyle: {
		width: "100%",
		flexDirection: "column",
		height: Matrics.ScaleValue(40),
		marginVertical: Matrics.ScaleValue(20),
		justifyContent: "center",
		alignItems: "center"
	},
	buttonOuterStyle: {
		height: Matrics.ScaleValue(30),
		width: "100%",
		backgroundColor: "#87cdeb",
		borderRadius: Matrics.ScaleValue(4),
		shadowColor: "rgba(104, 104, 104, 0.25)",
		shadowOffset: {
			width: 0,
			height: Matrics.ScaleValue(3)
		},
		elevation: Matrics.ScaleValue(10),
		shadowOpacity: 1,
		shadowRadius: Matrics.ScaleValue(5),
		paddingHorizontal: Matrics.ScaleValue(10),
		justifyContent: "center",
		alignItems: "center"
	},
	buttonTextStyle: {
		fontWeight: "500",
		fontSize: Matrics.ScaleValue(14),
		lineHeight: Matrics.ScaleValue(16),
		color: "#FFFFFF",
		alignSelf: "center",
		marginVertical: Matrics.ScaleValue(5)
	}
});

export default ButtonView;

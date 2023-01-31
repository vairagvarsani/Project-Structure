import React from "react";
import { Dimensions, TextInput, Text, View, StyleSheet } from "react-native";
import { Matrics } from "../../common/styles";

const TextFieldView = ({
	title,
	value,
	onChageValue,
	placeHolder = '',
	KeyboardType = 'default',
	containerStyle,
	titleTextStyle,
    textFieldStyle,
    secureTextEntry = false,
}) => {
	return (
		<View style={[ styles.textInputOuterViewStyle, containerStyle ]}>
			<Text style={[ styles.titleTextStyle, titleTextStyle ]}>{title}</Text>
			<TextInput
				style={[ styles.textInputStyle, textFieldStyle ]}
				placeholder={placeHolder}
				keyboardType={KeyboardType}
				value={value}
                onChangeText={onChageValue}
                secureTextEntry = {secureTextEntry}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	textInputOuterViewStyle: {
		width: "100%",
		flexDirection: "column",
		height: Matrics.ScaleValue(50),
		marginVertical: Matrics.ScaleValue(10)
	},
	textInputStyle: {
		height: Matrics.ScaleValue(30),
		width: "100%",
		backgroundColor: "#F9EFF5",
		textAlign: "center",
		borderRadius: Matrics.ScaleValue(4),
		fontSize: Matrics.ScaleValue(12),
		color: "#665A65",
		shadowColor: "rgba(104, 104, 104, 0.25)",
		shadowOffset: {
			width: 0,
			height: Matrics.ScaleValue(3)
		},
		elevation: Matrics.ScaleValue(10),
		shadowOpacity: 1,
		shadowRadius: Matrics.ScaleValue(5),
		paddingHorizontal: Matrics.ScaleValue(10),
		paddingVertical: 0
	},
	titleTextStyle: {
		fontWeight: "500",
		fontSize: Matrics.ScaleValue(10),
		lineHeight: Matrics.ScaleValue(14),
		color: "#665A65",
		alignSelf: "flex-start",
		marginVertical: Matrics.ScaleValue(5)
	}
});

export default TextFieldView;

import { Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { Color, Font, Matrics } from '../../common/styles';

class Label extends React.Component {
	constructor(props) {
		super(props);
	}

	onClick = () => this.props.onPress();

	render() {
		const stylesArray = [];
		if (this.props.xlarge) stylesArray.push({ fontSize: Matrics.scaleValue(Font.fontSize.XLARGE) });
		else if (this.props.xxlarge) stylesArray.push({ fontSize: Matrics.ScaleValue(Font.fontSize.XXLARGE) });
		else if (this.props.xxxlarge) stylesArray.push({ fontSize: Matrics.scaleValue(Font.fontSize.XXXLARGE) });
		else if (this.props.xxxxlarge) stylesArray.push({ fontSize: Matrics.scaleValue(Font.fontSize.XXXXLARGE) });
		else if (this.props.xxxxxlarge) stylesArray.push({ fontSize: Matrics.scaleValue(Font.fontSize.XXXXXLARGE) });
		else if (this.props.large) stylesArray.push({ fontSize: Matrics.scaleValue(Font.fontSize.LARGE) });
		else if (this.props.normal) stylesArray.push({ fontSize: Matrics.scaleValue(Font.fontSize.NORMAL) });
		else if (this.props.small) stylesArray.push({ fontSize: Matrics.scaleValue(Font.fontSize.SMALL) });
		else if (this.props.xsmall) stylesArray.push({ fontSize: Matrics.scaleValue(Font.fontSize.XSMALL) });
		else stylesArray.push({ fontSize: Matrics.scaleValue(Font.fontSize.NORMAL) });

		if (this.props.bold) stylesArray.push({ fontWeight: '500' });
		else if (this.props.bolder) stylesArray.push({ fontWeight: '600' });
		else if (this.props.light) stylesArray.push({ fontWeight: '400' });
		else if (this.props.lighter) stylesArray.push({ fontWeight: '200' });
		// else stylesArray.push({ fontWeight: 'normal' });

		if (this.props.regular) {
			stylesArray.push({
				fontFamily: Font.fontFamily.REGULAR
			});
		} else if (this.props.boldText) {
			stylesArray.push({ fontFamily: Font.fontFamily.BOLD });
		} else if (this.props.avenir_medium) {
			stylesArray.push({
				fontFamily: Font.fontFamily.AVENIR_MEDIUM
			});
		} else if (this.props.avenir_heavy) {
			stylesArray.push({ fontFamily: Font.fontFamily.AVENIR_HEAVY });
		} else if (this.props.avenir_book) {
			stylesArray.push({ fontFamily: Font.fontFamily.AVENIR_BOOK });
		} else if (this.props.avenir_black) {
			stylesArray.push({ fontFamily: Font.fontFamily.AVENIR_BLACK });
		} else if (this.props.avenir_roman) {
			stylesArray.push({ fontFamily: Font.fontFamily.AVENIR_ROMAN });
		} else {
			stylesArray.push({
				fontFamily: Font.fontFamily.REGULAR
			});
		}

		stylesArray.push({
			color: this.props.secondary ? Color.TEXT_SECONDARY : this.props.color,
			marginTop: this.props.mt,
			marginBottom: this.props.mb,
			marginLeft: this.props.ml,
			marginRight: this.props.mr,
			textAlign: this.props.align
		});
		stylesArray.push(this.props.style);

		return (
			<Text
				{...this.props}
				numberOfLines={this.props.numberOfLines ? this.props.numberOfLines : this.props.singleLine ? 1 : null}
				style={stylesArray}
				onPress={this.props.onPress ? this.onClick : null}
			>
				{this.props.uppercase ? (
					this.props.children.toUpperCase()
				) : this.props.lowercase ? (
					this.props.children.toLowerCase()
				) : (
					this.props.children
				)}
			</Text>
		);
	}
}

Label.defaultProps = {
	small: false,
	normal: false,
	large: false,
	bold: false,
	bolder: false,
	lighter: false,
	light: false,
	singleLine: false,
	uppercase: false,
	lowercase: false,
	secondary: false,
	color: Color.black,
	regular: false,
	boldText: false,
	avenir_book: false,
	avenir_heavy: false,
	avenir_medium: false,
	avenir_roman: false,
	avenir_black: false,
	mt: 0,
	mb: 0,
	ml: 0,
	mr: 0,
	align: 'left'
};
Label.propTypes = {
	small: PropTypes.bool,
	normal: PropTypes.bool,
	large: PropTypes.bool,
	bold: PropTypes.bool,
	bolder: PropTypes.bool,
	light: PropTypes.bool,
	lighter: PropTypes.bool,
	color: PropTypes.string,
	singleLine: PropTypes.bool,
	uppercase: PropTypes.bool,
	lowercase: PropTypes.bool,
	secondary: PropTypes.bool,
	regular: PropTypes.bool,
	boldText: PropTypes.bool,
	avenir_book: PropTypes.bool,
	avenir_heavy: PropTypes.bool,
	avenir_black: PropTypes.bool,
	avenir_medium: PropTypes.bool,
	avenir_roman: PropTypes.bool,
	mt: PropTypes.number,
	mb: PropTypes.number,
	ml: PropTypes.number,
	mr: PropTypes.number,
	align: PropTypes.string
};
export default Label;

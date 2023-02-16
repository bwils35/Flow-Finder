import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { colors } from "../utils/colors";

export const Focus = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Focus Feature</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.darkBlue,
	},
	text: {
		color: colors.white,
	},
});

import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { RoundedButton } from "./rounded-button.component";

export const Nav = () => {
	return (
		<View>
			<RoundedButton
				size={40}
				title="Back"
				onPress={() => {
					console.log("Navigate!");
				}}
			/>
		</View>
	);
};

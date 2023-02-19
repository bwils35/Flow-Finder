import React from "react";
import { View, StyleSheet } from "react-native";

import { RoundedButton } from "./rounded-button.component";

interface ITimingProps {
	onChangeTime: (minutes: number) => void;
}

export const Timing = ({ onChangeTime }: ITimingProps) => {
	return (
		<>
			<View style={styles.timingButton}>
				<RoundedButton
					size={50}
					title="10"
					onPress={() => onChangeTime(10)}
				/>
			</View>
			<View style={styles.timingButton}>
				<RoundedButton
					size={50}
					title="15"
					onPress={() => onChangeTime(15)}
				/>
			</View>
			<View style={styles.timingButton}>
				<RoundedButton
					size={50}
					title="30"
					onPress={() => onChangeTime(30)}
				/>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	timingButton: {
		flex: 1,
		alignItems: "center",
	},
});

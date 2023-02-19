import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { colors } from "../utils/colors";
import { spacing, fontSizes } from "../utils/sizes";
import { RoundedButton } from "../components/rounded-button.component";

export const About = ({ navigation }: any) => {
	return (
		<>
			<View style={styles.navContainer}>
				<RoundedButton
					size={40}
					title="Back"
					onPress={() => navigation.goBack()}
				/>
			</View>
			<View style={styles.infoContainer}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>About</Text>
				</View>
				<View style={styles.subtitleContainer}>
					<Text style={styles.subtitle}>Pomodoro</Text>
					<Text style={styles.body}>
						The Pomodoro Technique is a time management strategy
						that helps people increase their productivity and focus
						on their work. The technique involves breaking your work
						into timed intervals called "Pomodoros". During each
						Pomodoro, you focus on one specific task and work on it
						without interruptions or distractions. After the
						Pomodoro is complete, you take a short break of 5
						minutes, then start another Pomodoro. After every four
						Pomodoros, you take a longer break of 15-30 minutes.
						This longer break is an opportunity to rest, recharge,
						and reflect on your progress.
					</Text>
					<Text style={styles.body}>
						The main idea behind the Pomodoro Technique is that by
						focusing on one task for a short, intense period of
						time, you can be more productive and efficient than if
						you were trying to work on multiple things at once or
						for long, uninterrupted stretches. Additionally, the
						regular breaks help you avoid burnout and maintain your
						energy and motivation.
					</Text>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	navContainer: {
		marginTop: spacing.lg,
		paddingLeft: spacing.md,
	},
	infoContainer: {
		flex: 0.9,
		alignItems: "center",
		justifyContent: "center",
	},
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		marginBottom: spacing.lg,
		paddingBottom: spacing.sm,
	},
	title: {
		fontSize: fontSizes.lg,
		fontWeight: "bold",
		color: colors.black,
	},
	subtitleContainer: {},
	subtitle: {
		fontSize: fontSizes.md,
		fontWeight: "bold",
		color: colors.black,
		paddingTop: spacing.md,
		paddingLeft: spacing.md,
	},
	body: {
		fontSize: fontSizes.md,
		color: colors.black,
		padding: spacing.md,
	},
});

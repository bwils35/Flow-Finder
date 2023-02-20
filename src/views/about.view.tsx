import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	ScrollView,
	Dimensions,
	Linking,
} from "react-native";

import { colors } from "../utils/colors";
import { spacing, fontSizes } from "../utils/sizes";

export const About = ({ navigation }: any) => {
	return (
		<View style={styles.container}>
			<View style={styles.navContainer}>
				<View style={styles.backButton}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Image
							source={require("../../assets/icons/back-arrow.png")}
							style={{ height: 40, width: 40 }}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>About</Text>
				</View>
			</View>
			<View style={styles.infoContainer}>
				<ScrollView
					persistentScrollbar={true}
					horizontal={true}
					pagingEnabled={true}
				>
					<View style={styles.textOuter}>
						<Text style={styles.subtitle}>Pomodoro:</Text>
						<Text style={styles.textBody}>
							The Pomodoro Technique is a time management strategy
							that helps people increase their productivity and
							focus on their work. The technique involves breaking
							your work into timed intervals called "Pomodoros".
							During each Pomodoro, you focus on one specific task
							and work on it without interruptions or
							distractions. After the Pomodoro is complete, you
							take a short break of 5 minutes, then start another
							Pomodoro. After every four Pomodoros, you take a
							longer break of 15-30 minutes. This longer break is
							an opportunity to rest, recharge, and reflect on
							your progress.
						</Text>
						<Text style={styles.textBody}>
							The main idea behind the Pomodoro Technique is that
							by focusing on one task for a short, intense period
							of time, you can be more productive and efficient
							than if you were trying to work on multiple things
							at once or for long, uninterrupted stretches.
							Additionally, the regular breaks help you avoid
							burnout and maintain your energy and motivation.
						</Text>
					</View>
					<View style={styles.textOuter}>
						<Text style={styles.subtitle}>Changelog:</Text>
						<Text style={styles.changelogText}>
							- Created a welcome and about screen
						</Text>
						<Text style={styles.changelogText}>
							- New UI design
						</Text>
						<Text style={styles.changelogText}>
							- Added break timer
						</Text>
						<Text style={styles.changelogText}>
							- Added time spent to "Things we've focused on"
						</Text>
					</View>
				</ScrollView>
			</View>
			<View style={styles.footer}>
				<Text style={styles.footerText}>Made with ❤️ by</Text>
				<TouchableOpacity
					onPress={() => Linking.openURL("https://bwilsoncodes.com")}
				>
					<Text style={styles.linkText}>Bradley Wilson</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	navContainer: {
		marginTop: spacing.lg,
		paddingLeft: spacing.md,
		marginBottom: spacing.xl,
		flexDirection: "row",
		alignItems: "center",
	},
	infoContainer: {
		justifyContent: "center",
	},
	titleContainer: {
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: spacing.xxxl,
	},
	title: {
		fontSize: fontSizes.lg,
		fontWeight: "bold",
	},
	backButton: {
		marginRight: 36,
	},
	subtitle: {
		fontSize: fontSizes.md,
		fontWeight: "bold",
		color: colors.black,
		padding: spacing.md,
	},
	textBody: {
		fontSize: fontSizes.md,
		color: colors.black,
		padding: spacing.md,
	},
	changelogText: {
		fontSize: fontSizes.md,
		padding: spacing.md,
	},
	textOuter: {
		width: Dimensions.get("window").width,
	},
	textOuter2: {
		justifyContent: "center",
	},
	footer: {
		marginTop: 70,
		alignItems: "center",
		justifyContent: "flex-end",
		flexDirection: "column",
	},
	footerText: {
		fontSize: fontSizes.md,
	},
	linkText: {
		textDecorationLine: "underline",
		fontSize: fontSizes.md,
	},
});

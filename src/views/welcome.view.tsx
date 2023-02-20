import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { RoundedButton } from "../components/rounded-button.component";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";

export const Home = ({ navigation }: any) => {
	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Welcome to Flow Finder</Text>
			</View>
			<View style={styles.inputContainer}>
				<View style={styles.buttonContainer}>
					<RoundedButton
						title="Let's focus"
						size={150}
						onPress={() => {
							navigation.navigate("Main");
						}}
						mode="contained"
						textStyle={{ fontSize: 20 }}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<RoundedButton
						size={50}
						title="?"
						onPress={() => navigation.navigate("About")}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	titleContainer: {
		marginBottom: spacing.xxxl,
		// flex: 0.1,
	},
	title: {
		fontSize: spacing.lg,
		fontWeight: "bold",
		color: colors.black,
	},
	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	buttonContainer: {
		// padding: spacing.lg,
		alignItems: "center",
		marginBottom: spacing.lg,
	},
});

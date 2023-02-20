import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { RoundedButton } from "../components/rounded-button.component";
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";

export const Home = ({ navigation }: any) => {
	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Flow Finder</Text>
				<Image
					source={require("../../assets/icons/flow.png")}
					style={styles.image}
				/>
			</View>
			<View style={styles.inputContainer}>
				<View style={styles.buttonContainer}>
					<RoundedButton
						title="Get Started"
						size={150}
						onPress={() => {
							navigation.navigate("Main");
						}}
						mode="contained"
						textStyle={{ fontSize: 20 }}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						onPress={() => navigation.navigate("About")}
					>
						<Image
							source={require("../../assets/icons/info.png")}
						/>
					</TouchableOpacity>
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
		alignItems: "center",
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
		alignItems: "center",
		marginBottom: spacing.lg,
	},
	image: {
		marginTop: spacing.xl,
		marginBottom: spacing.xl,
	},
});

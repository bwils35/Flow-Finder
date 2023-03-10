import React from "react";
import {
	Text,
	View,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Image,
} from "react-native";

import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

interface IFocusHistoryProps {
	history: string[];
	navigation: any;
}

export const FocusHistory = ({ history, navigation }: IFocusHistoryProps) => {
	if (!history || !history.length)
		return (
			<>
				<View style={styles.container}>
					<Text style={styles.title}>
						Click the plus button to find your flow!
					</Text>
				</View>
				<View style={styles.aboutButton}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Image
							source={require("../../assets/icons/back-arrow.png")}
						/>
					</TouchableOpacity>
				</View>
			</>
		);

	const renderItem = ({ item }: any) => (
		<Text style={styles.item}>{item}</Text>
	);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Things we've focused on: </Text>
			<FlatList data={history} renderItem={renderItem} />
			<View style={styles.aboutButton}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Image
						source={require("../../assets/icons/back-arrow.png")}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: spacing.lg,
		flex: 0.9,
	},
	aboutButton: {
		padding: spacing.lg,
		alignItems: "center",
		marginBottom: spacing.lg,
		flex: 0.001,
	},
	title: {
		color: colors.black,
		fontSize: fontSizes.md,
		fontWeight: "bold",
	},
	item: {
		fontSize: fontSizes.md,
		color: colors.black,
		paddingTop: spacing.sm,
	},
});

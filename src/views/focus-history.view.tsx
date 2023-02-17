import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

import { RoundedButton } from "../components/rounded-button.component";

interface IFocusHistoryProps {
	history: string[];
}

export const FocusHistory = ({ history }: IFocusHistoryProps) => {
	if (!history || !history.length)
		return (
			<View style={styles.container}>
				<Text style={styles.title}>
					Click the plus button to find your flow!
				</Text>
			</View>
		);

	const renderItem = ({ item }: any) => (
		<Text style={styles.item}>- {item}</Text>
	);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Things we've focused on: </Text>
			<FlatList data={history} renderItem={renderItem} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: spacing.lg,
		flex: 1,
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

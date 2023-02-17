import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";
import { RoundedButton } from "../components/rounded-button.component";

interface IFocusProps {
	addSubject: (subject: string | null) => void;
}

export const Focus = ({ addSubject }: IFocusProps) => {
	const [subject, setSubject] = useState<string>("");

	return (
		<TouchableOpacity>
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						onChangeText={setSubject}
						label="What would you like to focus on?"
						style={styles.textInput}
						mode="outlined"
						outlineColor={colors.black}
						activeOutlineColor={colors.black}
					/>
					<View style={styles.button}>
						<RoundedButton
							title="+"
							size={50}
							onPress={() => addSubject(subject)}
							mode="outlined"
						/>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {},
	inputContainer: {
		padding: spacing.lg,
		justifyContent: "flex-start",
		flexDirection: "row",
	},
	button: {
		justifyContent: "center",
	},
	text: {
		color: colors.black,
	},
	textInput: {
		backgroundColor: colors.background,
		flex: 1,
		marginRight: spacing.sm,
		color: colors.black,
		fontSize: spacing.md,
		fontWeight: "700",
	},
});

import React, { useContext, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-paper";

import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";
import { useIsFocused } from "@react-navigation/native";
import { appContext } from "../context/context";

interface IFocusProps {
	navigation: any;
}

export const Focus = ({ navigation }: IFocusProps) => {
	const { subject, setSubject, setCurrentSubject } = useContext(appContext);

	const isFocused = useIsFocused();

	useEffect(() => {
		if (isFocused) {
			setSubject("");
			setCurrentSubject("");
		}
	}, [isFocused]);

	return (
		<>
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						value={subject}
						onChangeText={(e) => setSubject(e)}
						label="What would you like to focus on?"
						style={styles.textInput}
						mode="outlined"
						outlineColor={colors.black}
						activeOutlineColor={colors.black}
					/>
					<View style={styles.button}>
						<TouchableOpacity
							onPress={() => {
								if (!subject)
									return alert("Please enter a subject!");
								setCurrentSubject(subject);
								navigation.navigate("Timer");
							}}
						>
							<Image
								source={require("../../assets/icons/plus.png")}
								style={{ width: 40, height: 40 }}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</>
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

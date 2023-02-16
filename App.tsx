import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";

import { colors } from "./src/utils/colors";
import { Focus } from "./src/features/focus";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Focus />
			<StatusBar style="auto" hidden={true} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.darkBlue,
	},
});

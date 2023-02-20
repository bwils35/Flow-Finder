import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import { colors } from "./src/utils/colors";
import ContextProvider from "./src/context/context";
import { Screens } from "./src/components/navigation/screens";

export default function App() {
	return (
		<ContextProvider>
			<NavigationContainer>
				<SafeAreaView style={styles.container}>
					<Screens />
					<StatusBar style="auto" hidden={true} />
				</SafeAreaView>
			</NavigationContainer>
		</ContextProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.background,
		flex: 1,
	},
});

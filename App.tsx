import React from "react";

import ContextProvider from "./src/context/context";
import { Screens } from "./src/components/navigation/screens";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
	return (
		<ContextProvider>
			<NavigationContainer>
				<SafeAreaView style={{ flex: 1 }}>
					<Screens />
					<StatusBar style="auto" hidden={true} />
				</SafeAreaView>
			</NavigationContainer>
		</ContextProvider>
	);
}

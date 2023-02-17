import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { colors } from "./src/utils/colors";
import { Focus } from "./src/views/focus.view";
import { Timer } from "./src/views/timer.view";
import { FocusHistory } from "./src/views/focus-history.view";
import { About } from "./src/views/about.view";

export default function App() {
	const [currentSubject, setCurrentSubject] = useState<string>("");
	const [history, setHistory] = useState<string[]>([]);

	const onSetCurrentSubject = (subject: string) => {
		if (!subject.length) {
			alert("Please enter a subject!");
			return;
		}
		setCurrentSubject(subject);
	};

	return (
		<SafeAreaView style={styles.container}>
			{!currentSubject ? (
				<>
					{/* <Focus addSubject={onSetCurrentSubject} />
					<FocusHistory history={history} /> */}
					<About />
				</>
			) : (
				<Timer
					focusSubject={currentSubject}
					onTimerEnd={(subject) => setHistory([...history, subject])}
					clearSubject={() => setCurrentSubject("")}
				/>
			)}
			<StatusBar style="auto" hidden={true} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
});

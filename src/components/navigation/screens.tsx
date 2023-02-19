import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { About } from "../../views/about.view";
import { Focus } from "../../views/focus.view";
import { FocusHistory } from "../../views/focus-history.view";
import { Timer } from "../../views/timer.view";
import { colors } from "../../utils/colors";
import { appContext } from "../../context/context";

const Stack = createNativeStackNavigator();

export const Screens = () => {
	const { currentSubject, history, setHistory, minutes } =
		useContext(appContext);

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: { backgroundColor: colors.background },
			}}
		>
			<Stack.Screen name="Home">
				{({ navigation }) => (
					<>
						<Focus navigation={navigation} />
						<FocusHistory
							history={history}
							navigation={navigation}
						/>
					</>
				)}
			</Stack.Screen>
			<Stack.Screen name="Timer">
				{({ navigation }) => (
					<Timer
						originalTime={minutes}
						focusSubject={currentSubject}
						onTimerEnd={(subject, originalTime) => {
							const newHistory = `${subject}: ${originalTime} minutes`;
							setHistory([...history, newHistory]);
						}}
						navigation={navigation}
					/>
				)}
			</Stack.Screen>
			<Stack.Screen name="About">
				{({ navigation }) => <About navigation={navigation} />}
			</Stack.Screen>
		</Stack.Navigator>
	);
};

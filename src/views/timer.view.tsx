import React, { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { useKeepAwake } from "expo-keep-awake";

import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

import { appContext } from "../context/context";
import { TaskTimer } from "../components/timers/task-timer.component";
import { BreakTimer } from "../components/timers/break-timer.component";

interface ITimerProps {
	focusSubject: string;
	onTimerEnd: (subject: string, originalTime: number) => void;
	navigation: any;
	originalTime: number;
}

export const Timer = ({
	originalTime,
	focusSubject,
	onTimerEnd,
	navigation,
}: ITimerProps) => {
	useKeepAwake();

	const { setMinutes, breakTime, setBreakTime, setProgress, setIsStarted } =
		useContext(appContext);
	React.useContext(appContext);

	useEffect(() => {
		if (navigation.isFocused()) {
			setIsStarted(false);
			setBreakTime(false);
			setProgress(1);
			setMinutes(5);
		}
	}, [navigation]);

	return (
		<>
			{!breakTime ? (
				<TaskTimer
					originalTime={originalTime}
					focusSubject={focusSubject}
					onTimerEnd={onTimerEnd}
					navigation={navigation}
				/>
			) : (
				<BreakTimer
					focusSubject={focusSubject}
					navigation={navigation}
				/>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	text: {
		color: colors.black,
	},
	countdown: {
		flex: 0.5,
		alignItems: "center",
		justifyContent: "center",
	},
	timingWrapper: {
		flex: 0.1,
		paddingTop: spacing.xxl,
		justifyContent: "center",
		flexDirection: "row",
	},
	clearSubjectWrapper: {
		flexDirection: "row",
		justifyContent: "center",
		fontSize: fontSizes.md,
	},
	buttonWrapper: {
		flex: 0.3,
		flexDirection: "row",
		padding: spacing.md,
		justifyContent: "space-around",
		alignItems: "center",
	},
	title: {
		color: colors.black,
		textAlign: "center",
		fontWeight: "bold",
		fontSize: fontSizes.md,
	},
	task: {
		color: colors.black,
		textAlign: "center",
		fontSize: fontSizes.md,
	},
	progress: {
		height: 12,
		width: "100%",
		borderRadius: 5,
		backgroundColor: colors.background,
		overflow: "hidden",
	},
});

import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";

import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

import { Countdown } from "../components/countdown.component";
import { RoundedButton } from "../components/rounded-button.component";
import { Timing } from "../components/timing.component";
import { appContext } from "../context/context";

interface ITimerProps {
	focusSubject: string;
	onTimerEnd: (subject: string, originalTime: number) => void;
	navigation: any;
	originalTime: number;
}

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
	ONE_SECOND_IN_MS * 1,
	ONE_SECOND_IN_MS * 1,
	ONE_SECOND_IN_MS * 1,
	ONE_SECOND_IN_MS * 1,
	ONE_SECOND_IN_MS * 1,
];

export const Timer = ({
	originalTime,
	focusSubject,
	onTimerEnd,
	navigation,
}: ITimerProps) => {
	useKeepAwake();
	const [isStarted, setIsStarted] = useState(false);
	const [progress, setProgress] = useState(1);

	const { minutes, setMinutes } = React.useContext(appContext);

	const onEnd = (reset: () => void) => {
		Vibration.vibrate(PATTERN);

		setIsStarted(false);
		setProgress(1);
		reset();
		onTimerEnd(focusSubject, originalTime);
	};

	const incrementTime = () => {
		if (minutes === 55) return;
		setMinutes(minutes + 5);
	};
	const decrementTime = () => {
		if (minutes === 5) return;
		setMinutes(minutes - 5);
	};

	return (
		<View style={styles.container}>
			<View style={styles.countdown}>
				<Countdown
					minutes={minutes}
					isPaused={!isStarted}
					onProgress={setProgress}
					onEnd={onEnd}
				/>
				<View style={{ paddingTop: spacing.xxl }}>
					<Text style={styles.title}>Focusing on:</Text>
					<Text style={styles.task}>{focusSubject}</Text>
				</View>
			</View>

			<View style={{ paddingTop: spacing.sm }}>
				<ProgressBar
					progress={progress}
					style={styles.progress}
					color={colors.black}
				/>
			</View>

			{!isStarted && (
				<View style={styles.timingWrapper}>
					<Timing onChangeTime={setMinutes} />
				</View>
			)}

			{!isStarted ? (
				<View style={styles.buttonWrapper}>
					<RoundedButton
						title="- 5"
						size={50}
						onPress={decrementTime}
					/>
					<RoundedButton
						title="Start"
						onPress={() => setIsStarted(true)}
					/>
					<RoundedButton
						title="+ 5"
						size={50}
						onPress={incrementTime}
					/>
				</View>
			) : (
				<>
					<View style={styles.timingWrapper}></View>
					<View style={styles.buttonWrapper}>
						<RoundedButton
							title="Pause"
							onPress={() => setIsStarted(false)}
						/>
					</View>
				</>
			)}
			<View style={styles.clearSubjectWrapper}>
				<RoundedButton
					size={50}
					title="Back"
					onPress={() => {
						navigation.goBack();
					}}
				/>
			</View>
		</View>
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

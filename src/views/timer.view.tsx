import React, { useContext, useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	Vibration,
	TouchableOpacity,
	Image,
} from "react-native";
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
	0.5 * ONE_SECOND_IN_MS,
	1 * ONE_SECOND_IN_MS,
	0.5 * ONE_SECOND_IN_MS,
	1 * ONE_SECOND_IN_MS,
	0.5 * ONE_SECOND_IN_MS,
	1 * ONE_SECOND_IN_MS,
];

export const Timer = ({
	originalTime,
	focusSubject,
	onTimerEnd,
	navigation,
}: ITimerProps) => {
	useKeepAwake();

	const { isStarted, setIsStarted } = useContext(appContext);

	const {
		minutes,
		setMinutes,
		breakTime,
		setBreakTime,
		progress,
		setProgress,
	} = React.useContext(appContext);

	const onEnd = (setBreakTimer: () => void) => {
		Vibration.vibrate(PATTERN);
		setBreakTime(true);

		setIsStarted(false);
		setProgress(1);
		setBreakTimer();
		onTimerEnd(focusSubject, originalTime);
	};

	const onBreakEnd = (reset: () => void) => {
		Vibration.vibrate(PATTERN);

		setIsStarted(false);
		setBreakTime(false);
		setProgress(1);
		reset();
	};

	const incrementTime = () => {
		if (minutes === 55) return;
		setMinutes(minutes + 5);
	};
	const decrementTime = () => {
		if (minutes === 5) return;
		setMinutes(minutes - 5);
	};

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
				<View style={styles.container}>
					<View style={styles.countdown}>
						<Countdown
							minutes={minutes}
							isPaused={!isStarted}
							onProgress={setProgress}
							onEnd={onEnd}
							onBreakEnd={onBreakEnd}
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
						<TouchableOpacity onPress={() => navigation.goBack()}>
							<Image
								source={require("../../assets/icons/back-arrow.png")}
							/>
						</TouchableOpacity>
					</View>
				</View>
			) : (
				<View style={styles.container}>
					<View style={styles.countdown}>
						<Countdown
							minutes={minutes}
							isPaused={!isStarted}
							onProgress={setProgress}
							onEnd={onEnd}
							onBreakEnd={onBreakEnd}
						/>
						<View style={{ paddingTop: spacing.xxl }}>
							<Text style={styles.title}>Completed: </Text>
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
							<Text style={styles.title}>
								Start a 5 minute break?
							</Text>
						</View>
					)}
					{!isStarted ? (
						<View style={styles.buttonWrapper}>
							<RoundedButton
								title="Start"
								onPress={() => setIsStarted(true)}
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
						<TouchableOpacity
							onPress={() => {
								navigation.goBack();
							}}
						>
							<Image
								source={require("../../assets/icons/back-arrow.png")}
							/>
						</TouchableOpacity>
					</View>
				</View>
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

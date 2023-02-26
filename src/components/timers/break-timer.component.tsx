import React from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	Image,
	Vibration,
	Alert,
} from "react-native";
import { ProgressBar } from "react-native-paper";

import { Countdown } from "../countdown.component";
import { RoundedButton } from "../rounded-button.component";
import { colors } from "../../utils/colors";
import { fontSizes, spacing } from "../../utils/sizes";
import { appContext } from "../../context/context";

interface ITimerProps {
	focusSubject: string;
	navigation: any;
}

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
	0.5 * ONE_SECOND_IN_MS,
	1 * ONE_SECOND_IN_MS,
	0.5 * ONE_SECOND_IN_MS,
	1 * ONE_SECOND_IN_MS,
	0.5 * ONE_SECOND_IN_MS,
	1 * ONE_SECOND_IN_MS,
	1 * ONE_SECOND_IN_MS,
];

export const BreakTimer = ({ focusSubject, navigation }: ITimerProps) => {
	const {
		minutes,
		setBreakTime,
		progress,
		setProgress,
		isStarted,
		setIsStarted,
	} = React.useContext(appContext);

	const onBreakEnd = async (reset: () => void) => {
		Vibration.vibrate(PATTERN, true);

		const newTask = await createAlert();

		if (!newTask) {
			Vibration.cancel();
			setIsStarted(false);
			setBreakTime(false);
			setProgress(1);
			reset();
		} else {
			Vibration.cancel();
			setIsStarted(false);
			setBreakTime(false);
			setProgress(1);

			navigation.goBack();
		}
	};

	const createAlert = async () => {
		return new Promise((resolve, reject) => {
			Alert.alert(
				"Break Complete!",
				"Start a new task or repeat the previous one?",
				[
					{
						text: "Repeat",
						onPress: () => resolve(false),
						style: "cancel",
					},
					{
						text: "New",
						onPress: () => resolve(true),
						style: "destructive",
					},
				],
				{ cancelable: false }
			);
		});
	};

	return (
		<View style={styles.container}>
			<View style={styles.countdown}>
				<Countdown
					minutes={minutes}
					isPaused={!isStarted}
					onProgress={setProgress}
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
					<Text style={styles.title}>Break Time!</Text>
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
						source={require("../../../assets/icons/back-arrow.png")}
					/>
				</TouchableOpacity>
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

import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

const minutesToMilliseconds = (min: number) => min * 1000 * 60;

// if the time remaining is < 10 seconds, add a 0 to the front
const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

export interface ICountdownProps {
	minutes?: number;
	isPaused: boolean;
	onProgress: (progress: number) => void;
	onEnd: (reset: () => void) => void;
}

export const Countdown = ({
	minutes,
	isPaused,
	onProgress,
	onEnd,
}: ICountdownProps) => {
	const interval = React.useRef(null);

	const [milliseconds, setMilliseconds] = useState<number>(null);

	const reset = () => setMilliseconds(minutesToMilliseconds(minutes));

	const countDown = () => {
		setMilliseconds((time) => {
			if (time === 0) {
				clearInterval(interval.current);
				onEnd(reset);
				return time;
			}
			const timeLeft = time - 1000;
			return timeLeft;
		});
	};

	useEffect(() => {
		setMilliseconds(minutesToMilliseconds(minutes));
	}, [minutes]);

	useEffect(() => {
		onProgress(milliseconds / minutesToMilliseconds(minutes));
	}, [milliseconds]);

	useEffect(() => {
		if (isPaused) {
			if (interval.current) clearInterval(interval.current);
			return;
		}

		interval.current = setInterval(countDown, 1000);

		return () => clearInterval(interval.current);
	}, [isPaused]);

	const minute = Math.floor(milliseconds / 1000 / 60) % 60;
	const seconds = Math.floor(milliseconds / 1000) % 60;
	return (
		<Text style={styles.text}>
			{formatTime(minute)}:{formatTime(seconds)}
		</Text>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: fontSizes.xxxl,
		fontWeight: "bold",
		color: colors.background,
		paddingVertical: spacing.sm,
		paddingHorizontal: spacing.md,
		backgroundColor: colors.black,
		borderRadius: 10,
		overflow: "hidden",
		textShadowColor: colors.black,
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 5,
	},
});

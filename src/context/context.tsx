import React, { useState } from "react";

export const appContext = React.createContext(null);

export default function AppContext({ children }: any) {
	const [subject, setSubject] = useState<string>("");
	const [currentSubject, setCurrentSubject] = useState<string>("");
	const [history, setHistory] = useState<string[]>([]);
	const [minutes, setMinutes] = useState<number>(5);
	const [breakTime, setBreakTime] = useState(false);
	const [progress, setProgress] = useState(1);
	const [milliseconds, setMilliseconds] = useState<number>(null);
	const [isStarted, setIsStarted] = useState(false);

	const state = {
		subject,
		currentSubject,
		history,
		minutes,
		setSubject,
		setCurrentSubject,
		setHistory,
		setMinutes,
		breakTime,
		setBreakTime,
		progress,
		setProgress,
		milliseconds,
		setMilliseconds,
		isStarted,
		setIsStarted,
	};

	return <appContext.Provider value={state}>{children}</appContext.Provider>;
}

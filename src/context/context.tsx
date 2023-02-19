import React, { useState } from "react";

export const appContext = React.createContext(null);

export default function AppContext({ children }: any) {
	const [subject, setSubject] = useState<string>("");
	const [currentSubject, setCurrentSubject] = useState<string>("");
	const [history, setHistory] = useState<string[]>([]);
	const [minutes, setMinutes] = useState<number>(5);

	const state = {
		subject,
		currentSubject,
		history,
		minutes,
		setSubject,
		setCurrentSubject,
		setHistory,
		setMinutes,
	};

	return <appContext.Provider value={state}>{children}</appContext.Provider>;
}

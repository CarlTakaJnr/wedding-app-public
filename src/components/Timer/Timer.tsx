import React, { useState, useEffect } from "react";

interface TimerProps {
	targetDate: Date;
}

const Timer: React.FC<TimerProps> = ({ targetDate }) => {
	const calculateTimeLeft = () => {
		const now = new Date().getTime();
		const difference = targetDate.getTime() - now;

		return difference > 0 ? Math.floor(difference / (1000 * 60 * 60 * 24)) : 0;
	};

	const [daysLeft, setDaysLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setDaysLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

	return (
		<span>
			{daysLeft > 0 ? `${daysLeft} DAYS TO GO!` : "It's the Wedding Day!!"}
		</span>
	);
};

export default Timer;

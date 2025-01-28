import React from "react";
import TimelineCard from "components/TimelineCard/TimelineCard";
import SectionTitle from "components/SectionTitle/SectionTitle";
import "./OurStory.css";
const OurStory = () => {
	return (
		<div>
			<SectionTitle title="Our Story" />
			<div className="our-story-container">
				<div className="timelineContainerContainer">
					<TimelineCard
						url="https://i.imgur.com/H58ysaY.jpeg"
						alt="First Time We Met"
						title="First Time We Met"
						date="15 March, 2019"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					/>
					<TimelineCard
						url="https://i.imgur.com/1vwEZ0V.jpeg"
						alt="First Date"
						title="First Date"
						date="19 September, 2020"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					/>
					<TimelineCard
						url="https://i.imgur.com/iHGrVYI.jpeg"
						alt="Long Distance Start"
						title="Long Distance Start"
						date="3 October, 2020"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					/>
					<TimelineCard
						url="https://i.imgur.com/JEKiZei.jpeg"
						alt="Reunited At Last"
						title="Reunited At Last"
						date="14 May, 2022"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					/>
					<TimelineCard
						url="https://i.imgur.com/5MTz3Ro.jpeg"
						alt="Adventures In Between"
						title="Adventures In Between"
						date="29 October, 2023"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					/>
					<TimelineCard
						url="https://i.imgur.com/9x27enD.jpeg"
						alt="Engagement"
						title="Engagement"
						date="11 March, 2024"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					/>
					<div
						className="timelineContent"
						style={{
							marginTop: "50px",
							textAlign: "center",
							maxWidth: "1000px",
						}}
					>
						<h2 className="timelineTitle">Coming Soon: Married Life</h2>
						<div className="timelineStory">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurStory;

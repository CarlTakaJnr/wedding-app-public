import React from "react";
import "./TimelineCard.css";

interface TimelineCardProps {
	url: string;
	alt: string;
	title: string;
	date: string;
	description: string;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
	url,
	alt,
	title,
	date,
	description,
}) => (
	<div className="timelineContainer">
		<figure className="timelineImage">
			<img src={url} alt={alt} />
		</figure>
		<div className="timelineContent">
			<h2 className="timelineTitle">{title}</h2>
			<h2 className="timelineDate">{date}</h2>
			<div className="timelineStory">{description}</div>
		</div>
		<div className="timelineDot"></div>
	</div>
);

export default TimelineCard;

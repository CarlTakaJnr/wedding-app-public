import React from "react";
import SectionTitle from "components/SectionTitle/SectionTitle";
import "./Schedule.css";

const Schedule: React.FC = () => {
	return (
		<div className="schedule-container">
			<SectionTitle title="Order Of Events" />

			<table className="eventsTable">
				<tbody>
					<tr>
						<td>11:30 am</td>
						<td>Guest Arrival</td>
					</tr>
					<tr>
						<td>12:00 pm</td>
						<td>Ceremony</td>
					</tr>
					<tr>
						<td>12:45 pm</td>
						<td>Photos & Mingle</td>
					</tr>
					<tr>
						<td>2:00 pm</td>
						<td>Lunch</td>
					</tr>
					<tr>
						<td>2:30 pm</td>
						<td>Cake</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Schedule;

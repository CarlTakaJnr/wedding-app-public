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
						<td>12:30 pm</td>
						<td>Ceremony</td>
					</tr>
					<tr>
						<td>1:00 pm</td>
						<td>Photos</td>
					</tr>
					<tr>
						<td>1:30 pm</td>
						<td>Lunch</td>
					</tr>
					<tr>
						<td>2:30 pm</td>
						<td>Toasts & Cake Cutting</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Schedule;

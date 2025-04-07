import React from "react";
import "./FAQ.css";
import ItemList from "components/ItemList/ItemList";
import SectionTitle from "components/SectionTitle/SectionTitle";

const FAQ = () => {
	return (
		<div className="QA-container">
			<SectionTitle title="FAQ" />
			<ItemList>
				<h3>Can I bring a guest?</h3>
				<p>
					We have a limited number of seats, so plus ones are not included
					unless specified.
				</p>
				<h3>What should I wear?</h3>
				<p>The dress code is semi-formal. Feel free to dress up!</p>

				<h3>How do I get to the venue?</h3>
				<p>
					The venue is a 10-minute walk from the central train station. The
					nearest bus stop is on Main Street, which is a bit further. There is
					also plenty of off-site parking if you are driving.
				</p>

				<h3>Is the ceremony indoors or outdoors?</h3>
				<p>
					The ceremony will be outdoors. If the weather is bad, it will be moved
					indoors.
				</p>

				<h3>What if I can't attend?</h3>
				<p>No worries! We can always catch up another time.</p>

				<h3>Who should I contact if I have questions?</h3>
				<p>
					Please reach out to our main point of contact for the event. De'Arna's
					mobile number is 0224593093 for any questions related to the wedding.
				</p>
			</ItemList>
		</div>
	);
};

export default FAQ;

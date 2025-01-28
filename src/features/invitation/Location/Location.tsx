import React from "react";
import SectionTitle from "components/SectionTitle/SectionTitle";
import "./Location.css";

const Location = () => {
	return (
		<div className="location-box">
			<SectionTitle title="Location" />
			<div className="location-container">
				<div className="iframe-container">
					<iframe
						title="Wedding Ceremony Location"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.7506262369034!2d174.762191!3d-36.848448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47f06d4bdc25%3A0x2d1b5c380ad9387!2sSky%20Tower!5e0!3m2!1sen!2snz!4v1738059693650!5m2!1sen!2snz"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
				<div className="location-details">
					<h2>Event Venue</h2>
					<h3>123 Example Street, City, Country</h3>
				</div>
			</div>
		</div>
	);
};

export default Location;

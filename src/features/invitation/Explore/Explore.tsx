import React from "react";
import SectionTitle from "components/SectionTitle/SectionTitle";
import ItemList from "components/ItemList/ItemList";
import "./Explore.css";

const Explore = () => {
	return (
		<div className="explore-container">
			<SectionTitle title="Discover the City" />
			<ItemList title="Top Restaurants">
				<h3>Restaurant A</h3>
				<p>123 Main Street, City Center, City 12345, Country</p>

				<h3>Restaurant B</h3>
				<p>456 Another Street, Suburb, City 67890, Country</p>

				<h3>Restaurant C</h3>
				<p>789 Different Road, Downtown, City 11223, Country</p>

				<h3>Restaurant D</h3>
				<p>101 High Street, Uptown, City 44556, Country</p>

				<h3>Restaurant E</h3>
				<p>202 Low Street, Midtown, City 77889, Country</p>

				<h3>Restaurant F</h3>
				<p>303 Side Street, Old Town, City 99000, Country</p>

				<h3>Restaurant G</h3>
				<p>404 Hidden Lane, New Town, City 12345, Country</p>
			</ItemList>
			<ItemList title="Activities">
				<h3>Activity A</h3>
				<p>Location A, City 12345, Country</p>

				<h3>Activity B</h3>
				<p>Location B, City 67890, Country</p>

				<h3>Activity C</h3>
				<p>Location C, City 11223, Country</p>

				<h3>Activity D</h3>
				<p>Location D, City 44556, Country</p>

				<h3>Activity E</h3>
				<p>Location E, City 77889, Country</p>
			</ItemList>
		</div>
	);
};

export default Explore;

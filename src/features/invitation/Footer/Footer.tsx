import React from "react";
import SectionTitle from "components/SectionTitle/SectionTitle";

const Footer = () => {
	const title = {
		backgroundColor: "#faede0",
		padding: "100px 0",
	};
	return (
		<div style={title}>
			<SectionTitle title="With Love, Alex & Jamie" />
		</div>
	);
};

export default Footer;

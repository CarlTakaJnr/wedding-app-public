import React from "react";

interface SectionTitleProps {
	title: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
	const style: React.CSSProperties = {
		maxWidth: "380px",
		width: "100%",
		color: "#25323d",
		fontSize: "3.5rem",
		backgroundImage: `url("https://i.imgur.com/2noIKsb.png")`,
		backgroundSize: "80% auto",
		backgroundPosition: "bottom center",
		backgroundRepeat: "no-repeat",
		padding: "0px 70px 80px 70px",
		fontWeight: "400",
	};

	const containerDiv: React.CSSProperties = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		margin: "50px auto",
	};

	return (
		<div style={containerDiv}>
			<h1 style={style}>{title}</h1>
		</div>
	);
};

export default SectionTitle;

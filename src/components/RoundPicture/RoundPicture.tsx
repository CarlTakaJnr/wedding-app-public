import React from "react";

interface RoundPictureProps {
	url: string;
	radius: number;
	alt: string;
}

const RoundPicture: React.FC<RoundPictureProps> = ({ url, radius, alt }) => {
	const style: React.CSSProperties = {
		width: radius * 2,
		height: radius * 2,
		borderRadius: "50%",
		objectFit: "cover",
	};

	return <img src={url} alt={alt} style={style} />;
};

export default RoundPicture;

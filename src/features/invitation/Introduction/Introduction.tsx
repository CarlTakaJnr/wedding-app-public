import React from "react";
import RoundPicture from "../../../components/RoundPicture/RoundPicture";
import "./Introduction.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Introduction = () => {
	const title = (
		<>
			Meet the
			<br /> Couple
		</>
	);
	return (
		<div className="introduction">
			<SectionTitle title={title} />
			<div className="introduction-profile">
				<RoundPicture
					url="https://i.imgur.com/BhspLmv.jpeg"
					radius={125}
					alt="Alex & Jamie's Engagement Photo"
				/>
				<p></p>
				<p>
					Hello! We're Alex and Jamie. Our journey began in 2019 during a social
					league at university, where we discovered a shared love for sports and
					competition. Fast forward to today, and that competitive streak is
					alive and well—especially during family game nights, which can quickly
					escalate into a battle for ultimate bragging rights!
				</p>
				<p>
					Alex is known as the “travel enthusiast” because Jamie handles all the
					trip planning, while Jamie proudly claims the title of “navigator”
					since long drives and their spotless driving record don’t quite go
					hand-in-hand.
				</p>
				<p>
					Beyond our playful rivalry, we share a passion for food hunting, from
					trying out new cuisines to exploring local markets. We’re also big on
					hiking and exploring the outdoors—though the competition doesn’t stop
					there either!
				</p>
				<p>
					Through the years, we’ve created countless memories, including that
					one time we showed up at the airport a whole 24 hours early for our
					flight. Let’s just say we became very familiar with the security staff
					that day!
				</p>
				<p>
					Alex is the spontaneous go-getter and comedian, while Jamie brings
					strength, focus, and creativity to the mix. Together, we balance each
					other perfectly—organized meets free-spirited, and every moment
					becomes an adventure.
				</p>
				<p>
					We’re so excited to celebrate this next chapter with all of you, and
					we can’t wait to see you on the big day!
				</p>
			</div>
		</div>
	);
};

export default Introduction;

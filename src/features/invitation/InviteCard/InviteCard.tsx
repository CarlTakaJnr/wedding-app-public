import React, { useState } from "react";
import { db } from "config/firebase";
import { doc, updateDoc } from "firebase/firestore";
import "./InviteCard.css";
import { useLocation } from "react-router-dom";
import Timer from "../../../components/Timer/Timer";

interface FirestoreDocument {
	AcceptedInvite: string;
	NumSeats?: number;
	Name?: string;
}

const InviteCard = ({
	firestoreDocument,
}: {
	firestoreDocument: FirestoreDocument;
}) => {
	const [acceptedInvite, setInviteStatus] = useState(
		firestoreDocument.AcceptedInvite
	);
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const location = useLocation();

	const handleClickedInviteButton = async (status: string) => {
		if (isButtonDisabled || status === acceptedInvite) return;

		setInviteStatus(status);
		setIsButtonDisabled(true);

		//comment these lines out if in a testing environment
		/*
		const docRef = doc(db, "Invitees", location.pathname);
		await updateDoc(docRef, { AcceptedInvite: status });
		*/

		setTimeout(() => {
			setIsButtonDisabled(false);
		}, 1000);
	};

	const numberSeats = firestoreDocument ? firestoreDocument.NumSeats : null;
	const targetDate = new Date();
	targetDate.setDate(targetDate.getDate() + 105); // 105 days from today

	const day = targetDate.getDate();
	const month = targetDate
		.toLocaleString("default", { month: "short" })
		.toUpperCase();
	const year = targetDate.getFullYear();

	return (
		<div className="invite-section-container">
			<div className="invite-section">
				<img src="https://i.imgur.com/zc6tj7k.png" alt="Invitation" />
				<div className="names">
					<h1>Alex & Jamie</h1>
				</div>
				<div className="date">{`${day} ${month} ${year}`} • CITY</div>
				<div className="timeTo">
					<Timer targetDate={targetDate} />
				</div>

				<div className="invite-text">
					<p>Hello {firestoreDocument ? firestoreDocument.Name : ""},</p>
					<br />
					<p>
						We are excited to invite you to our special day! Your presence would
						mean the world to us and we look forward to sharing this moment with
						you.
					</p>
					<p>
						<br />
						Please let us know if you can make it. For more information
						regarding this day, scroll through this website or reach out if you
						have questions.
					</p>
					{numberSeats && (
						<p>
							<br />
							Number of seats reserved for you: {numberSeats}
						</p>
					)}
				</div>

				<div className="RSVPButtons">
					<button
						onClick={() => handleClickedInviteButton("true")}
						className={acceptedInvite === "true" ? "activeButton" : ""}
						disabled={isButtonDisabled}
					>
						{acceptedInvite === "true" ? "Accepted" : "Accept Invite"}
					</button>

					<button
						onClick={() => handleClickedInviteButton("false")}
						className={acceptedInvite === "false" ? "activeButton" : ""}
						disabled={isButtonDisabled}
					>
						{acceptedInvite === "false" ? "Declined" : "Decline Invite"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default InviteCard;

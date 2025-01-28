import React, { useState, useEffect } from "react";
import { db } from "config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useLocation } from "react-router-dom";

import InviteCard from "features/invitation/InviteCard/InviteCard";
import OurStory from "features/invitation/OurStory/OurStory";
import Introduction from "features/invitation/Introduction/Introduction";
import Location from "features/invitation/Location/Location";
import Schedule from "features/invitation/Schedule/Schedule";
import Explore from "features/invitation/Explore/Explore";
import FAQ from "features/invitation/FAQ/FAQ";
import Footer from "features/invitation/Footer/Footer";
import ImageWall from "features/invitation/ImageWall/ImageWall";

import "./Invitation.css";

interface FirestoreDocument {
	AcceptedInvite: string;
	NumSeats?: number;
	Name?: string;
}

const mockFirestoreDocument: FirestoreDocument = {
	AcceptedInvite: "Yes",
	NumSeats: 2,
	Name: "John Doe",
};

const Invitation: React.FC = () => {
	const [document, setDocument] = useState<FirestoreDocument | null>(null);
	const location = useLocation();
	const isExample = true;

	useEffect(() => {
		const fetchData = async () => {
			if (isExample) {
				setDocument(mockFirestoreDocument);
			} else {
				const inviteId = location.pathname.split("/").pop();
				const docRef = doc(db, "Invitees", inviteId || "");
				const docSnap = await getDoc(docRef);

				if (docSnap.exists()) {
					setDocument(docSnap.data() as FirestoreDocument);
				} else {
					setDocument(null);
				}
			}
		};

		fetchData();
	}, [location.pathname, isExample]);

	if (document === null) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<InviteCard firestoreDocument={document} />
			<ImageWall />
			<Introduction />
			<OurStory />
			<Location />
			<Schedule />
			<Explore />
			<FAQ />
			<Footer />
		</div>
	);
};

export default Invitation;

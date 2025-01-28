import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "<YOUR-API-KEY>",
	authDomain: "<YOUR-AUTH-DOMAIN>",
	projectId: "<YOUR-PROJECT-ID>",
	storageBucket: "<YOUR-STORAGE-BUCKET>",
	messagingSenderId: "<YOUR-MESSAGING-SENDER-KEY>",
	appId: "<YOUR-APP-ID>",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

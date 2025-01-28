import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useParams,
	useMatch,
} from "react-router-dom";
import Invitation from "./pages/Invitation/Invitation";
import Home from "./pages/Home/Home";

function App() {
	return (
		<Router>
			<div className="Main">
				<Routes>
					<Route path="invite/:someString" element={<Invitation />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;

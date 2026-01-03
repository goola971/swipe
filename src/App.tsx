import "./App.scss";
// location
import { useLocation } from "react-router-dom";

// router
import { Routes, Route, Outlet } from "react-router-dom";

// components
import Header from "./components/header/header.tsx";
import Footer from "./components/footer/footer.tsx";
import Cookies from "./components/cookies/Cookies.tsx";

// pages
import Index from "./pages/index/index.tsx";
import Inscription from "./pages/inscription/inscription.tsx";
import Connexion from "./pages/connexion/connexion.tsx";
import Formations from "./pages/formations/formations.tsx";
import Profile from "./pages/profile/profile.tsx";
import Details from "./pages/details/details.tsx";
import PrivateRoute from "./components/privateroute.tsx"; 
import MonSuivis from "./pages/monSuivis/monSuivis.tsx";
import NosSalles from "./pages/nossalles/nossalles";
import Overview from "./pages/Admin/Overview/overview.tsx";

import Admin from "./pages/Admin/admin.tsx";

function App() {
	const { pathname } = useLocation();
	return (
		<>
			<Routes>
				<Route
					element={
						<>
							{pathname !== "/connexion" &&
								pathname !== "/admin" &&
								pathname !== "/inscription" && <Header />}

							<main>
								<Outlet />
							</main>
							<Cookies />
							{pathname !== "/connexion" &&
								pathname !== "/inscription" && <Footer />}
						</>
					}
				>
					<Route path="/" element={<Index />} />
					<Route path="/ressources" element={<Formations />} />
					<Route path="/connexion" element={<Connexion />} />
					<Route path="/inscription" element={<Inscription />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/suivi" element={<MonSuivis />} />
					<Route path="/nossalles" element={<NosSalles />} />
					<Route path="/overview" element={<Overview />} />

					{/* PROTECTION DE LA ROUTE PROFIL ICI */}
					<Route
						path="/profil"
						element={
							<PrivateRoute>
								<Profile />
							</PrivateRoute>
						}
					/>

					<Route path="/details" element={<Details />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;

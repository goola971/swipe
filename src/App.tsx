import "./App.scss";
// location
import { useLocation } from "react-router-dom";

// router
import { Routes, Route, Outlet } from "react-router-dom";

// components
import Header from "./components/header/header.tsx";
import Footer from "./components/footer/footer.tsx";
import Cookies from "./components/cookies/Cookies.tsx";
import PrivateRoute from "./components/privateroute.tsx"; //

// pages
import Index from "./pages/index/index.tsx";
import Inscription from "./pages/inscription/inscription.tsx";
import Connexion from "./pages/connexion/connexion.tsx";
import Formations from "./pages/formations/formations.tsx";
import Profile from "./pages/profile/profile.tsx";
import Details from "./pages/details/details.tsx";

function App() {
    const { pathname } = useLocation();
return (
        <>
            <Routes>
                <Route
                    element={
                        <>
                            {pathname !== "/connexion" && pathname !== "/inscription" && <Header />}
                            <main><Outlet /></main>
                            <Cookies />
                            {pathname !== "/connexion" && pathname !== "/inscription" && <Footer />}
                        </>
                    }
                >
                    <Route path="/" element={<Index />} />
                    <Route path="/ressources" element={<Formations />} />
                    <Route path="/connexion" element={<Connexion />} />
                    <Route path="/inscription" element={<Inscription />} />
                    
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
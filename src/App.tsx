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

function App() {
    const { pathname } = useLocation();
    return (
        <>
            <Routes>
                <Route
                    element={
                        <>
                            {pathname !== "/connexion" &&
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
                    <Route path="/about" element={<h1>A propos</h1>} />
                    <Route path="/plan" element={<h1>Plan</h1>} />
                    <Route path="/contact" element={<h1>Contact</h1>} />
                    <Route path="/connexion" element={<Connexion />} />
                    <Route path="/inscription" element={<Inscription />} />
                    <Route path="/profil" element={<Profile />} />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;

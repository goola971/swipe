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

function App() {
    return (
        <>
            <Routes>
                <Route
                    element={
                        <>
                            {/* si la page c'est connexion et inscription, pas de header */}
                            {useLocation().pathname !== "/connexion" &&
                                // eslint-disable-next-line react-hooks/rules-of-hooks
                                useLocation().pathname !== "/inscription" && (
                                    <Header />
                                )}
                            {/* <Header /> */}
                            <Outlet />
                            <Cookies />
                            {useLocation().pathname !== "/connexion" &&
                                // eslint-disable-next-line react-hooks/rules-of-hooks
                                useLocation().pathname !== "/inscription" && (
                                    <Footer />
                                )}
                        </>
                    }
                >
                    <Route path="/" element={<Index />} />
                    <Route path="/ressources" element={<h1>Ressources</h1>} />
                    <Route path="/about" element={<h1>A propos</h1>} />
                    <Route path="/plan" element={<h1>Plan</h1>} />
                    <Route path="/contact" element={<h1>Contact</h1>} />
                    <Route path="/connexion" element={<Connexion />} />
                    <Route path="/inscription" element={<Inscription />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;

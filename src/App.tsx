import "./App.scss";
// router
import { Routes, Route, Outlet } from "react-router-dom";

// components
import Header from "./components/header/header.tsx";
import Footer from "./components/footer/footer.tsx";

// pages
import Index from "./pages/index/index.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route
                    element={
                        <>
                            <Header />
                            <Outlet />
                            <Footer />
                        </>
                    }
                >
                    <Route path="/" element={<Index />} />
                    <Route path="/ressources" element={<h1>Ressources</h1>} />
                    <Route path="/about" element={<h1>A propos</h1>} />
                    <Route path="/plan" element={<h1>Plan</h1>} />
                    <Route path="/contact" element={<h1>Contact</h1>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;

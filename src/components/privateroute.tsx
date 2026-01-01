import React from "react"; // <--- AJOUTE CET IMPORT
import { Navigate } from "react-router-dom";

// Utilise React.ReactElement ou React.ReactNode pour plus de compatibilité
const PrivateRoute = ({ children }: { children: React.ReactElement }) => {
    const user = sessionStorage.getItem("user");
    
    if (!user) {
        return <Navigate to="/connexion" replace />;
    }

    return children;
};

export default PrivateRoute;
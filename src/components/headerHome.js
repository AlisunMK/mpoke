import React from "react";
import { useNavigate } from "react-router-dom"; // Importa o useNavigate
import '../styles/HeaderHome.css';

function HeaderHome() {
    const navigate = useNavigate(); // Hook para navegação

    const handleAccess = () => {
        navigate('/hub'); // Navega para a página "Hub"
    };

    return (
        <div className="header">
            <div id="btnAccess" onClick={handleAccess} className="btn-access">
                Acessar
            </div>
        </div>
    );
}

export default HeaderHome;

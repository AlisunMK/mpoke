import React from "react";
import { useNavigate } from "react-router-dom"; // Importa o useNavigate    
import '../styles/HeaderHub.css';

function HeaderHub() {

    const navigate = useNavigate(); // Hook para navegação

    const handleAccess = () => {
        navigate('/'); // Navega para a página "Hub"
    };

    return (
        <div className="headerHub">
            <div id="btnAccess" onClick={handleAccess} className="btn-access">
                Sair
            </div>
        </div>
    );
}

export default HeaderHub;

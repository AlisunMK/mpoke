import React from "react";
import { useNavigate } from "react-router-dom"; // Importa o useNavigate    
import '../styles/HeaderHub.css';
import { IoSearchSharp } from "react-icons/io5";

function HeaderHub() {

    const navigate = useNavigate(); // Hook para navegação

    const handleAccess = () => {
        navigate('/'); // Navega para a página "Hub"
    };

    return (
        <div className="headerHub">
            <div className="areaSearch">
            <input type="text" placeholder="Pesquise o seu pokémon favorito" className="inputSearch" />
                <div id="btnSearch">
                    <IoSearchSharp />
                </div>
            </div>
            <div id="btnAccess" onClick={handleAccess} className="btn-access">
                Sair
            </div>
        </div>
    );
}

export default HeaderHub;

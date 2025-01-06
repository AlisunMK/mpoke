import React from "react";
import '../styles/AreaTypes.css';
import tipo1 from '../imgs/Union.svg';
import tipo2 from '../imgs/Vector-2.svg';
import tipo3 from '../imgs/Vector-8.svg';
import tipo4 from '../imgs/Vector-1.svg';
import tipo5 from '../imgs/Vector-14.svg';
import tipo6 from '../imgs/Union-1.svg';
import tipo7 from '../imgs/Vector-9.svg';
import tipo8 from '../imgs/Vector-13.svg';
import tipo9 from '../imgs/Vector-10.svg';
import tipo10 from '../imgs/Vector-11.svg';
import tipo11 from '../imgs/Union-2.svg';
import tipo12 from '../imgs/Vector-7.svg';
import tipo13 from '../imgs/Vector.svg';
import tipo14 from '../imgs/Vector-4.svg';
import tipo15 from '../imgs/Vector-5.svg';
import tipo16 from '../imgs/Vector-6.svg';
import tipo17 from '../imgs/Vector-3.svg';


function AreaTypes() {
    // Array contendo as imagens de cada tipo
    const tipos = [tipo1, tipo2, tipo3, tipo4, tipo5, tipo6, tipo7, tipo8, tipo9, tipo10, tipo11, tipo12, tipo13, tipo14, tipo15, tipo16, tipo17];

    return (
        <div className="areaT">
            <h1>Selecione por tipo:</h1>
            <div className="areaTypesMain">
                {tipos.map((tipo, index, title) => (
                    <div key={index} className="btnT">
                        <img src={tipo} alt={`Tipo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AreaTypes;

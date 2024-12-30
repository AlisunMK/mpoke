import React from 'react'
import '../styles/AreaMainHome.css'
import imgPikachu from '../imgs/Pikachu_Sentado_Png-removebg-preview 1.png'

function AreaMainHome(){
    return(
        <div className='areaMain'>
            <div className='areaPikachu'>
                <img src={imgPikachu} id='imgPikachu' alt='pikachu'/>
            </div>
            <div className='areaTextIntro'>
                <p>Bem-vindo à <span>mPoke</span>!<br></br>
                    Descubra o incrível mundo dos Pokémon em um só lugar! 
                </p>
            </div>
        </div>
    )
}

export default AreaMainHome;
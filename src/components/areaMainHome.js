import React from 'react'
import '../styles/AreaMainHome.css'
import imgPikachu from '../imgs/Group 12.svg'

function AreaMainHome(){
    return(
        <div className='areaMain'>
            <div className='areaPikachu'>
                <img src={imgPikachu} id='imgPikachu' alt='pikachu'/>
            </div>
            <div className='areaTextIntro'>
                <p>Bem-vindo à <span>YellowPoke</span>!<br></br>
                    Descubra o incrível mundo dos Pokémon em um só lugar! 
                </p>
            </div>
        </div>
    )
}

export default AreaMainHome;
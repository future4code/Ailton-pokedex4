import React from "react"
import "./CardPokedex.css"


export const CardPokedex = (props) => {
    const pokemon = props.pokemon
    return (
        <div>
            <div className="Container">
                <p>{pokemon.name}</p>
                {/* <div>
                <button>Detalhes</button>
                <button>Capturar</button>
                </div> */}
            </div>
        </div>
    )
}
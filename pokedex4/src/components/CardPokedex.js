import React from "react"
import "./CardPokedex.css"


export const CardPokedex = (props) => {
    const pokemon = props.pokemon
    return (
        <div>
            <div className="Container">
<<<<<<< HEAD
                <p>{pokemon.name}</p>
=======
                <p>{pokemon.name}-{pokemon.id}</p>
                <img src={pokemon.sprites.front_default} />
                <p>{pokemon.types.name}</p>
>>>>>>> ae7d1f78888c63810346beb499b849ba74661f09
                {/* <div>
                <button>Detalhes</button>
                <button>Capturar</button>
                </div> */}
            </div>
        </div>
    )
}
import React from "react"
import "./CardPokedex.css"
import { useNavigate } from "react-router-dom"
import {gotoPokedexPage} from "../routes/Coordinator"
import {gotoDetalhesPage} from "../routes/Coordinator"


export const CardPokedex = (props) => {
    const pokemon = props.pokemon
    const navigate = useNavigate()

    //Só apagar no final pra ajudar na pesquisa dos campos.
    console.log(pokemon)

    const Types = () => {
        //Fazendo um map para pegar o tipo do pokemon
        if(pokemon?.types){
            return pokemon.types.map((type) => {
                return(
                    <div>
                        <p className="Linha" key={type.type.name}>{type.type.name}</p>
                    </div>
                )
            })
        }
    }

    return (
            <div className="Container">
                <div className="Status">
                    <span>#{pokemon.id}</span>
                    <span> {pokemon.name} </span>
                    <span className="LinhaMap">{Types()}</span>
                    <div className="BotaoCardPokedex">
                        <button onClick={() => gotoDetalhesPage(navigate)}>Detalhes</button>
                        <button onClick={() => gotoPokedexPage(navigate)}>Capturar</button>
                     </div>
                </div>
                
                     <img className="ImagemBotaoCardPokedex" src={pokemon.sprites.other.home.front_default} />
                
            </div>
    )
}
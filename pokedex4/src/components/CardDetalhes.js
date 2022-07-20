import React from "react"
import "./CardDetalhes.css"
import { useNavigate } from "react-router-dom"
import {gotoPokedexPage} from "../routes/Coordinator"
import {gotoDetalhesPage} from "../routes/Coordinator"


export const CardDetalhes = (props) => {
    const pokemon = props.pokemon
    const navigate = useNavigate()

    const Color = (type) => {
    
        switch( type ) {
            case "grass":
                return "#729F92"
            case "water":
                return "#71C3FF"
            case "fire":
                return "#EAAB7D"
            case "normal":
                return "#BF9762"
            case "bug":
                return "#76A866"    
            default:
                return "white";
        }
    }

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
            <div key={pokemon.id}
                 style={{backgroundColor: Color(pokemon.types[0].type.name), color:'white'}}
                 className="Container">
                <div   className="Status">
                    <span>#{pokemon.id}</span>
                    <span> {pokemon.name} </span>
                    <span className="LinhaMap">{Types()}</span>
                    <div className="BotaoCardDetalhes">
                        <button onClick={() => gotoDetalhesPage(navigate)}>Detalhes</button>
                        <button onClick={() => gotoPokedexPage(navigate)}>Capturar!</button>
                    </div>
                </div>
                
                     <img className="ImagemBotaoCardDetalhes" src={pokemon.sprites.other.home.front_default} />
                
            </div>
    )
}
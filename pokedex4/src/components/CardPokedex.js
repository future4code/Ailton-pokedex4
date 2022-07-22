import React, {useContext, useEffect} from "react"
import "./CardPokedex.css"
import { useNavigate } from "react-router-dom"
import {gotoDetalhesPage} from "../routes/Coordinator"
import { GlobalContext } from "../components/global/GlobalContext"

export const CardPokedex = (props) => {
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
    const { requests } = useContext(GlobalContext)
    const { removeToCarrinho } = requests
    
    const Types = () => {
        //Fazendo um map para pegar o tipo do pokemon
        if(pokemon?.types){
            return pokemon.types.map((type) => {
                return(
                    <div key={type.type.name}>
                        <p className="Linha">{type.type.name}</p>
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
                    <div className="BotaoCardHome">
                        <button onClick={() => gotoDetalhesPage(navigate, pokemon.id)}>Detalhes</button>
                        <button onClick={() => removeToCarrinho(pokemon.id)}>Remover</button>
                    </div>
                </div>
                
                     <img className="ImagemBotaoCardHome" src={pokemon.sprites.other.home.front_default} />
                
            </div>
    )
}
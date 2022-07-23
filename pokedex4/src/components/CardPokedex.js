import React, {useContext, useEffect} from "react"
import "./CardPokedex.css"
import { useNavigate } from "react-router-dom"
import {gotoDetalhesPage} from "../routes/Coordinator"
import { GlobalContext } from "../components/global/GlobalContext"

export const CardPokedex = (props) => {
    const pokemon = props.pokemon
    const navigate = useNavigate()

    const { requests } = useContext(GlobalContext)
    const { removeToCarrinho } = requests
    const { Color } = requests
    const { ColorTypesSmall } = requests
    
    const Types = () => {
        //Fazendo um map para pegar o tipo do pokemon
        if(pokemon?.types){
            return pokemon.types.map((type,id) => {
                return(
                    <div key={type.type.name}>
                        <p style={{backgroundColor: ColorTypesSmall(pokemon.types[id].type.name), color:'white'}} className="Linha">{type.type.name}</p>
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
                        <button className="BotaoDetalhes" onClick={() => gotoDetalhesPage(navigate, pokemon.id)}>Detalhes</button>
                        <button className="BotaoCardExcluir" onClick={() => removeToCarrinho(pokemon.id)}>Excluir</button>
                    </div>
                    
                </div>
                
                     <img className="ImagemBotaoCardHome" src={pokemon.sprites.other.home.front_default} />
                
            </div>
    )
}
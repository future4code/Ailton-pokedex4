import React, {useContext, useEffect} from "react"
import "./CardHome.css"
import { useNavigate } from "react-router-dom"
import {gotoDetalhesPage} from "../routes/Coordinator"
import { GlobalContext } from "../components/global/GlobalContext"
import bug from "../assets/icons/bug.svg"
import dark from "../assets/icons/dark.svg"
import dragon from "../assets/icons/dragon.svg"
import electric from "../assets/icons/electric.svg"
import fairy from "../assets/icons/fairy.svg"
import fighting from "../assets/icons/fighting.svg"
import fire from "../assets/icons/fire.svg"
import flying from "../assets/icons/flying.svg"
import ghost from "../assets/icons/ghost.svg"
import grass from "../assets/icons/grass.svg"
import ground from "../assets/icons/ground.svg"
import ice from "../assets/icons/ice.svg"
import normal from "../assets/icons/normal.svg"
import poison from "../assets/icons/poison.svg"
import psychic from "../assets/icons/psychic.svg"
import rock from "../assets/icons/rock.svg"
import steel from "../assets/icons/steel.svg"
import water from "../assets/icons/water.svg"

export const CardHome = (props) => {
    const pokemon = props.pokemon
    const navigate = useNavigate()

    
    const { requests } = useContext(GlobalContext)
    const { addToCarrinho } = requests
    const { Color } = requests
    const { ColorTypesSmall, EscolheTipo } = requests

    
    
    const Types = () => {
        //Fazendo um map para pegar o tipo do pokemon
        if(pokemon?.types){
            return pokemon.types.map((type,id) => {
                return(
                    <div key={type.type.name}>
                        <p style={{backgroundColor: ColorTypesSmall(pokemon.types[id].type.name), color:'white'}}
                        className="Linha"><img src={EscolheTipo(type.type.name)} width="16em" height="20em"/>{type.type.name}</p>
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
                        <button className="BotaoCapturar" onClick={() => addToCarrinho(pokemon.id)}>Capturar!</button>
                    </div>
                </div>
                     <img className="ImagemBotaoCardHome" src={pokemon.sprites.other.home.front_default} />
            </div>
    )
}
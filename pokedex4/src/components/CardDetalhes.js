import React from "react"
import "./CardDetalhes.css"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
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


export const CardDetalhes = (props) => {
    const pokemon = props.detalhe
    const navigate = useNavigate()
    
    const { requests } = useContext(GlobalContext)

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

    const array = [pokemon.stats[0].base_stat, pokemon.stats[1].base_stat, pokemon.stats[2].base_stat,
    pokemon.stats[3].base_stat, pokemon.stats[4].base_stat, pokemon.stats[5].base_stat]
    const soma = array.reduce(function (soma, i) {
        return soma + i;
    })


    return (
        <div key={pokemon.id}
            style={{ backgroundColor: Color(pokemon.types[0].type.name), color: 'white' }}
            className="ContainerCardDetalhes">
                
                <div className="ImagemDetalhes1">
                    <img className="ImagemDetalhes" src={pokemon.sprites.other.dream_world.front_default} />
                </div>

            <div >
                <img className="ImagemPixelCardDetalhe" src={pokemon.sprites.front_default} />
                <img className="ImagemPixelCardDetalhe" src={pokemon.sprites.back_default} />
            </div>
            <div className="BaseStatusDetalhes">
                <h3 className="ColorBlackDetalhes">Base Status</h3>
                <div className="SubMenuBaseStatus">
                    <span className="LinhaSubMenuBaseStatus">HP = {pokemon.stats[0].base_stat}</span>
                    <span className="LinhaSubMenuBaseStatus">Attack = {pokemon.stats[1].base_stat}</span>
                    <span className="LinhaSubMenuBaseStatus">Defense = {pokemon.stats[2].base_stat}</span>
                    <span className="LinhaSubMenuBaseStatus">Sp. Atk = {pokemon.stats[3].base_stat}</span>
                    <span className="LinhaSubMenuBaseStatus">Sp. Def = {pokemon.stats[4].base_stat}</span>
                    <span className="LinhaSubMenuBaseStatus">Speed = {pokemon.stats[5].base_stat}</span>
                    <span className="LinhaSubMenuBaseStatus">Total = {soma}</span>
                </div>
            </div>
               
            <div className="StatusDetalhe">
                <span>#{pokemon.id}</span>
                <span> {pokemon.name} </span>
                <span className="LinhaMap">{Types()}</span>
                <div className="MovesDetalhesContainer">
                    <h3 className="ColorBlackDetalhes">Moves:</h3>
                    <span className="LinhaMoves">{pokemon.moves[0].move.name}</span>
                    <span className="LinhaMoves">{pokemon.moves[1].move.name}</span>
                    <span className="LinhaMoves">{pokemon.moves[2].move.name}</span>
                    <span className="LinhaMoves">{pokemon.moves[3].move.name}</span>
                    <span className="LinhaMoves">{pokemon.moves[4].move.name}</span>
                </div>
                
            </div>
        </div>

    )
}
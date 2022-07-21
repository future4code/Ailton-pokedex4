import React from "react"
import "./CardDetalhes.css"
import { useNavigate } from "react-router-dom"


export const CardDetalhes = (props) => {
    const pokemon = props.detalhe
    const navigate = useNavigate()

    const Color = (type) => {

        switch (type) {
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
        if (pokemon?.types) {
            return pokemon.types.map((type) => {
                return (
                    <div key={type.type.name}>
                        <p className="Linha" >{type.type.name}</p>
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
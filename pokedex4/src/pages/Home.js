import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../img/logo.jpeg"
import {gotoPokedexPage} from "../routes/Coordinator"
import "./Home.css"
import { CardHome } from "../components/CardHome"
import { GlobalContext } from "../components/global/GlobalContext"

export const Home = () => {
    const navigate = useNavigate()  
    const  {states} = useContext(GlobalContext)
    const {pokemonDetails} = states
  
  const pokeMap = pokemonDetails.map((pokemon) =>{
    return (
      <CardHome key={pokemon.id} pokemon={pokemon}/>
    )
  })

       
    return (
        <div>
            <div className="CountainerHeader">
                <div></div>
                <img src={logo} className="Logo" />
                <button onClick={() => gotoPokedexPage(navigate)} className="Botao">Pokédex</button>
            </div>
            <div className="ContainerMain">
            <h1 className="Paragrafo">Todos os Pokémons</h1>
            </div>
            <div className="ContainerMain2">
            {pokeMap}
            </div>
        </div>
    )
}
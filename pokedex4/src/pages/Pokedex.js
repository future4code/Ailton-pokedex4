import React, { useContext } from "react"
import { gotoHomePage } from "../routes/Coordinator"
import { goToVoltar } from "../routes/Coordinator"
import { useNavigate } from "react-router-dom"
import "./Pokedex.css"
import logo from "../img/logo.jpeg"
import { GlobalContext } from "../components/global/GlobalContext"
import { CardPokedex } from "../components/CardPokedex"


export const Pokedex = () => {
  const navigate = useNavigate()
  const  {states} = useContext(GlobalContext)
  const {pokemonCapturado} = states

  const pokeMap = pokemonCapturado.map((pokemon) =>{
    return (
      <CardPokedex key={pokemon.id} pokemon={pokemon}/>
    )
  })

  return (
    <div>
      <div className="CountainerHeader">
        <button onClick={() => gotoHomePage(navigate)} className="Botao">Todos os Pokémons</button>
        <img src={logo} className="Logo" />
        <button onClick={() => goToVoltar(navigate)} className="Botao">Voltar</button>
      </div>
      <div className="ContainerMain">
        <h1 className="Paragrafo">Meus Pokémons</h1>
      </div>
      <div className="ContainerMain2">
            {pokeMap}
            </div>
      
    </div>
  )
}
import React, { useContext }  from "react"
import { gotoHomePage } from "../routes/Coordinator"
import { useNavigate } from "react-router-dom"
import "./Detalhes.css"
import logo from "../img/logo.jpeg"
import { GlobalContext } from "../components/global/GlobalContext"
import { useParams } from "react-router-dom"
import { CardDetalhes } from "../components/CardDetalhes"

export const Detalhes = () => {
  const navigate = useNavigate()
  const  {states} = useContext(GlobalContext)
  const {pokemonDetails, pokeData} = states
  const params = useParams()



  console.log(pokemonDetails)
       
    return (
      <div>
      <div className="CountainerHeader">
      <button onClick={() => gotoHomePage(navigate)} className="Botao">Todos os Pokémons</button>
        <img src={logo} className="Logo" />
        <button>Excluir</button>
      </div>
      <div className="ContainerMain">
        <h1 className="Paragrafo">Detalhes</h1>
      </div>
      <div>
      
      {/* <CardDetalhes /> */}
      </div>
    </div>
    )
}
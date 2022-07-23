import React, { useContext, useEffect, useState } from "react"
import { gotoHomePage } from "../routes/Coordinator"
import { useNavigate } from "react-router-dom"
import "./Detalhes.css"
import logo from "../img/logo.jpeg"
import { GlobalContext } from "../components/global/GlobalContext"
import { useParams } from "react-router-dom"
import { CardDetalhes } from "../components/CardDetalhes"
import axios from "axios"

  export const Detalhes = () => {

  const navigate = useNavigate()
  const { states, requests, setters } = useContext(GlobalContext)
  const { pokemonDetails, pokeData, pokemonCapturado } = states
  const {setPokemonCapturado} = setters
  const { addToCarrinho, removeToCarrinho } = requests
  const [detalhe, setDetalhe] = useState([])
  const [verifica, setVerifica] = useState (false)
   
  const params = useParams()
  const juntaDados = pokemonDetails[params.id-1]

  console.log(juntaDados)

  useEffect (() => {
    verificacao()
  }, [])

  const verificacao = (event) =>{
      const pokemons = juntaDados
      setPokemonCapturado(state =>{
      const pokemonExist = (state.filter(p => pokemons.id == p.id).length > 0);
      if (!pokemonExist){
        setVerifica(false)
      } else{
        setVerifica(true)
      }
      return state
    })
  }
 
  return (
    <div>
      <div className="CountainerHeader">
        <button onClick={() => gotoHomePage(navigate)} className="Botao">Todos os Pokémons</button>
        <img src={logo} className="Logo" />
        <div>
          {verifica ?
           <button className="BotaoExcluir" value={true} onClick={() => removeToCarrinho(params.id)}>Excluir</button>
           
          : <button className="Botao" value={false} onClick={() => addToCarrinho(params.id)}>Capturar</button>}
        </div>
      </div>
      <div className="ContainerMain">
        <h1 className="Paragrafo">Detalhes</h1>
      </div>
      <div className="ContainerMain2">
         <CardDetalhes detalhe={juntaDados} />
      </div>
    </div>
  )
}
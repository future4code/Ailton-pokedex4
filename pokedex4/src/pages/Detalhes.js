import React, { useContext, useEffect, useState }  from "react"
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
  const  {states} = useContext(GlobalContext)
  const {pokemonDetails, pokeData} = states
  const params = useParams()

  const [detalhe, setDetalhe] = useState([])

  useEffect(() =>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
    .then((res) =>{
      setDetalhe(res.data)
    })
    .catch((erro) =>{
      console.log(erro)
    })
  }, [])

  console.log(detalhe)
 
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
      <p>{detalhe.name}</p>
      {/* <CardDetalhes detalhe={detalhe}/> */}
      </div>
    </div>
    )
}
import React from "react"
import { gotoHomePage } from "../routes/Coordinator"
import { useNavigate } from "react-router-dom"
import "./Detalhes.css"
import logo from "../img/logo.jpeg"

export const Detalhes = () => {
  const navigate = useNavigate()
       
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
    </div>
    )
}
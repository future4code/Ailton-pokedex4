import React, { useEffect, useState } from "react"
import { gotoHomePage } from "../routes/Coordinator"
import { gotoDetalhesPage } from "../routes/Coordinator"
import { useNavigate } from "react-router-dom"
import "./Pokedex.css"
import logo from "../img/logo.jpeg"
import axios from "axios"


export const Pokedex = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="CountainerHeader">
        <button onClick={() => gotoHomePage(navigate)} className="Botao">Todos os Pokémons</button>
        <img src={logo} className="Logo" />
        <button onClick={() => gotoDetalhesPage(navigate)}>Detalhes</button>
      </div>
      <div className="ContainerMain">
        <h1 className="Paragrafo">Meus Pokémons</h1>
      </div>
      
    </div>
  )
}
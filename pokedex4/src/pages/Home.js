import React from "react"
import { useNavigate } from "react-router-dom"
import logo from "../img/logo.jpeg"
import {gotoPokedexPage} from "../routes/Coordinator"
import "./Home.css"

export const Home = () => {
    const navigate = useNavigate()  
       
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
        </div>
    )
}
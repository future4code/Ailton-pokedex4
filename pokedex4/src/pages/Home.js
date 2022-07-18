import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../img/logo.jpeg"
import {gotoPokedexPage} from "../routes/Coordinator"
import "./Home.css"
import axios from "axios"

export const Home = () => {
    const navigate = useNavigate()  
    
  const [pokeData, setPokeData] = useState([])
  const [pokeImg, setPokeImg] = useState()

  const Named = () =>{
    const url = "https://pokeapi.co/api/v2/pokemon/"
    axios.get(url)
    .then((response) =>{
      setPokeData(response.data.results)
      setPokeImg(response.sprites.front_default)
      console.log(response.data.results)
    })
    .catch((erro) =>{
      console.log(erro)
    })
  }

  useEffect(() =>{
    Named()
  },[])
  
  const pokeMap = pokeData.map((pokemon) =>{
    return (
      <p key={pokemon.name}> {pokemon.name}  </p>
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
            {pokeMap} 
            {/* <img src={pokeImg} /> */}
            </div>
        </div>
    )
}
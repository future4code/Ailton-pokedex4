import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../img/logo.jpeg"
import {gotoPokedexPage} from "../routes/Coordinator"
import "./Home.css"
import axios from "axios"
import { CardPokedex } from "../components/CardPokedex"
// import useRequestData from "../hooks/useRequestData"

export const Home = () => {
    const navigate = useNavigate()  
    // const pokemons = useRequestData([], "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
    
  const [pokeData, setPokeData] = useState([])
  const [pokemonDetails, setPokemonDetails] = useState()

  const Named = () =>{
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"
    axios.get(url)
    .then((response) =>{
      setPokeData(response.data.results)
      getPokemonDetails(response.data.results)
    })
    .catch((erro) =>{
      console.log(erro.message)
    })
  }
  
  const getPokemonDetails = async (pokemons) => {
    const pokemonsArrays = []
      for(const pokemon of pokemons){
          try{
              const resp = await axios.get(pokemon.url)
              pokemonsArrays.push(resp.data)
            }
            catch(error){
              console.log(error.response)
            }
          }
          setPokemonDetails(pokemonsArrays)
  }

  useEffect(() =>{
    Named()
  },[])

  
  const pokeMap = pokemonDetails.map((pokemon) =>{
    return (
      <CardPokedex key={pokemon.name} pokemon={pokemon}/>
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
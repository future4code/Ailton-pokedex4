import axios from 'axios'
import React from 'react'
import {useEffect, useState} from 'react'
import { GlobalContext } from "./GlobalContext"

const GlobalState = (props) => {
    
    const [pokeData, setPokeData] = useState([])
    const [pokemonDetails, setPokemonDetails] = useState([])

    useEffect(() =>{
        Named()
      },[])

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
                const res = await axios.get(pokemon.url)
                pokemonsArrays.push(res.data)
                
            }
            catch(err){
                console.log(err.response)
            }
        }
        setPokemonDetails(pokemonsArrays)
    }
    
    

    const states = { pokeData , pokemonDetails }
    const setters = { setPokeData , setPokemonDetails }
    const requests = {Named, getPokemonDetails}
    
    
    const Provider = GlobalContext.Provider

    return(
        <Provider value={{states, setters, requests}}>
            {props.children}
        </Provider>
    )
}

export default GlobalState
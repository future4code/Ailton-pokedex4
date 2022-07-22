import axios from 'axios'
import React from 'react'
import {useEffect, useState} from 'react'
import { GlobalContext } from "./GlobalContext"

const GlobalState = (props) => {
    
    const [pokeData, setPokeData] = useState([])
    const [pokemonDetails, setPokemonDetails] = useState([])
    const [pokemonCapturado, setPokemonCapturado] = useState([])

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

    const addToCarrinho = (id) =>{
      const pokemons = pokemonDetails[id-1]
      
      setPokemonCapturado(state =>{
        const pokemonExist = (state.filter(p => pokemons.id == p.id).length > 0);
        if (!pokemonExist){
          state = [...state, pokemons]
          alert(`${pokemons.name} Capturado com sucesso!`)
        } else{
          alert("Este Pokemon já está Capturado, Verifique na sua Pokedex!")
        }
        return state
      })
      // const juntaDados = pokemonDetails[id-1]
      // setPokemonCapturado(novoArray => [...novoArray, juntaDados])
}
      const removeToCarrinho =(pokemonId) =>{
        const pokemons = pokemonDetails[pokemonId-1]
        const novaLista = pokemonCapturado.filter((pokemon) =>{
          return pokemonId !== pokemon.id
        })
        alert(`${pokemons.name} foi Libertado!`)
        setPokemonCapturado (novaLista)
    }
    

console.log(pokemonCapturado)

    const states = { pokeData , pokemonDetails, pokemonCapturado}
    const setters = { setPokeData , setPokemonDetails, setPokemonCapturado }
    const requests = {Named, getPokemonDetails, addToCarrinho, removeToCarrinho}
    
    
    const Provider = GlobalContext.Provider

    return(
        <Provider value={{states, setters, requests}}>
            {props.children}
        </Provider>
    )
}

export default GlobalState
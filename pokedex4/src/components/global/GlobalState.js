import axios from 'axios'
import React from 'react'
import {useEffect, useState } from 'react'
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
        
        console.log("NovaLista:", novaLista)
        setPokemonCapturado(novaLista)
        alert(`${pokemons.name} foi Libertado!`)

      }
    
        // console.log(pokemonCapturado)
        const Color = (type) => {

          switch (type) {
              case "grass":
                  return "#729F92"
              case "water":
                  return "#71C3FF"
              case "fire":
                  return "#EAAB7D"
              case "normal":
                  return "#BF9762"
              case "bug":
                  return "#76A866"
              default:
                  return "white";
          }
      }
  
      const ColorTypesSmall = (type) => {
      
          switch( type ) {
              case "poison":
                  return "#AD61AE"
              case "grass":
                  return "#70B873"
              case "fire":
                  return "#F44900"
              case "flying":
                  return "#6892B0"
              case "water":
                  return "#33A4F5"
              case "bug":
                  return "#316520"
              case "normal":
                  return "#8A8A8A"
              case "dark":
                  return "#5C5365"
              case "dragon":
                  return "#0A6CBF"    
              case "eletric":
                  return "#F4D23B"    
              case "fairy":
                  return "#EC8FE6"    
              case "fighting":
                  return "#CE4069"    
              case "ghost":
                  return "#5269AC"    
              case "ground":
                  return "#D97745"    
              case "ice":
                  return "#74CEC0"    
              case "psychic":
                  return "#F67176"    
              case "rock":
                  return "#C7B78B"    
              case "steel":
                  return "#BBBBBB"    
              default:
                  return "white";
          }
      }
    


    const states = { pokeData , pokemonDetails, pokemonCapturado}
    const setters = { setPokeData , setPokemonDetails, setPokemonCapturado }
    const requests = {Named, getPokemonDetails, addToCarrinho, removeToCarrinho , Color , ColorTypesSmall}
    
    
    const Provider = GlobalContext.Provider

    return(
        <Provider value={{states, setters, requests}}>
            {props.children}
        </Provider>
    )
}

export default GlobalState
import axios from 'axios'
import React from 'react'
import {useEffect, useState } from 'react'
import { GlobalContext } from "./GlobalContext"
import bug from "../../assets/icons/bug.svg"
import dark from "../../assets/icons/dark.svg"
import dragon from "../../assets/icons/dragon.svg"
import electric from "../../assets/icons/electric.svg"
import fairy from "../../assets/icons/fairy.svg"
import fighting from "../../assets/icons/fighting.svg"
import fire from "../../assets/icons/fire.svg"
import flying from "../../assets/icons/flying.svg"
import ghost from "../../assets/icons/ghost.svg"
import grass from "../../assets/icons/grass.svg"
import ground from "../../assets/icons/ground.svg"
import ice from "../../assets/icons/ice.svg"
import normal from "../../assets/icons/normal.svg"
import poison from "../../assets/icons/poison.svg"
import psychic from "../../assets/icons/psychic.svg"
import rock from "../../assets/icons/rock.svg"
import steel from "../../assets/icons/steel.svg"
import water from "../../assets/icons/water.svg"

const GlobalState = (props) => {
    
    const [pokeData, setPokeData] = useState([])
    const [pokemonDetails, setPokemonDetails] = useState([])
    const [pokemonCapturado, setPokemonCapturado] = useState([])
    

    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        axios.get(currentPageUrl)
        .then((response) =>{
            setPokeData(response.data.results)
            getPokemonDetails(response.data.results)
            setNextPageUrl(response.data.next);
            setPrevPageUrl(response.data.previous);
        })
        .catch((erro) =>{
          console.log(erro.message)
        })
        
      }, [currentPageUrl]);

      const gotoNextPage = () =>{
        setCurrentPageUrl(nextPageUrl)
      }

      const gotoPrevPage = () =>{
        setCurrentPageUrl(prevPageUrl)
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

      console.log(pokemonDetails)

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
              case "electric":
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
    
      const EscolheTipo = (type) => {
      
        switch( type ) {
            case "poison":
                return poison
            case "grass":
                return grass
            case "fire":
                return fire
            case "flying":
                return flying
            case "water":
                return water
            case "bug":
                return bug
            case "normal":
                return normal
            case "dark":
                return dark
            case "dragon":
                return dragon  
            case "electric":
                return electric    
            case "fairy":
                return fairy   
            case "fighting":
                return fighting   
            case "ghost":
                return ghost  
            case "ground":
                return ground   
            case "ice":
                return ice  
            case "psychic":
                return psychic   
            case "rock":
                return rock   
            case "steel":
                return steel    
            default:
                return "white";
        }
    }


    const states = { nextPageUrl, prevPageUrl, pokeData , pokemonDetails, pokemonCapturado, currentPageUrl}
    const setters = { setPokeData , setPokemonDetails, setPokemonCapturado }
    const requests = {gotoNextPage, gotoPrevPage, getPokemonDetails, addToCarrinho, removeToCarrinho , Color , ColorTypesSmall, EscolheTipo}
    
    
    const Provider = GlobalContext.Provider

    return(
        <Provider value={{states, setters, requests}}>
            {props.children}
        </Provider>
    )
}

export default GlobalState
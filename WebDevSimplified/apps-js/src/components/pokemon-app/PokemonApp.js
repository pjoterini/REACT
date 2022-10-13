import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";

export default function PokemonApp() {
    const [pokemon, setPokemon] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
      setLoading(true)
      let cancel
      axios.get(currentPageUrl, {
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)  
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(pokemon => pokemon.name))
    })
  
    return () => cancel()
  
  }, [currentPageUrl])
  
    function goToNextPage() {
      setCurrentPageUrl(nextPageUrl)
    }
  
    function goToPrevPage() {
      setCurrentPageUrl(prevPageUrl)
    }
  
    if (loading) return "loading..." 
    
    return (
      <div className="pokemon-app">
        <PokemonList pokemon={pokemon}/>
        <Pagination
        goToPrevPage={prevPageUrl ? goToPrevPage: null}
        goToNextPage={nextPageUrl ? goToNextPage : null} 
        />
      </div>
    )
   
}

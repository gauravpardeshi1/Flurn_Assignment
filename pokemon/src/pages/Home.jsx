import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const fetchMorePokemon = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?page=${currentPage + 1}&limit=10`);
        const newPokemonList = [...pokemonList, ...response.data.results];
        setPokemonList(newPokemonList);
        setCurrentPage(currentPage + 1);
      };
    useEffect(() => {
        fetchMorePokemon();
      }, []);
    useEffect(() => {
        const handleScroll = () => {
          const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
          if (isAtBottom) {
            fetchMorePokemon();
          }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [currentPage]);
  return (
    <div>
    {pokemonList.map(pokemon => (
      <div style={{width:'20%', height:'80px',border:'1px solid gray'}} key={pokemon.id}>{pokemon.name}</div>
    ))}
  </div>
  )
}

export default Home








import React, { useEffect, useState } from 'react'

import { Box, SimpleGrid, Text, Button, Image, Center, Select, Heading } from '@chakra-ui/react'

import axios from 'axios'
import Card from './Card'


const Lists = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
const[select,setselect]=useState('')



  const pokeFun = async () => {
    setLoading(true)
    try {
      let res;
      if(select){
         res = await axios.get(`${url}??offset=20&limit=10&location=${select}`);
      }
       res = await axios.get(`${url}??offset=20&limit=10`);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results)
    setLoading(false)
    } catch (error) {
      
    }
    
  }
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url)
      setPokeData(state => {
        state = [...state, result.data]
        state.sort((a, b) => a.id > b.id ? 1 : -1)
        return state;
      })
    })
  }
  useEffect(() => {
    pokeFun();

  }, [url,select])




console.log('s',select);
  return (
    <>

      <div className="container">
        <Box className="left-content">
      
          <Card pokemon={pokeData} loading={loading} />

          <Box className="btn-group" w={{ sm: '20%', lg: '20%' }} display='flex' justifyContent={'space-evenly'}>
            {prevUrl && <Button colorScheme='blue' onClick={() => {
              setPokeData([])
              setUrl(prevUrl)
            }}>Previous</Button >}

            {nextUrl && <Button colorScheme='blue' onClick={() => {
              setPokeData([])
              setUrl(nextUrl)
            }}>Next</Button >}

          </Box>

        </Box>

      </div>


    </>
  )
}

export default Lists



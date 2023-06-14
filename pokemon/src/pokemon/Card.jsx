import React from "react";
import { Box, Image, Text, Heading, Center, SimpleGrid } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_IMG_baseURL } from "../helpers/utils/constants";
const Card = ({ name, url }) => {
    const [pokemon, setPokemon] = useState({
        name: "",
        url: "",
        index: "",
        imageUrl: "pokeball.png",
    });

    useEffect(() => {
        let index = url.split("/")[url.split("/").length - 2];
        let imageUrl = `${API_IMG_baseURL}/${index}.svg`;
        setPokemon({ name, url, index, imageUrl });
    }, []);
    const navigate = useNavigate()
    return (
        <>

            <Box >



                <Box onClick={() => navigate(`/details/${pokemon.name}`)}  position='relative'
  cursor='pointer'
  width='9rem auto'
  margin='4px'
  padding='2rem'
  border-radius='10px'
  border-top='0.5px solid #ef5350'
  border-bottom='0.5px solid #ef5350'
  text-align='center'
  boxShadow='0 3px 15px rgba(0, 0, 0, 0.089)' >
                    <Center>
<Text position='absolute'
  top='0'
  left='0'
  color='white'
  background='#ef5350'
  width='3rem'
  padding='0.1rem'
  font-weight='700'
  borderRadius='0 0 10px 0'>{pokemon.index}</Text>
                        <Image  width='110px'
  height='110px' src={pokemon.imageUrl} alt="" />
                    </Center>
                    <Box >
                        <Heading fontSize={18} mt='5px' fontWeight={500}>{pokemon.name}</Heading> </Box>

                </Box>




            </Box>


        </>
    )
}
export default Card;
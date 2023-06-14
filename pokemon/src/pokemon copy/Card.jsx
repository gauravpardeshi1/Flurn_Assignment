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



                <Box onClick={() => navigate(`/details/${pokemon.name}`)} padding='15px' h='200px' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' alignItems={'center'} className="card"  >
                    <Center>

                        <Image w='50%' h='70%' src={pokemon.imageUrl} alt="" />
                    </Center>
                    <Box >
                        <Heading fontSize={18} fontWeight={500}>{pokemon.index}{pokemon.name}</Heading> </Box>

                </Box>




            </Box>


        </>
    )
}
export default Card;
import React from "react";
import { Box, Image, Text, Heading, Center, SimpleGrid } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
const Card = ({ pokemon, loading, infoPokemon }) => {
    // console.log(pokemon);
    const navigate = useNavigate()
    return (
        <>
            {
                loading ? <Spinner
                    mt='30px'
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                /> :
                    <Box >
                        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} gap='20px' padding={'20px'}>
                            {pokemon.map((item) => {
                                return (
                                    <Box onClick={() => navigate(`/details/${item.name}`)} bg={`rgb(${item.height * 2 + item.weight}, ${item.weight * 2 - item.height}, 215)`} boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' alignItems={'center'} className="card" key={item.id} >
                                        <Center>
                                            <Image w='50%' src={item.sprites.other.home.front_default} alt="" />
                                            <Box display='flex' gap='15px'>
                                                <Heading fontSize={18} fontWeight={500}>{item.name}</Heading> </Box>
                                        </Center>
                                    </Box>

                                )
                            })}
                        </SimpleGrid>
                    </Box>
            }

        </>
    )
}
export default Card;
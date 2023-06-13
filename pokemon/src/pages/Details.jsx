import React, { useState } from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singledata } from '../redux/action';
import { Box, Text, Heading, Image, Stack, Button, Center, SimpleGrid } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { BsFillBookmarkFill } from 'react-icons/bs'
import toast, { Toaster } from 'react-hot-toast';
import { Spinner } from '@chakra-ui/react'
import { RotatingLines } from 'react-loader-spinner'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import axios from 'axios';
const Details = () => {
  const [location, setlocation] = useState([])
  const { name } = useParams()
  const dispatch = useDispatch()
  const data = useSelector(store => store.datareducer.data)
  const spinner = useSelector(store => store.datareducer.isLoading)

  let Location = data?.location_area_encounters
  useEffect(() => {
    dispatch(singledata(name))
    if(Location){
      axios.get(Location)
      .then((res) => setlocation(res.data))
    }
   
  }, [Location])




  const handlebookmark = () => {
    toast.success("Bookmark Added..!!")

  }

  // if (spinner) {
  //   return <RotatingLines
  //   strokeColor="grey"
  //   strokeWidth="5"
  //   animationDuration="0.75"
  //   width="96"
  //   visible={true}
  // />
  // }

  let Img = data?.sprites?.other?.home?.front_default








  return (
    <>
      <Toaster />
      <Center mt='20px'> 

      
      {spinner && <RotatingLines
    strokeColor="green"
    strokeWidth="5"
    animationDuration="0.75"
    width="96"
    mt='20px'
    visible={true}
  />}
  </Center>
      <Box w='80%'  margin='auto' boxShadow='rgba(0, 0, 0, 0.15) 0px 2px 8px'>

        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          border='none'
          w={{ sm: '90%', md: '80%', lg: '75%' }}
          margin='auto'
          mt='30px'
          display={{ lg: 'flex' }}
          justifyContent={'space-evenly'}
        >
          <Center>
            <Image
              objectFit='cover'
              w={{ sm: '50%', lg: '100%' }}
              src={Img}
              alt='Caffe Latte'
            />
          </Center>
          <Stack>
            <CardBody>
              <Box display='flex' alignItems={'center'} justifyContent={'space-between'} mt='15px'>
                <Heading textAlign={'left'} size='md' color='green'>Name: {data.name}</Heading>
                <Box mr='10px' _hover={{ cursor: "pointer" }} onClick={handlebookmark}> <BsFillBookmarkFill size={30} /></Box>
              </Box>
              <Text textAlign={'left'} fontWeight={500} color='gray.500'>Height: {data.height}</Text>
              <Text textAlign={'left'} fontWeight={500} color='gray.500'>Weight: {data.weight}</Text>
              <Text></Text>
              <Text></Text>

              <TableContainer mt='40px' border='1px solid lightgray' padding='10px'>
                <Text textAlign={'left'} fontWeight={500} fontSize={17} color='gray.500'>ABILITIES</Text>
                <Table variant='striped' colorScheme='teal'>

                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Is_Hidden</Th>
                      <Th isNumeric>Slot</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data?.abilities?.map((e) => <Tr>
                      <Td>{e?.ability?.name}</Td>
                      <Td>{e.is_hidden ? "True" : "False"}</Td>
                      <Td>{e.slot}</Td>
                    </Tr>)}


                  </Tbody>
                  <Tfoot>

                  </Tfoot>
                </Table>
              </TableContainer>


            </CardBody>

            <CardFooter>

            </CardFooter>

          </Stack>

        </Card>
        <Box w='90%' margin='auto'  padding='10px' >
          <TableContainer border='1px solid lightgray' padding='10px'>
            <Text textAlign={'left'} fontWeight={500} fontSize={17} color='gray.500'>LOCATION</Text>
            <Table  >

              <Thead>
                <Tr>
                  <Th>Location_Area</Th>

                </Tr>
              </Thead>
              <Tbody>
                <SimpleGrid columns={{ sm: 2, lg: 3 }}>
                  {location?.map((e) => <Tr  color='gray'  >
                    <Td borderBottom={'none'} fontSize={12}>{e?.location_area?.name}</Td>
                  </Tr>)}
                </SimpleGrid>


              </Tbody>
              <Tfoot>

              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
      </Box>

    </>
  )
}

export default Details

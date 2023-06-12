import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singledata } from '../redux/action';
import { Box, Text,Heading,Image,Stack,Button } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import {BsFillBookmarkFill} from 'react-icons/bs'
import toast, { Toaster } from 'react-hot-toast';
import { Spinner } from '@chakra-ui/react'
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
const Details = () => {
  const {name}=useParams()
  const dispatch=useDispatch()
  const data=useSelector(store=>store.datareducer.data)
  const spinner=useSelector(store=>store.datareducer.isLoading)

  useEffect(()=>{
    dispatch(singledata(name))
    
  },[])
 
  console.log("i",data);
 

  const handlebookmark=()=>{
    toast.success("Bookmark Added..!!")
  }

  if(spinner){
    return <Spinner
    mt='30px'
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  />
  }
  let Img=data?.sprites?.other?.home?.front_default
  return (
    <>
     <Toaster />
    <Box >
    
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
 
  w='70%'
  margin='auto'
  mt='30px'
  display='flex'
  justifyContent={'space-evenly'}
>
  <Image
    objectFit='cover'
    w='100%'
    src={Img}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
    <Box display='flex' alignItems={'center'} justifyContent={'space-between'}>
    <Heading  textAlign={'left'} size='md' color='green'>Name: {data.name}</Heading>
      <Box mr='10px'  _hover={{cursor:"pointer"}} onClick={handlebookmark}> <BsFillBookmarkFill size={30}/></Box>
      </Box> 
<Text textAlign={'left'} fontWeight={500} color='gray.500'>Height: {data.height}</Text>
<Text textAlign={'left'} fontWeight={500} color='gray.500'>Weight: {data.weight}</Text>
<Text></Text>
<Text></Text>
     
<TableContainer mt='20px' border='1px solid lightgray' padding='10px'>
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
      {data?.abilities?.map((e)=><Tr>
        <Td>{e?.ability?.name}</Td>
        <Td>{e.is_hidden?"True":"False"}</Td>
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

</Box>
     
</>
  )
}

export default Details

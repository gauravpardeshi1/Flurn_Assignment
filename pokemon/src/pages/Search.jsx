import React, { useEffect } from 'react'
import { FormEvent, ChangeEvent, useState, useRef } from 'react';
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
  Box, Center

} from '@chakra-ui/react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from 'react-loader-spinner'
import { searchdata } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardHeader, CardBody, CardFooter, Image } from '@chakra-ui/react'
import { BsFillBookmarkFill } from 'react-icons/bs'
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
const Search = () => {
  const[name,setname]=useState(null)
  
  const dispatch = useDispatch()
  const searchloading = useSelector(store => store.datareducer.searchloading)
  const searcherror = useSelector(store => store.datareducer.searcherror)
  const data = useSelector(store => store.datareducer.searchdata)
  const handlesearch = (e) => {
    e.preventDefault()
    // console.log(name.current.value)
    dispatch(searchdata(name))
    setname('')

  }
  
  const handlebookmark = () => {
    toast.success("Bookmark Added..!!")
  }

  let Img = data?.sprites?.other?.home?.front_default

  useEffect(()=>{
    if (searcherror) {
      toast.error("No Result Found..!!", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 10000
      });
    }
  },[searcherror,searchloading,name])
  return (
    <>

      <Box w={{ sm: '90%', lg: '60%' }} h='170px' padding='40px' margin='auto' mt='40px' boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'  >
        <Heading
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          mb={5}
          fontWeight={500}>
          Search Pokemon here
        </Heading>
        <Box display='flex' justifyContent={'space-around'} gap='10px'>
          <Input placeholder='Search here' type='text' value={name} onChange={(e)=>setname(e.target.value)}/>
          <Button onClick={handlesearch} colorScheme='blue'>Search</Button>
        </Box>

      </Box>
      <Center>

        {searchloading &&
          <ThreeDots
            height="80"
            width="100"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />}
      </Center>
      {data && <Box >

        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'

          w='65%'
          margin='auto'
          mt='30px'
          display='flex'
          justifyContent={'space-evenly'}
        >
          <Image
            objectFit='cover'
            w='80%'
            src={Img}
            alt='Caffe Latte'
          />

          <Stack>
            <CardBody>
              <Box display='flex' alignItems={'center'} justifyContent={'space-between'}>
                <Heading textAlign={'left'} size='md' color='green'>Name: {data.name}</Heading>
                <Box mr='10px' _hover={{ cursor: "pointer" }} onClick={handlebookmark}> <BsFillBookmarkFill size={30} /></Box>
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

      </Box>}
      {searcherror && <ToastContainer />}

    </>
  )
}

export default Search

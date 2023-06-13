import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getdata } from '../redux/action'
import { Box, SimpleGrid, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { Spinner } from '@chakra-ui/react'

const Lists = () => {
  const [page, setpage] = useState(20)
  const dispatch = useDispatch()
  const data = useSelector(store => store.datareducer.data)
  const spinner = useSelector(store => store.datareducer.isLoading)
  useEffect(() => {
    dispatch(getdata(page))

  }, [page])
  console.log("d", spinner);
  if (spinner) {
    return <Spinner
      mt='30px'
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    />
  }
  return (
    <>

      <Box padding={'20px'}>
        <SimpleGrid columns={{ sm: 1, md: 3, lg: 5 }} gap='20px'>

          {data?.map((el) => <Link to={`/details/${el.name}`}><Box border='1px solid gray' >
            <Text>{el.name}</Text>

          </Box></Link>)}
        </SimpleGrid>
      </Box>

      <Box w='20%' margin='auto' display={'flex'} justifyContent={'space-evenly'}>
        <Button isDisabled={page == 20 ? true : false} onClick={() => setpage(page - 20)}>Previous</Button>
        <Button>{page / 20}</Button>
        <Button onClick={() => setpage(page + 20)}>Next</Button>
      </Box>
    </>
  )
}

export default Lists

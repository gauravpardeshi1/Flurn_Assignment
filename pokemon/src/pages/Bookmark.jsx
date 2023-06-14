import { Box, Text, Heading, Image, Button, SimpleGrid, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BOOKMARK_DATA } from '../redux/actiontypes'
import { BookmarkData } from '../redux/action'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'

const Bookmark = () => {
  const [update, setupdate] = useState(false)
  const dispatch = useDispatch()
  const Bookmarkdata = useSelector(store => store.datareducer.bookmarkdata)
  useEffect(() => { dispatch(BookmarkData) }, [update])

  const navigate = useNavigate()


  return (
    <>
      <Toaster />

      <Box >
        <SimpleGrid columns={{ sm: 1, lg: 3 }}>
          {Bookmarkdata?.map((e) => <Box padding='30px'>
            <Box boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' w='80%' padding='20px' >
              <Box onClick={() => navigate(`/details/${e.name}`)}><Image src={e.sprites?.other?.home?.front_default} npm ts /></Box>
              <Box boxShadow='rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px' padding='10px'>
                <Text fontSize={18} fontWeight={400}>Name:-{e.name}</Text>
                <Text fontSize={18} fontWeight={400}>Height:-{e.height}</Text>
                <Text fontSize={18} fontWeight={400}>Weight:-{e.weight}</Text>
                <Button colorScheme='blue' mt='5px' onClick={async () => {
                  toast.success("Removed Successfully")
                  setupdate(!update)
                  await axios.delete(`https://nice-tan-octopus-toga.cyclic.app/bookmark/${e.id}`)
                 
                  
                  
                }} >Remove From Bookmark</Button>
              </Box>
            </Box>
          </Box>)}
        </SimpleGrid>
      </Box>
    </>
  )
}

export default Bookmark;

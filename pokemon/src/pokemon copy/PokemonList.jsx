import { useState } from "react";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroller";
import { fetchInfinitePokemons } from "../api/pokemon";
import PokemonCard from "./PokemonCard";
import Card from './Card'
import { Box, Center, Spinner } from "@chakra-ui/react";




const PokemonList = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("pokemons", fetchInfinitePokemons, {
    getNextPageParam: (lastPage) => lastPage.pageParam,
  });

  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState("");




  const handleClick = (url) => {

    setSelectedPokemonUrl(url);
  };
  return (
    <>

      <InfiniteScroll
        loadMore={fetchNextPage}
        hasMore={hasNextPage}

      >
        <Box w='90%' padding='20px' margin='auto' display='grid' gridTemplateColumns={'repeat(4,1fr)'} gap='15px' >
          {status === "loading" && <Spinner
            mt='30px'
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            ml='500px'
          />}
          {status === "error" && <p>Error.....</p>}
          {status === "success" &&
            data.pages.map((page) =>
              page.pokemons.map(({ name, url }) => (
                <Card
                  key={name}
                  {...{ name, url }}
                  handleClick={() => handleClick(url)}
                />
              ))
            )}
        </Box >
      </InfiniteScroll>
    </>
  );
};

export default PokemonList;

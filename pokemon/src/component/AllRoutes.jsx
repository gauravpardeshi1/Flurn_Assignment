import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Details from '../pages/Details'

import Bookmark from '../pages/Bookmark'
import Search from '../pages/Search'

import PokemonList from '../pokemon copy/PokemonList'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/search" element={<Search />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="/" element={<PokemonList />} />
      <Route path="/details/:name" element={<Details />} />
     
    </Routes>
  )
}

export default AllRoutes

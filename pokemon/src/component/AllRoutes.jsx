import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Details from '../pages/Details'
import Lists from '../pages/Lists'
import Bookmark from '../pages/Bookmark'
import Search from '../pages/Search'
import Home from '../pages/Home'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/search" element={<Search />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="/" element={<Lists />} />
      <Route path="/details/:name" element={<Details />} />
      <Route path="/h" element={<Home/>} />
    </Routes>
  )
}

export default AllRoutes

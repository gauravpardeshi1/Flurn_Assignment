import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Details from '../pages/Details'
import Lists from '../pages/Lists'
import Search from '../pages/Search'
import Bookmark from '../pages/Bookmark'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Search/>}/>
      <Route path="/bookmark" element={<Bookmark/>}/>
      <Route path="/lists" element={<Lists/>}/>
      <Route path="/details/:name" element={<Details/>}/>
    </Routes>
  )
}

export default AllRoutes

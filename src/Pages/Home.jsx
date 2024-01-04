import axios from 'axios'
import React, { useEffect } from 'react'
import BlogList from '../Components/BlogList'
import Search from '../Components/Search'
const Home = () => {

  return (
    <>
      <Search />
      <BlogList />
    </>
  )
}

export default Home
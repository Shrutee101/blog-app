
import React from 'react'
import "./App.css"
import { Route,Routes } from 'react-router-dom'
import HomeBlog from './pages/HomeBlog/HomeBlog'
import Blog from './pages/Blog/Blog'

const App = () => {
  return (
    <div className='container'>
      <Routes>
      <Route path='/' Component={HomeBlog}/>
      <Route path='/blog/:id' Component={Blog}/>
      </Routes>
    </div>
  )
}

export default App
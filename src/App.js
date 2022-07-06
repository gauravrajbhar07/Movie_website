import React from 'react'
import Home from './Home'
import { Routes, Route } from 'react-router-dom';
import SingleMovies from './SingleMovies';
import Error from './Error';


const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies/:id" element={<SingleMovies />} />
        <Route path="*" element={<Error />} />

      </Routes>

    </>
  )
}

export default App; 
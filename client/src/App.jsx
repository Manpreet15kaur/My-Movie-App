import React from 'react'
import Navbar from './components/Navbar'
import {Route, Routes ,useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favourite from './pages/Favourite'
import {Toaster} from  'react-hot-toast'
import Footer from './components/Footer'

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
    <Toaster/>
    {!isAdminRoute && <Navbar/>}
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path ='/Movie' element={<Movie/>} />
        <Route path ='/Movie/:id' element={<MovieDetails/>} />
        <Route path ='/Movie/:id/:date' element={<SeatLayout/>} />
         <Route path ='/MyBookings' element={<MyBookings/>} />
          <Route path ='/favourite' element={<Favourite/>} />
        
      </Routes>
      {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App

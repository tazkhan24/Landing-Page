import React from 'react'
import Destinations from './components/Destinations'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Offers from './components/Offers'
import ScrollToTop from './components/ScrollToTop'
import Services from './components/Services'
import Testimonials from './components/Testimonials'


export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <Destinations/>
      <Offers/>
      <Testimonials/>
      <Footer/>
      <ScrollToTop/>
    </div>
  )
}

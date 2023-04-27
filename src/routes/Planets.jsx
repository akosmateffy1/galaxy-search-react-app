import React from 'react'
import Footer from '../components/footer/Footer'
import HeroPhoto from '../components/hero-picture/HeroPhoto'
import Navbar from '../components/navbar/Navbar'
import PlanetsList from '../components/planetlist/PlanetsList'

export default function Planets(){
  return (
    <>
        <Navbar />
        <HeroPhoto 
            heading='Bólygok' 
            text='Nézd meg milyen bólygok léteznek'
        />
        <PlanetsList />
        <Footer/>
    </>
  )
}
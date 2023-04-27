import React from 'react'
import Footer from '../components/footer/Footer'
import HeroPhoto from '../components/hero-picture/HeroPhoto'
import Navbar from '../components/navbar/Navbar'
import SmallPlants from '../components/smallplants/SmallPlants'

export default function Stars(){
  return (
    <>
        <Navbar />
        <HeroPhoto 
            heading='Csillag keresése' 
            text='Keress rá bármely Csilagra!'
        />
        <SmallPlants/>
        <Footer />
    </>
  )
}
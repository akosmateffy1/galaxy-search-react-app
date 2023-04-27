import React from 'react'
import Footer from '../components/footer/Footer'
import HeroPhoto from '../components/hero-picture/HeroPhoto'
import Navbar from '../components/navbar/Navbar'
import Galaxy from '../components/Galaxy/Galaxy'

export default function PlanetsSearch(){
  return (
    <>
        <Navbar />
        <HeroPhoto 
          heading='Bólygok keresése' 
          text='Nézelődj az Univerzumba'
        />
        <Galaxy />
        <Footer />
    </>
  )
}

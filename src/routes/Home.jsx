import React from 'react'
import Eartch from '../components/eartch/Eartch'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import Planets from '../components/planets/Planets'
import Mars from '../components/tutorial/Mars'
import Subscribe from '../components/subscribe/Subscribe'
export default function Home(){
  return (
    <>
        <Navbar />
        <Hero />
        <Planets />
        <Eartch />
        <Subscribe />
        <Mars />
        <Footer />
    </>
  )
}
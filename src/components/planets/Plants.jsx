
import React from 'react'
import Earth from '../../assets/planets/earth.png'
import Jupiter from '../../assets/planets/jupiter.png'
import Saturn from '../../assets/planets/saturn.png'
import Neptune from '../../assets/planets/neptune.png'
import Mercury from '../../assets/planets/mercury.png'
import Venus from '../../assets/planets/venus.png'
import Uranus from '../../assets/planets/uranus.png'
import Mars from '../../assets/planets/mars.png'
import './PlantsStyles.css'

export default function Plants(){
  return (
    <div className='row row-cols-6'>
      <img className='col' src={Earth} alt="/" />
      <img className='col' src={Jupiter} alt="/" />
      <img className='col' src={Saturn} alt="/" />
      <img className='col' src={Neptune} alt="/" />
      <img className='col' src={Mercury} alt="/" />
      <img className='col' src={Venus} alt="/" />
      <img className='col' src={Uranus} alt="/" />
      <img className='col' src={Mars} alt="/" />
    </div>
  )
}


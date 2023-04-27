import React from 'react'
import './PlantsStyles.css'
import Plants from './Plants'


const Planets = () => {

  return (
    <div 
      className='planet' 
      style={{
          backgroundColor:'black',
          paddingTop: '40px',  
        }}
    >
        <div className='container-fluid' style={{textAlign: 'center', justifyContent: 'center'}}>
          <Plants />
        </div>
    </div>
  )
}

export default Planets


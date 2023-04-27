import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className='row g-3 align-items-center'>
           <div className="col-auto">
              <h1>Iratkozzon fel hírlevelünkre!</h1>
           </div>
           <div className="col-auto">
                <input 
                    type="text" 
                    className='input-email' 
                    placeholder='Email cím'
                />
           </div>
           <div className="col-auto">
                <input 
                    type="text" 
                    className='input-name' 
                    placeholder='Név'
                />
           </div>
           <div className="col-auto">
                <button className='btn-subscribe'>
                    Feliratkozás
                </button>
           </div>
        </div>
    </div>
  )
}

export default Subscribe
import React, { useEffect } from 'react'

export default function Galaxy(){
  
    useEffect(() => {
      const aladin = window.A.aladin(
        '#aladin-lite-div', { 
          survey: 'P/DSS2/color', fov:60 
        }
      )
      aladin.setFov(1)
  }, [])

  return (
    <div style={{
        backgroundColor: 'black',
        padding:'10px',
        height:'100vh',
        justifyContent:'center',
        alignItems:'center',
        display:'flex'
      }}
    >
      <div className="container">
          <div 
            id='aladin-lite-div' 
            style={{ 
              width: '100%', 
              height: '80vh',
              border: 'none'
            }}
          >
        </div>
      </div>
    </div>
  )
}

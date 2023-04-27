import React from 'react'
import './SmartStyle.css'

const SmallPCard = ({ item }) => {

  return (
    <div className='card' key={item.id}>
        <div className="card-body">
            <div className="card-image">
                <img 
                    className='card-img-top'
                    alt="" 
                    src={item.url}
                />
            </div>
            <div>
                <h3 className="card-title">{item.name}</h3>
                <p className="description">Tömeg: 
                    <span>{item.constellation}</span>milliárd kg
                </p>
                <p className="description">Sugár: 
                    <span>{item.right_ascension}</span>km
                
                </p>
                <p className="description">Keringési periódus: 
                    <span>{item.declination}</span>nap
                </p>
                <p className="description">Fél főtengely:
                    <span>{item.apparent_magnitude}</span>
                </p>
                <p className='description'>Hőmérséklet: 
                     <span>{item.absolute_magnitude}</span>°C
                </p>
                <p className="description">Bolygót befogadó csillag: 
                    <span>{item.distance_light_year}</span>
                </p>
                <p className='description'>Gazdatest csillag hőmérséklete: 
                <span>{item.spectral_class}</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default SmallPCard
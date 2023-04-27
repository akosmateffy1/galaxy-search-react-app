import React from 'react'
import './PlanetsListStyle.css'

export default function PlanetsCard({ item }){
  return (
    <div className='card' >
        <div className="card-body" key={item.id}>
            <div className="card-image">
                <img 
                    className='card-img-top'
                    alt="/" 
                    src={item.url}
                />
            </div>
            <div>
                <h3 className="card-title">{item.name}</h3>
                <p className="description">Tömeg: 
                    <span>{item.mass}</span>milliárd kg
                </p>
                <p className="description">Sugár: 
                    <span>{item.radius}</span>km 
                </p>
                <p className="description">Keringési periódus: 
                    <span>{item.period}</span>nap
                </p>
                <p className="description">Fél főtengely:
                    <span>{item.semi_major_axis}</span>
                </p>
                <p className='description'>Hőmérséklet: 
                     <span>{item.temperature}</span>°C
                </p>
                <p className="description">Bolygót befogadó csillag: 
                    <span>{item.host_star_mass}</span>
                </p>
                <p className="description">Fényév távolság: 
                    <span>{item.distance_light_year}</span>
                </p>
                <p className='description'>Gazdatest csillag hőmérséklete: 
                    <span>{item.host_star_temperature}</span>
                </p>
            </div>
        </div>
    </div>
  )
}

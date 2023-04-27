import React, {useState, useEffect} from 'react'
import PlanetsCard from './PlanetsCard'
import './PlanetsListStyle.css'
import {plantslist} from '../../data'

export default function PlanetsList(){

  const [item, setItem] = useState({name: 'all'});
  const [planetsCard, setPlanetsCard] = useState([]);
  const [search, setSearch] = useState('')
        
  useEffect(() => {
    if (item.name === 'all') {
      setPlanetsCard(plantslist);
    } else {
      const newPlanetsCard = plantslist.filter((planetsCard) => {
        return planetsCard.toLowerCase() === item.name;
      });
      setPlanetsCard(newPlanetsCard)
    }
  }, [item]);

  return (
    <div className='planetslist'>
      <div className='container' style={{padding:'20px'}}>
        <div className="input-group">
          <input 
              className='form-control'
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Bolygó keresés" 
              style={{
                height: '60px',
                backgroundColor: '#fff',
                color: '#000',
                textAlign:'center',
                borderRadius: '10px',
                border: 'none' ,
                fontSize:'25px',
                justifyContent:'center',
                padding:'10px',
                alignItems:'center'
              }}
            />
        </div>
      </div>

      <div className="home-cards">
        {plantslist.filter((item) => {
          return search.toLowerCase() === ''
            ? item : item.name.toLowerCase().includes(search)
          })
          .map((item, index) => (
            <PlanetsCard
              item={item} 
              key={item.id} 
            />            
          ))
        }
      </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import {starslist} from '../../data'
import SmallPCard from './SmallPCard'

export default function SmallPlants(){

  const [item, setItem] = useState({name: 'all'});
  const [smallpcard, setSmallPCard] = useState([]);
  const [search, setSearch] = useState('')
        
  useEffect(() => {
    if (item.name === 'all') {
      setSmallPCard(starslist);
    } else {
      const newSmallPCard = starslist.filter((smallpcard) => {
        return smallpcard.toLowerCase() === item.name;
      });
      setSmallPCard(newSmallPCard)
    }
  }, [item]);

  return (
    <div className='planetslist'>
      <div className="container"  style={{padding:'20px'}}>
        <div className="input-group">
          <input 
            className='form-control'
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Csillag keresés'
            style={{
                height: '60px',
                backgroundColor: '#fff',
                color: '#000',
                borderRadius: '10px',
                border: 'none' ,
                fontSize:'25px' 
              }}
          />
        </div>
      </div>

      <div className="home-cards">
        {starslist.filter((item) => {
          return search.toLowerCase() === ''
            ? item : item.name.toLowerCase().includes(search)
        })
          .map((item, index) => (
            <SmallPCard 
              item={item} 
              key={item.id} 
            />            
          ))
        }
      </div>
    </div>
  )
}

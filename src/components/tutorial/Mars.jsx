import React from 'react'
import './MarsStyle.css'
import PillarsOfCreation from  '../../assets/pillars_of_creation.jpg'

const Mars = () => {
  return (
    <div className='mars'>
        <div className="container" >

            <div className="left">
                <h1>Teremtés oszlopai</h1>
                <p>A James Webb űrteleszkóp, amelyet 2021-ben indítottak el, forradalmi felfedezésekre készül az univerzumban. Az egyik legérdekesebb célja az univerzum teremtésének vizsgálata, és a korai galaxisok és csillagok kutatása. Az űrteleszkóp azonban nem csak a távoli múltba tekint vissza, hanem az univerzum jelenének megértésében is segít. Egy érdekfeszítő felfedezés, amelyre a James Webb képes lehet, az ún. "teremtés oszlopának" megfigyelése.</p>
                <p>A teremtés oszlopa egy lenyűgöző jelenség, amelyet korábban a Hubble űrteleszkóp fedezett fel. Ez az oszlop egy vastag gázoszlop, amely a Nagy Magellán-felhőben található, és amelynek látszólagos mérete több mint 3 fényév. Az oszlopban láthatóak fiatal csillagok és csillagkeletkezési régiók, amelyek az univerzum kezdeti időszakára utalnak.</p>
                <p>A James Webb űrteleszkóp rendkívül érzékeny műszerekkel és infravörös képességekkel rendelkezik, amelyek lehetővé teszik az ilyen teremtési régiók részletesebb vizsgálatát. Remélhetőleg a teremtés oszlopának vizsgálata segíthet megérteni az univerzum korai időszakait és a csillag- és galaxiskeletkezés folyamatát. A James Webb űrteleszkóp éppen azért készült, hogy ilyen új felfedezéseket hozzon létre, és elénk tárja az univerzum eddig ismeretlen területeit.</p>
            </div>

            <div className='right'>
                <div className="img">
                    <img 
                        src={PillarsOfCreation}
                        alt="/" 
                        className='img'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mars
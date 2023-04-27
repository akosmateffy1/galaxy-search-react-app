import React from 'react'
import MarsJaro from '../../assets/mars/marsjaro.jpg'
import './EarthStyles.css'

export default function Eartch(){
    return (
        <div className='earth'>
            <div className='container' style={{textAlign: 'center', justifyContent: 'center', alignItems:'center'}}>
                <div className="left" >
                    <div className="image-container">
                        <img 
                            src={MarsJaro} 
                            alt="/" 
                            className='img'    
                        />
                    </div>
                </div>
                <div className="right">
                    <h1>Üdvözöllek!</h1>
                    <p>A csillagászat rajongóinak szánt weboldal bemutató oldalán! Ez a weboldal számos érdekes és hasznos információval 
                    szolgál minden olyan személy számára, aki a csillagászattal kapcsolatos tudást szeretne bővíteni vagy csak érdekli az univerzum és a bolygók világa.</p>
                    <p>A weboldalon szerepelnek az összes bolygó és csillag neve, adatai és tulajdonságai. Rá lehet keresni minden bolygóra és csillagra név szerint. Az adatbázis folyamatosan frissül, így mindig az aktuális információk találhatók meg rajta.</p>
                    <p>A weboldalon lehetőség van egy csillagász térkép megtekintésére, amely megmutatja az összes csillagot az univerzumban. A térkép segítségével bármilyen időpontban meg lehet tekinteni az égboltot és megtudni, hogy mely csillagok és bolygók láthatók a Földről. Az interaktív térkép lehetővé teszi a felhasználók számára, hogy nagyítani és kicsinyíteni tudják az égboltot, valamint kiválaszthatják az érdeklődési területükhöz legközelebbi csillagokat.</p>
                </div>
            </div>
        </div>
      )
}

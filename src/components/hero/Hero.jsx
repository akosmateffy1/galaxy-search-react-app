import React from 'react'
import {Link} from 'react-router-dom'
import './HeroStyles.css'
import HeroVideo from '../../assets/Hero/HeroVideo.mp4'

const Hero = () => {
    return(
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={HeroVideo} type='video/mp4' />
            </video>
            <div className="content">
                <h1>Nézd meg a bólygokat</h1>
                <p>World's first civilian space travel.</p>
                <div>
                    <Link to='/planets' className='btn1'>Bólygok</Link>
                    <Link to='/planetssearch' className='btn1 btn-light'>Keresés</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
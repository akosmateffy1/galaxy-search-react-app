import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import {ImEarth} from 'react-icons/im'
import './NavbarStyles.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
        const changeColor =() => {
            if(window.scrollY >= 100){
                setColor(true)
            } else {
                setColor(false)
            }
        }
        window.addEventListener('scroll', changeColor)
  return (
    <div className={color ? 'header header-bg' : 'header'} >
            <Link 
                style={{textDecoration:'none', color:'#fff'}} 
                to='/'
            >
                <h1 className='text'>PlanetSearch<ImEarth size={30} /></h1>
            </Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li >
               <Link style={{color:'#fff', textDecoration: 'none'}} to='/'>Főoldal</Link>
            </li>
            <li>
                <Link style={{color:'#fff', textDecoration: 'none'}} to='/planets'>Bolygók</Link>
            </li>
            <li>
                <Link style={{color:'#fff', textDecoration: 'none'}} to='/stars'>Csillagok</Link>
            </li>
            <li>
                <Link style={{color:'#fff', textDecoration: 'none'}} to='/planetssearch'>Bolygók keresés</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
    
        </div>
    </div>
  )
}

export default Navbar
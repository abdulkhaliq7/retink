import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 79 ) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <Link to='/' className='navbar-logo'>
                    Poverty Interventions
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick=
                        {closeMobileMenu}> 
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/who-we-are' className='nav-links' onClick=
                        {closeMobileMenu}> 
                            Who we are
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/interventions' className='nav-links' onClick=
                        {closeMobileMenu}> 
                            Interventions
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links' onClick=
                        {closeMobileMenu}> 
                            Contact Us
                        </Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link to='/resources' className='nav-links' onClick=
                        {closeMobileMenu}> 
                            Resources
                        </Link>
                    </li> */}
                </ul>
            </nav>
        </>
    )
}

export default Navbar
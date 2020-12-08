import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import '../static/css/Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)
  // const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false)
  //   } else {
  //     setButton(true)
  //   }
  // }

  // useEffect(() => {
  //   showButton()
  // }, [])

  // window.addEventListener('resize', showButton)

  return (
    <>
      <nav className='navbar-custom'>
        <div className='navbar-container-custom'>
          <Link to='/' className='navbar-logo-custom' onClick={closeMobileMenu}>
            RJBC - DEV
            {/* <i class='fab fa-typo3' /> */}
          </Link>
          <div className='menu-icon-custom' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu-custom active' : 'nav-menu-custom'}>
            <li className='nav-item-custom'>
              <Link
                to='/'
                className='nav-links-custom'
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className='nav-item-custom'>
              <Link
                to='/projects'
                className='nav-links-custom'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                Blog
              </Link>
            </li> */}

            {/* <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  )
}

export default Navbar

import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

import '../styles/components/navbar.css'
const Navigationbar = () => {
  return (
    <Navbar
      style={{ backgroundColor: '#24285e' }}
      collapseOnSelect
      expand='lg'
      variant='dark'
    >
      <Navbar.Brand>
        <Container>
          {' '}
          <div className='social-icons'>
            <a
              className='social-icon-link twitter'
              href='https://www.linkedin.com/in/reuben-joseph-cabrera-b46420132/'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
            <a
              className='social-icon-link github'
              href='https://github.com/rbcabreraUPM'
              aria-label='LinkedIn'
            >
              <i className='fab fa-github' />
            </a>
            <a
              className='social-icon-link github'
              href='mailto:rbcabrera1@up.edu.ph'
            >
              <i class='fas fa-envelope'></i>
            </a>
          </div>
        </Container>
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'></Nav>
        <Nav>
          <Nav.Link href='#deets'>About</Nav.Link>
          <Nav.Link href='#memes'></Nav.Link>
        </Nav>
      </Navbar.Collapse> */}
    </Navbar>
  )
}

export default Navigationbar

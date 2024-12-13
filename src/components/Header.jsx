import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>

<Navbar className="bg-success">
        <Container className='ms-4' style={{height:'50px'}}>
         <Link to={'/'}>
              <Navbar.Brand href="#home" style={{color:'black'}}>
              <i className="fa-solid fa-music me-3 fs-4" ></i>
                <h4 className='d-inline'>Media Player</h4>
              </Navbar.Brand>
         </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
import { React } from "react";
import "./Nav.css"  
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container style={{display:"flex"}}>
          <Navbar.Text >Abdullah Shaghnoba</Navbar.Text>
          <Nav  className="me-auto" style={{display:"flex"}}>
            <Link to='/' >Home</Link>
            <Link to='/FavList'>Favorite List</Link>
          </Nav>
        </Container>
      </Navbar>




    </div>
  )
}
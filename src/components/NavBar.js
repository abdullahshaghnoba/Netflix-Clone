
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container style={{display:"flex"}}>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/' >Home</Link>
            <Link to='/FavList'>Favorite List</Link>
          </Nav>
        </Container>
      </Navbar>




    </div>
  )
}
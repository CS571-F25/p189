import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoRestaurant, IoHome, IoStar, IoInformationCircle } from 'react-icons/io5';

export default function Navigation() {
    return (
        <Navbar expand="lg" fixed="top" className="mb-4">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <IoRestaurant style={{ marginRight: '8px', fontSize: '1.3rem' }} />
                    Rate the Plate
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">
                            <IoHome style={{ marginRight: '6px', fontSize: '1.1rem' }} />
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/favorites">
                            <IoStar style={{ marginRight: '6px', fontSize: '1.1rem' }} />
                            My Favorites
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about">
                            <IoInformationCircle style={{ marginRight: '6px', fontSize: '1.1rem' }} />
                            About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


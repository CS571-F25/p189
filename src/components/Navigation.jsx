import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <Navbar expand="lg" fixed="top" className="mb-4">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    🍽️ Rate the Plate
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">
                            🏠 Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/favorites">
                            ⭐ My Favorites
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about">
                            ℹ️ About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


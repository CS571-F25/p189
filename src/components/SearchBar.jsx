import { Form } from 'react-bootstrap';
import { IoSearch } from 'react-icons/io5';

export default function SearchBar({ searchTerm, onSearchChange }) {
    return (
        <Form.Group>
            <Form.Label htmlFor="search-input">
                <IoSearch style={{ marginRight: '6px' }} />
                Search by Name
            </Form.Label>
            <Form.Control
                id="search-input"
                type="text"
                placeholder="Search dishes..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                aria-label="Search dishes by name"
            />
        </Form.Group>
    );
}


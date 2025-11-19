import { useState } from 'react';
import { Container, Row, Col, Form, Button, ButtonGroup } from 'react-bootstrap';
import FoodCard from './FoodCard';
import FoodForm from './FoodForm';
import Navigation from './Navigation';

export default function Home({ entries, onAddEntry, onToggleFavorite }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('date');
    const [showForm, setShowForm] = useState(false);

    // Filter entries by search term
    const filteredEntries = entries.filter(entry =>
        entry.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort entries
    const sortedEntries = [...filteredEntries].sort((a, b) => {
        if (sortBy === 'date') {
            return new Date(b.dateCreated) - new Date(a.dateCreated);
        } else if (sortBy === 'rating') {
            // Handle different rating types
            const getRatingValue = (entry) => {
                if (entry.ratingType === 'stars') return entry.rating;
                if (entry.ratingType === 'numeric') return entry.rating;
                if (entry.ratingType === 'emoji') {
                    const emojiValues = { sad: 1, bored: 2, smile: 3 };
                    return emojiValues[entry.rating] || 0;
                }
                return 0;
            };
            return getRatingValue(b) - getRatingValue(a);
        } else if (sortBy === 'favorites') {
            return (b.isFavorite ? 1 : 0) - (a.isFavorite ? 1 : 0);
        }
        return 0;
    });

    return (
        <>
            <Navigation />
            <Container>
                <h1 className="mb-4">🍽️ Rate the Plate</h1>

                <Button
                    variant="success"
                    className="mb-4"
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? 'Hide Form' : '+ Add New Entry'}
                </Button>

                {showForm && (
                    <FoodForm onAddEntry={(entry) => {
                        onAddEntry(entry);
                        setShowForm(false);
                    }} />
                )}

                <Row className="mb-4">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Search by Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Search dishes..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Sort By</Form.Label>
                            <ButtonGroup className="d-block">
                                <Button
                                    variant={sortBy === 'date' ? 'primary' : 'outline-primary'}
                                    onClick={() => setSortBy('date')}
                                >
                                    Date
                                </Button>
                                <Button
                                    variant={sortBy === 'rating' ? 'primary' : 'outline-primary'}
                                    onClick={() => setSortBy('rating')}
                                >
                                    Rating
                                </Button>
                                <Button
                                    variant={sortBy === 'favorites' ? 'primary' : 'outline-primary'}
                                    onClick={() => setSortBy('favorites')}
                                >
                                    Favorites First
                                </Button>
                            </ButtonGroup>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    {sortedEntries.length === 0 ? (
                        <Col>
                            <p className="text-muted">No entries found. Add your first dish!</p>
                        </Col>
                    ) : (
                        sortedEntries.map(entry => (
                            <Col key={entry.id} md={6} lg={4}>
                                <FoodCard
                                    entry={entry}
                                    onToggleFavorite={onToggleFavorite}
                                />
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </>
    );
}
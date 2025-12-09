import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { IoRestaurant, IoSparkles, IoClose, IoAdd } from 'react-icons/io5';
import FoodForm from './FoodForm';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import SortButtons from './SortButtons';
import FoodList from './FoodList';

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
                <h1 className="page-title mb-4">
                    <IoRestaurant style={{ marginRight: '12px' }} />
                    Rate the Plate
                </h1>
                <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>
                    <IoSparkles style={{ marginRight: '8px' }} />
                    Your personal food journal for culinary adventures!
                    <IoSparkles style={{ marginLeft: '8px' }} />
                </p>

                <Button
                    variant="success"
                    className="mb-4"
                    onClick={() => setShowForm(!showForm)}
                    aria-expanded={showForm}
                    style={{ fontSize: '1.1rem', padding: '0.75rem 2rem' }}
                >
                    {showForm ? (
                        <>
                            <IoClose style={{ marginRight: '8px', fontSize: '1.3rem' }} />
                            Hide Form
                        </>
                    ) : (
                        <>
                            <IoAdd style={{ marginRight: '8px', fontSize: '1.3rem' }} />
                            Add New Entry
                        </>
                    )}
                </Button>

                {showForm && (
                    <FoodForm onAddEntry={(entry) => {
                        onAddEntry(entry);
                        setShowForm(false);
                    }} />
                )}

                <Row className="mb-4">
                    <Col md={6}>
                        <SearchBar
                            searchTerm={searchTerm}
                            onSearchChange={setSearchTerm}
                        />
                    </Col>
                    <Col md={6}>
                        <SortButtons
                            sortBy={sortBy}
                            onSortChange={setSortBy}
                        />
                    </Col>
                </Row>

                <FoodList
                    entries={sortedEntries}
                    onToggleFavorite={onToggleFavorite}
                />
            </Container>
        </>
    );
}
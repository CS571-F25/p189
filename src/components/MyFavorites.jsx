import { Container, Row, Col } from 'react-bootstrap';
import FoodCard from './FoodCard';
import Navigation from './Navigation';

export default function MyFavorites({ entries, onToggleFavorite }) {
    const favoriteEntries = entries.filter(entry => entry.isFavorite);

    return (
        <>
            <Navigation />
            <Container>
                <h1 className="page-title mb-4">⭐ My Favorites</h1>
                <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>
                    ❤️ Your most loved dishes all in one place! ❤️
                </p>

                <Row>
                    {favoriteEntries.length === 0 ? (
                        <Col>
                            <div style={{
                                background: 'linear-gradient(135deg, #FFD6E8 0%, #E6D5F5 100%)',
                                padding: '3rem',
                                borderRadius: '20px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>⭐</div>
                                <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '0' }}>
                                    No favorites yet! Click the star icon ⭐ on any dish to add it to your favorites.
                                </p>
                            </div>
                        </Col>
                    ) : (
                        favoriteEntries.map(entry => (
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


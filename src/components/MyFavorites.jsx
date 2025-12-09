import { Container, Row, Col } from 'react-bootstrap';
import { IoStar, IoHeart } from 'react-icons/io5';
import FoodCard from './FoodCard';
import Navigation from './Navigation';

export default function MyFavorites({ entries, onToggleFavorite }) {
    const favoriteEntries = entries.filter(entry => entry.isFavorite);

    return (
        <>
            <Navigation />
            <Container>
                <h1 className="page-title mb-4">
                    <IoStar style={{ marginRight: '12px' }} />
                    My Favorites
                </h1>
                <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>
                    <IoHeart style={{ marginRight: '8px' }} />
                    Your most loved dishes all in one place!
                    <IoHeart style={{ marginLeft: '8px' }} />
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
                                <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>
                                    <IoStar />
                                </div>
                                <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '0' }}>
                                    No favorites yet! Click the star icon on any dish to add it to your favorites.
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


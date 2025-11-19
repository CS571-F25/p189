import { Container, Row, Col } from 'react-bootstrap';
import FoodCard from './FoodCard';
import Navigation from './Navigation';

export default function MyFavorites({ entries, onToggleFavorite }) {
    const favoriteEntries = entries.filter(entry => entry.isFavorite);

    return (
        <>
            <Navigation />
            <Container>
                <h1 className="mb-4">⭐ My Favorites</h1>
                
                <Row>
                    {favoriteEntries.length === 0 ? (
                        <Col>
                            <p className="text-muted">
                                No favorites yet! Click the star icon on any dish to add it to your favorites.
                            </p>
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


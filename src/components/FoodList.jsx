import { Row, Col } from 'react-bootstrap';
import FoodCard from './FoodCard';

export default function FoodList({ entries, onToggleFavorite, onDeleteEntry }) {
    if (entries.length === 0) {
        return (
            <Row>
                <Col>
                    <p className="text-muted">No entries found. Add your first dish!</p>
                </Col>
            </Row>
        );
    }

    return (
        <Row>
            {entries.map(entry => (
                <Col key={entry.id} md={6} lg={4}>
                    <FoodCard
                        entry={entry}
                        onToggleFavorite={onToggleFavorite}
                        onDeleteEntry={onDeleteEntry}
                    />
                </Col>
            ))}
        </Row>
    );
}


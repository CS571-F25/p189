import { Form, ButtonGroup, Button } from 'react-bootstrap';

export default function SortButtons({ sortBy, onSortChange }) {
    return (
        <Form.Group>
            <Form.Label>📊 Sort By</Form.Label>
            <ButtonGroup className="d-block" role="group" aria-label="Sort options">
                <Button
                    variant={sortBy === 'date' ? 'primary' : 'outline-primary'}
                    onClick={() => onSortChange('date')}
                    aria-pressed={sortBy === 'date'}
                >
                    📅 Date
                </Button>
                <Button
                    variant={sortBy === 'rating' ? 'primary' : 'outline-primary'}
                    onClick={() => onSortChange('rating')}
                    aria-pressed={sortBy === 'rating'}
                >
                    ⭐ Rating
                </Button>
                <Button
                    variant={sortBy === 'favorites' ? 'primary' : 'outline-primary'}
                    onClick={() => onSortChange('favorites')}
                    aria-pressed={sortBy === 'favorites'}
                >
                    ❤️ Favorites First
                </Button>
            </ButtonGroup>
        </Form.Group>
    );
}


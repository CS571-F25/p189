import { Form, ButtonGroup, Button } from 'react-bootstrap';
import { IoBarChart, IoCalendar, IoStar, IoHeart } from 'react-icons/io5';

export default function SortButtons({ sortBy, onSortChange }) {
    return (
        <Form.Group>
            <Form.Label>
                <IoBarChart style={{ marginRight: '6px' }} />
                Sort By
            </Form.Label>
            <ButtonGroup className="d-block" role="group" aria-label="Sort options">
                <Button
                    variant={sortBy === 'date' ? 'primary' : 'outline-primary'}
                    onClick={() => onSortChange('date')}
                    aria-pressed={sortBy === 'date'}
                >
                    <IoCalendar style={{ marginRight: '6px' }} />
                    Date
                </Button>
                <Button
                    variant={sortBy === 'rating' ? 'primary' : 'outline-primary'}
                    onClick={() => onSortChange('rating')}
                    aria-pressed={sortBy === 'rating'}
                >
                    <IoStar style={{ marginRight: '6px' }} />
                    Rating
                </Button>
                <Button
                    variant={sortBy === 'favorites' ? 'primary' : 'outline-primary'}
                    onClick={() => onSortChange('favorites')}
                    aria-pressed={sortBy === 'favorites'}
                >
                    <IoHeart style={{ marginRight: '6px' }} />
                    Favorites First
                </Button>
            </ButtonGroup>
        </Form.Group>
    );
}


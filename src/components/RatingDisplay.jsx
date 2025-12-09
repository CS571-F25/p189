import { Badge } from 'react-bootstrap';

export default function RatingDisplay({ ratingType, rating }) {
    if (ratingType === 'stars') {
        return (
            <div className="mb-2" aria-label={`Rating: ${rating} out of 5 stars`}>
                {'⭐'.repeat(rating)} ({rating}/5)
            </div>
        );
    } else if (ratingType === 'numeric') {
        return (
            <div className="mb-2">
                <Badge bg="primary" aria-label={`Rating: ${rating} out of 10`}>
                    {rating}/10
                </Badge>
            </div>
        );
    } else if (ratingType === 'emoji') {
        const emojis = { sad: '😢', bored: '😐', smile: '😊' };
        const emojiLabels = { sad: 'Sad', bored: 'Neutral', smile: 'Happy' };
        return (
            <div className="mb-2" style={{ fontSize: '2rem' }} aria-label={`Rating: ${emojiLabels[rating]}`}>
                {emojis[rating]}
            </div>
        );
    }
    return null;
}


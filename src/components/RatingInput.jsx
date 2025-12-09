import { Form } from 'react-bootstrap';

export default function RatingInput({ ratingType, rating, onRatingChange }) {
    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label>Rating Type</Form.Label>
                <div role="group" aria-label="Rating type selection">
                    <Form.Check
                        inline
                        type="radio"
                        label="Stars (out of 5)"
                        id="rating-type-stars"
                        name="ratingType"
                        checked={ratingType === 'stars'}
                        onChange={() => onRatingChange('stars', 5)}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Numeric (out of 10)"
                        id="rating-type-numeric"
                        name="ratingType"
                        checked={ratingType === 'numeric'}
                        onChange={() => onRatingChange('numeric', 10)}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Emoji"
                        id="rating-type-emoji"
                        name="ratingType"
                        checked={ratingType === 'emoji'}
                        onChange={() => onRatingChange('emoji', 'smile')}
                    />
                </div>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="rating-value">Rating</Form.Label>
                {ratingType === 'stars' && (
                    <Form.Range
                        id="rating-value"
                        name="rating"
                        min="1"
                        max="5"
                        value={rating}
                        onChange={(e) => onRatingChange(ratingType, e.target.value)}
                        aria-label={`Rating: ${rating} out of 5 stars`}
                    />
                )}
                {ratingType === 'numeric' && (
                    <Form.Range
                        id="rating-value"
                        name="rating"
                        min="1"
                        max="10"
                        value={rating}
                        onChange={(e) => onRatingChange(ratingType, e.target.value)}
                        aria-label={`Rating: ${rating} out of 10`}
                    />
                )}
                {ratingType === 'emoji' && (
                    <div role="group" aria-label="Emoji rating selection">
                        <Form.Check
                            inline
                            type="radio"
                            label="😢"
                            id="emoji-sad"
                            name="emojiRating"
                            checked={rating === 'sad'}
                            onChange={() => onRatingChange(ratingType, 'sad')}
                            style={{ fontSize: '2rem' }}
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="😐"
                            id="emoji-bored"
                            name="emojiRating"
                            checked={rating === 'bored'}
                            onChange={() => onRatingChange(ratingType, 'bored')}
                            style={{ fontSize: '2rem' }}
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="😊"
                            id="emoji-smile"
                            name="emojiRating"
                            checked={rating === 'smile'}
                            onChange={() => onRatingChange(ratingType, 'smile')}
                            style={{ fontSize: '2rem' }}
                        />
                    </div>
                )}
                <Form.Text>
                    {ratingType === 'stars' && `${rating}/5 stars`}
                    {ratingType === 'numeric' && `${rating}/10`}
                </Form.Text>
            </Form.Group>
        </>
    );
}


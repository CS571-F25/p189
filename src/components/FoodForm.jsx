import { useState } from 'react';
import { Form, Button, Card, Row, Col, ButtonGroup } from 'react-bootstrap';

export default function FoodForm({ onAddEntry }) {
    const [formData, setFormData] = useState({
        name: '',
        isHomemade: true,
        recipe: '',
        instructions: '',
        recipeUrl: '',
        recipeImage: '',
        location: '',
        madeBy: '',
        externalLink: '',
        review: '',
        ratingType: 'stars',
        rating: 5,
        imageType: 'emoji',
        imageUrl: '',
        emoji: '🍕'
    });

    const foodEmojis = ['🍕', '🍔', '🍟', '🌮', '🍝', '🍜', '🍱', '🍛', '🍲', '🥗', '🍰', '🍪', '🧁', '🍩', '🥘', '🍳'];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newEntry = {
            id: Date.now(),
            ...formData,
            dateCreated: new Date().toISOString(),
            isFavorite: false
        };

        onAddEntry(newEntry);
        
        // Reset form
        setFormData({
            name: '',
            isHomemade: true,
            recipe: '',
            instructions: '',
            recipeUrl: '',
            recipeImage: '',
            location: '',
            madeBy: '',
            externalLink: '',
            review: '',
            ratingType: 'stars',
            rating: 5,
            imageType: 'emoji',
            imageUrl: '',
            emoji: '🍕'
        });
    };

    return (
        <Card className="mb-4 shadow">
            <Card.Body>
                <Card.Title>Add New Food Entry</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Dish Name *</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter dish name"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Type</Form.Label>
                        <div>
                            <Form.Check
                                inline
                                type="radio"
                                label="Homemade"
                                name="isHomemade"
                                checked={formData.isHomemade}
                                onChange={() => setFormData(prev => ({ ...prev, isHomemade: true }))}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="Restaurant/Other"
                                name="isHomemade"
                                checked={!formData.isHomemade}
                                onChange={() => setFormData(prev => ({ ...prev, isHomemade: false }))}
                            />
                        </div>
                    </Form.Group>

                    {formData.isHomemade ? (
                        <>
                            <Form.Group className="mb-3">
                                <Form.Label>Recipe</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="recipe"
                                    value={formData.recipe}
                                    onChange={handleChange}
                                    placeholder="Enter recipe ingredients"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Instructions</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="instructions"
                                    value={formData.instructions}
                                    onChange={handleChange}
                                    placeholder="Enter cooking instructions"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Recipe URL/Video Link</Form.Label>
                                <Form.Control
                                    type="url"
                                    name="recipeUrl"
                                    value={formData.recipeUrl}
                                    onChange={handleChange}
                                    placeholder="https://..."
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Recipe Image URL</Form.Label>
                                <Form.Control
                                    type="url"
                                    name="recipeImage"
                                    value={formData.recipeImage}
                                    onChange={handleChange}
                                    placeholder="https://..."
                                />
                            </Form.Group>
                        </>
                    ) : (
                        <>
                            <Form.Group className="mb-3">
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="Restaurant name or location"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Made By</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="madeBy"
                                    value={formData.madeBy}
                                    onChange={handleChange}
                                    placeholder="Who made this?"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Restaurant/Social Media Link</Form.Label>
                                <Form.Control
                                    type="url"
                                    name="externalLink"
                                    value={formData.externalLink}
                                    onChange={handleChange}
                                    placeholder="https://..."
                                />
                            </Form.Group>
                        </>
                    )}

                    <Form.Group className="mb-3">
                        <Form.Label>Review</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={2}
                            name="review"
                            value={formData.review}
                            onChange={handleChange}
                            placeholder="Write your review..."
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Rating Type</Form.Label>
                        <div>
                            <Form.Check
                                inline
                                type="radio"
                                label="Stars (out of 5)"
                                checked={formData.ratingType === 'stars'}
                                onChange={() => setFormData(prev => ({ ...prev, ratingType: 'stars', rating: 5 }))}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="Numeric (out of 10)"
                                checked={formData.ratingType === 'numeric'}
                                onChange={() => setFormData(prev => ({ ...prev, ratingType: 'numeric', rating: 10 }))}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="Emoji"
                                checked={formData.ratingType === 'emoji'}
                                onChange={() => setFormData(prev => ({ ...prev, ratingType: 'emoji', rating: 'smile' }))}
                            />
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Rating</Form.Label>
                        {formData.ratingType === 'stars' && (
                            <Form.Range
                                name="rating"
                                min="1"
                                max="5"
                                value={formData.rating}
                                onChange={handleChange}
                            />
                        )}
                        {formData.ratingType === 'numeric' && (
                            <Form.Range
                                name="rating"
                                min="1"
                                max="10"
                                value={formData.rating}
                                onChange={handleChange}
                            />
                        )}
                        {formData.ratingType === 'emoji' && (
                            <div>
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="😢 Sad"
                                    checked={formData.rating === 'sad'}
                                    onChange={() => setFormData(prev => ({ ...prev, rating: 'sad' }))}
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="😐 Bored"
                                    checked={formData.rating === 'bored'}
                                    onChange={() => setFormData(prev => ({ ...prev, rating: 'bored' }))}
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="😊 Smile"
                                    checked={formData.rating === 'smile'}
                                    onChange={() => setFormData(prev => ({ ...prev, rating: 'smile' }))}
                                />
                            </div>
                        )}
                        <Form.Text>
                            {formData.ratingType === 'stars' && `${formData.rating}/5 stars`}
                            {formData.ratingType === 'numeric' && `${formData.rating}/10`}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Image Type</Form.Label>
                        <div>
                            <Form.Check
                                inline
                                type="radio"
                                label="Emoji"
                                checked={formData.imageType === 'emoji'}
                                onChange={() => setFormData(prev => ({ ...prev, imageType: 'emoji' }))}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="Upload URL"
                                checked={formData.imageType === 'upload'}
                                onChange={() => setFormData(prev => ({ ...prev, imageType: 'upload' }))}
                            />
                        </div>
                    </Form.Group>

                    {formData.imageType === 'emoji' ? (
                        <Form.Group className="mb-3">
                            <Form.Label>Select Emoji</Form.Label>
                            <div>
                                {foodEmojis.map(emoji => (
                                    <Button
                                        key={emoji}
                                        variant={formData.emoji === emoji ? 'primary' : 'outline-secondary'}
                                        className="m-1"
                                        style={{ fontSize: '1.5rem' }}
                                        onClick={() => setFormData(prev => ({ ...prev, emoji }))}
                                        type="button"
                                    >
                                        {emoji}
                                    </Button>
                                ))}
                            </div>
                        </Form.Group>
                    ) : (
                        <Form.Group className="mb-3">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="url"
                                name="imageUrl"
                                value={formData.imageUrl}
                                onChange={handleChange}
                                placeholder="https://..."
                            />
                        </Form.Group>
                    )}

                    <Button variant="primary" type="submit" className="w-100">
                        Add Entry
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}


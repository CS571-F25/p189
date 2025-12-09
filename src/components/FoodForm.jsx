import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import RatingInput from './RatingInput';
import ImageSelector from './ImageSelector';

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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleRatingChange = (ratingType, rating) => {
        setFormData(prev => ({
            ...prev,
            ratingType,
            rating
        }));
    };

    const handleImageTypeChange = (imageType) => {
        setFormData(prev => ({ ...prev, imageType }));
    };

    const handleImageUrlChange = (imageUrl) => {
        setFormData(prev => ({ ...prev, imageUrl }));
    };

    const handleEmojiChange = (emoji) => {
        setFormData(prev => ({ ...prev, emoji }));
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
        <Card
            className="mb-4"
            style={{
                background: 'linear-gradient(135deg, #FFD6E8 0%, #E6D5F5 50%, #D5E8F5 100%)',
                border: 'none'
            }}
        >
            <Card.Body style={{ background: 'white', margin: '10px', borderRadius: '15px' }}>
                <Card.Title as="h2" style={{
                    color: '#C44569',
                    fontWeight: '700',
                    fontSize: '1.8rem',
                    marginBottom: '1.5rem'
                }}>
                    ✨ Add New Food Entry
                </Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="dish-name">🍽️ Dish Name *</Form.Label>
                        <Form.Control
                            id="dish-name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter dish name"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>🏷️ Type</Form.Label>
                        <div role="group" aria-label="Dish type selection">
                            <Form.Check
                                inline
                                type="radio"
                                label="🏠 Homemade"
                                id="type-homemade"
                                name="isHomemade"
                                checked={formData.isHomemade}
                                onChange={() => setFormData(prev => ({ ...prev, isHomemade: true }))}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="🏪 Restaurant/Other"
                                id="type-restaurant"
                                name="isHomemade"
                                checked={!formData.isHomemade}
                                onChange={() => setFormData(prev => ({ ...prev, isHomemade: false }))}
                            />
                        </div>
                    </Form.Group>

                    {formData.isHomemade ? (
                        <>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="recipe">📝 Recipe</Form.Label>
                                <Form.Control
                                    id="recipe"
                                    as="textarea"
                                    rows={3}
                                    name="recipe"
                                    value={formData.recipe}
                                    onChange={handleChange}
                                    placeholder="Enter recipe ingredients"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="instructions">👨‍🍳 Instructions</Form.Label>
                                <Form.Control
                                    id="instructions"
                                    as="textarea"
                                    rows={3}
                                    name="instructions"
                                    value={formData.instructions}
                                    onChange={handleChange}
                                    placeholder="Enter cooking instructions"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="recipe-url">🔗 Recipe URL/Video Link</Form.Label>
                                <Form.Control
                                    id="recipe-url"
                                    type="url"
                                    name="recipeUrl"
                                    value={formData.recipeUrl}
                                    onChange={handleChange}
                                    placeholder="https://..."
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="recipe-image">📸 Recipe Image URL</Form.Label>
                                <Form.Control
                                    id="recipe-image"
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
                                <Form.Label htmlFor="location">📍 Location</Form.Label>
                                <Form.Control
                                    id="location"
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="Restaurant name or location"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="made-by">👨‍🍳 Made By</Form.Label>
                                <Form.Control
                                    id="made-by"
                                    type="text"
                                    name="madeBy"
                                    value={formData.madeBy}
                                    onChange={handleChange}
                                    placeholder="Who made this?"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="external-link">🔗 Restaurant/Social Media Link</Form.Label>
                                <Form.Control
                                    id="external-link"
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
                        <Form.Label htmlFor="review">💭 Review</Form.Label>
                        <Form.Control
                            id="review"
                            as="textarea"
                            rows={2}
                            name="review"
                            value={formData.review}
                            onChange={handleChange}
                            placeholder="Write your review..."
                        />
                    </Form.Group>

                    <RatingInput
                        ratingType={formData.ratingType}
                        rating={formData.rating}
                        onRatingChange={handleRatingChange}
                    />

                    <ImageSelector
                        imageType={formData.imageType}
                        imageUrl={formData.imageUrl}
                        emoji={formData.emoji}
                        onImageTypeChange={handleImageTypeChange}
                        onImageUrlChange={handleImageUrlChange}
                        onEmojiChange={handleEmojiChange}
                    />

                    <Button
                        variant="primary"
                        type="submit"
                        className="w-100"
                        style={{
                            fontSize: '1.1rem',
                            padding: '0.75rem',
                            fontWeight: '700',
                            marginTop: '1rem'
                        }}
                    >
                        ✨ Add Entry
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}


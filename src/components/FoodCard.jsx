import { useState } from 'react';
import { Card, Button, Badge, Collapse } from 'react-bootstrap';

export default function FoodCard({ entry, onToggleFavorite }) {
    const [showRecipe, setShowRecipe] = useState(false);

    const renderRating = () => {
        if (entry.ratingType === 'stars') {
            return (
                <div className="mb-2">
                    {'⭐'.repeat(entry.rating)} ({entry.rating}/5)
                </div>
            );
        } else if (entry.ratingType === 'numeric') {
            return (
                <div className="mb-2">
                    <Badge bg="primary">{entry.rating}/10</Badge>
                </div>
            );
        } else if (entry.ratingType === 'emoji') {
            const emojis = { sad: '😢', bored: '😐', smile: '😊' };
            return (
                <div className="mb-2" style={{ fontSize: '2rem' }}>
                    {emojis[entry.rating]}
                </div>
            );
        }
    };

    const renderImage = () => {
        if (entry.imageType === 'upload' && entry.imageUrl) {
            return <Card.Img variant="top" src={entry.imageUrl} alt={entry.name} style={{ height: '200px', objectFit: 'cover' }} />;
        } else if (entry.imageType === 'emoji') {
            return (
                <div style={{ fontSize: '8rem', textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa' }}>
                    {entry.emoji}
                </div>
            );
        }
    };

    return (
        <Card className="mb-3 shadow-sm">
            {renderImage()}
            <Card.Body>
                <div className="d-flex justify-content-between align-items-start">
                    <Card.Title>{entry.name}</Card.Title>
                    <Button
                        variant={entry.isFavorite ? 'warning' : 'outline-warning'}
                        size="sm"
                        onClick={() => onToggleFavorite(entry.id)}
                    >
                        {entry.isFavorite ? '⭐' : '☆'}
                    </Button>
                </div>
                
                {renderRating()}
                
                {entry.review && (
                    <Card.Text className="mb-2">
                        <strong>Review:</strong> {entry.review}
                    </Card.Text>
                )}

                {entry.isHomemade ? (
                    <>
                        <Badge bg="success" className="mb-2">Homemade</Badge>
                        {(entry.recipe || entry.instructions || entry.recipeUrl || entry.recipeImage) && (
                            <>
                                <Button
                                    variant="link"
                                    onClick={() => setShowRecipe(!showRecipe)}
                                    className="p-0 mb-2 d-block"
                                >
                                    {showRecipe ? '▼ Hide Recipe' : '▶ Show Recipe'}
                                </Button>
                                <Collapse in={showRecipe}>
                                    <div className="recipe-details p-3 bg-light rounded">
                                        {entry.recipe && (
                                            <div className="mb-2">
                                                <strong>Recipe:</strong>
                                                <p className="mb-1">{entry.recipe}</p>
                                            </div>
                                        )}
                                        {entry.instructions && (
                                            <div className="mb-2">
                                                <strong>Instructions:</strong>
                                                <p className="mb-1">{entry.instructions}</p>
                                            </div>
                                        )}
                                        {entry.recipeUrl && (
                                            <div className="mb-2">
                                                <strong>Recipe Source:</strong>{' '}
                                                <a href={entry.recipeUrl} target="_blank" rel="noopener noreferrer">
                                                    {entry.recipeUrl}
                                                </a>
                                            </div>
                                        )}
                                        {entry.recipeImage && (
                                            <div>
                                                <strong>Recipe Image:</strong>
                                                <img src={entry.recipeImage} alt="Recipe" className="img-fluid mt-2" />
                                            </div>
                                        )}
                                    </div>
                                </Collapse>
                            </>
                        )}
                    </>
                ) : (
                    <>
                        <Badge bg="info" className="mb-2">Restaurant/Other</Badge>
                        {entry.location && (
                            <Card.Text className="mb-1">
                                <strong>Location:</strong> {entry.location}
                            </Card.Text>
                        )}
                        {entry.madeBy && (
                            <Card.Text className="mb-1">
                                <strong>Made by:</strong> {entry.madeBy}
                            </Card.Text>
                        )}
                        {entry.externalLink && (
                            <div className="mt-2">
                                <Button
                                    variant="primary"
                                    size="sm"
                                    href={entry.externalLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit Link
                                </Button>
                            </div>
                        )}
                    </>
                )}

                <div className="text-muted small mt-2">
                    {new Date(entry.dateCreated).toLocaleDateString()}
                </div>
            </Card.Body>
        </Card>
    );
}


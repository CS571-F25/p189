import { Card, Button, Badge } from 'react-bootstrap';
import RatingDisplay from './RatingDisplay';
import ImageDisplay from './ImageDisplay';
import RecipeDetails from './RecipeDetails';

export default function FoodCard({ entry, onToggleFavorite }) {

    return (
        <Card className="mb-3 shadow-sm">
            <ImageDisplay
                imageType={entry.imageType}
                imageUrl={entry.imageUrl}
                emoji={entry.emoji}
                dishName={entry.name}
            />
            <Card.Body>
                <div className="d-flex justify-content-between align-items-start">
                    <Card.Title as="h2" className="h5">{entry.name}</Card.Title>
                    <Button
                        variant={entry.isFavorite ? 'warning' : 'outline-warning'}
                        size="sm"
                        onClick={() => onToggleFavorite(entry.id)}
                        aria-label={entry.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    >
                        {entry.isFavorite ? '⭐' : '☆'}
                    </Button>
                </div>

                <RatingDisplay
                    ratingType={entry.ratingType}
                    rating={entry.rating}
                />

                {entry.review && (
                    <Card.Text className="mb-2">
                        <strong>Review:</strong> {entry.review}
                    </Card.Text>
                )}

                {entry.isHomemade ? (
                    <>
                        <Badge bg="success" className="mb-2">Homemade</Badge>
                        <RecipeDetails
                            recipe={entry.recipe}
                            instructions={entry.instructions}
                            recipeUrl={entry.recipeUrl}
                            recipeImage={entry.recipeImage}
                        />
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
                    <time dateTime={entry.dateCreated}>
                        {new Date(entry.dateCreated).toLocaleDateString()}
                    </time>
                </div>
            </Card.Body>
        </Card>
    );
}


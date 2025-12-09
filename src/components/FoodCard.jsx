import { Card, Button, Badge } from 'react-bootstrap';
import { IoStar, IoStarOutline, IoChatbubble, IoHome, IoStorefront, IoLocation, IoRestaurant, IoLink, IoCalendar } from 'react-icons/io5';
import RatingDisplay from './RatingDisplay';
import ImageDisplay from './ImageDisplay';
import RecipeDetails from './RecipeDetails';

export default function FoodCard({ entry, onToggleFavorite }) {
    // Pastel gradient backgrounds for cards
    const cardGradients = [
        'linear-gradient(135deg, #FFD6E8 0%, #FFE5D5 100%)',
        'linear-gradient(135deg, #E6D5F5 0%, #D5E8F5 100%)',
        'linear-gradient(135deg, #D5F5E8 0%, #FFF5D5 100%)',
        'linear-gradient(135deg, #FFE5D5 0%, #E6D5F5 100%)',
    ];

    // Use entry ID to consistently pick a gradient
    const gradientIndex = String(entry.id).charCodeAt(0) % cardGradients.length;
    const cardStyle = {
        background: cardGradients[gradientIndex],
        border: 'none',
    };

    return (
        <Card className="mb-3" style={cardStyle}>
            <ImageDisplay
                imageType={entry.imageType}
                imageUrl={entry.imageUrl}
                emoji={entry.emoji}
                dishName={entry.name}
            />
            <Card.Body style={{ background: 'white', borderRadius: '0 0 20px 20px' }}>
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title as="h2" className="h5" style={{ color: '#C44569', fontWeight: '700' }}>
                        {entry.name}
                    </Card.Title>
                    <Button
                        variant={entry.isFavorite ? 'warning' : 'outline-warning'}
                        size="sm"
                        onClick={() => onToggleFavorite(entry.id)}
                        aria-label={entry.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                        style={{ fontSize: '1.3rem' }}
                    >
                        {entry.isFavorite ? <IoStar /> : <IoStarOutline />}
                    </Button>
                </div>

                <RatingDisplay
                    ratingType={entry.ratingType}
                    rating={entry.rating}
                />

                {entry.review && (
                    <Card.Text className="mb-3" style={{
                        background: 'linear-gradient(135deg, #FFF5F7 0%, #F0F4FF 100%)',
                        padding: '0.75rem',
                        borderRadius: '10px',
                        borderLeft: '4px solid #FFB5C5'
                    }}>
                        <strong>
                            <IoChatbubble style={{ marginRight: '6px' }} />
                            Review:
                        </strong> {entry.review}
                    </Card.Text>
                )}

                {entry.isHomemade ? (
                    <>
                        <Badge
                            bg="success"
                            className="mb-2"
                            style={{
                                background: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)',
                                fontSize: '0.9rem'
                            }}
                        >
                            <IoHome style={{ marginRight: '6px' }} />
                            Homemade
                        </Badge>
                        <RecipeDetails
                            recipe={entry.recipe}
                            instructions={entry.instructions}
                            recipeImage={entry.recipeImage}
                        />
                    </>
                ) : (
                    <>
                        <Badge
                            bg="info"
                            className="mb-2"
                            style={{
                                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                                fontSize: '0.9rem'
                            }}
                        >
                            <IoStorefront style={{ marginRight: '6px' }} />
                            Restaurant/Other
                        </Badge>
                        {entry.location && (
                            <Card.Text className="mb-1">
                                <strong>
                                    <IoLocation style={{ marginRight: '6px' }} />
                                    Location:
                                </strong> {entry.location}
                            </Card.Text>
                        )}
                        {entry.madeBy && (
                            <Card.Text className="mb-1">
                                <strong>
                                    <IoRestaurant style={{ marginRight: '6px' }} />
                                    Made by:
                                </strong> {entry.madeBy}
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
                                    <IoLink style={{ marginRight: '6px' }} />
                                    Visit Link
                                </Button>
                            </div>
                        )}
                    </>
                )}

                <div className="text-muted small mt-3" style={{
                    borderTop: '1px solid #eee',
                    paddingTop: '0.5rem'
                }}>
                    <IoCalendar style={{ marginRight: '6px' }} />
                    <time dateTime={entry.dateCreated}>
                        {new Date(entry.dateCreated).toLocaleDateString()}
                    </time>
                </div>
            </Card.Body>
        </Card>
    );
}


import { Card } from 'react-bootstrap';

export default function ImageDisplay({ imageType, imageUrl, emoji, dishName }) {
    if (imageType === 'upload' && imageUrl) {
        return (
            <Card.Img 
                variant="top" 
                src={imageUrl} 
                alt={`Photo of ${dishName}`}
                style={{ height: '200px', objectFit: 'cover' }} 
            />
        );
    } else if (imageType === 'emoji') {
        return (
            <div 
                style={{ 
                    fontSize: '8rem', 
                    textAlign: 'center', 
                    padding: '20px', 
                    backgroundColor: '#f8f9fa' 
                }}
                role="img"
                aria-label={`${dishName} represented by ${emoji} emoji`}
            >
                {emoji}
            </div>
        );
    }
    return null;
}


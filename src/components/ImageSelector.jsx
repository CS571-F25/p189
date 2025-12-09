import { Form, Button } from 'react-bootstrap';

const foodEmojis = ['🍕', '🍔', '🍟', '🌮', '🍝', '🍜', '🍱', '🍛', '🍲', '🥗', '🍰', '🍪', '🧁', '🍩', '🥘', '🍳'];

export default function ImageSelector({ imageType, imageUrl, emoji, onImageTypeChange, onImageUrlChange, onEmojiChange }) {
    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label>Image Type</Form.Label>
                <div role="group" aria-label="Image type selection">
                    <Form.Check
                        inline
                        type="radio"
                        label="Emoji"
                        id="image-type-emoji"
                        name="imageType"
                        checked={imageType === 'emoji'}
                        onChange={() => onImageTypeChange('emoji')}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Upload URL"
                        id="image-type-upload"
                        name="imageType"
                        checked={imageType === 'upload'}
                        onChange={() => onImageTypeChange('upload')}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="No Image"
                        id="image-type-none"
                        name="imageType"
                        checked={imageType === 'none'}
                        onChange={() => onImageTypeChange('none')}
                    />
                </div>
            </Form.Group>

            {imageType === 'emoji' && (
                <Form.Group className="mb-3">
                    <Form.Label>Select Emoji</Form.Label>
                    <div role="group" aria-label="Food emoji selection">
                        {foodEmojis.map(emojiOption => (
                            <Button
                                key={emojiOption}
                                variant={emoji === emojiOption ? 'primary' : 'outline-secondary'}
                                className="m-1"
                                style={{ fontSize: '1.5rem' }}
                                onClick={() => onEmojiChange(emojiOption)}
                                type="button"
                                aria-label={`Select ${emojiOption} emoji`}
                                aria-pressed={emoji === emojiOption}
                            >
                                {emojiOption}
                            </Button>
                        ))}
                    </div>
                </Form.Group>
            )}

            {imageType === 'upload' && (
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="image-url">Image URL</Form.Label>
                    <Form.Control
                        id="image-url"
                        type="url"
                        name="imageUrl"
                        value={imageUrl}
                        onChange={(e) => onImageUrlChange(e.target.value)}
                        placeholder="https://..."
                        aria-label="Enter image URL"
                    />
                </Form.Group>
            )}
        </>
    );
}


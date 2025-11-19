import { Container, Card } from 'react-bootstrap';
import Navigation from './Navigation';

export default function AboutMe() {
    return (
        <>
            <Navigation />
            <Container>
                <h1 className="mb-4">About Rate the Plate</h1>

                <Card className="shadow">
                    <Card.Body>
                        <Card.Title>Welcome to Rate the Plate! 🍽️</Card.Title>
                        <Card.Text>
                            This is your personal food journal where you can document and rate all the amazing
                            dishes you've eaten or made. Whether it's a homemade creation or a restaurant discovery,
                            keep track of your culinary adventures!
                        </Card.Text>

                        <Card.Title className="mt-4">Features</Card.Title>
                        <ul>
                            <li>📝 Create entries for homemade dishes with recipes and instructions</li>
                            <li>🏪 Track restaurant meals and who made them</li>
                            <li>⭐ Rate your dishes using stars, numeric scores, or emoji reactions</li>
                            <li>📸 Add images or use fun food emojis</li>
                            <li>❤️ Favorite your best dishes for easy access</li>
                            <li>🔍 Search and filter your food entries</li>
                            <li>📊 Sort by date, rating, or favorites</li>
                        </ul>

                        <Card.Text className="mt-4">
                            Start by adding your first dish on the Home page. Happy eating! 😊
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}
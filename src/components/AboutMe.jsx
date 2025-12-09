import { Container, Card, Row, Col } from 'react-bootstrap';
import Navigation from './Navigation';

export default function AboutMe() {
    return (
        <>
            <Navigation />
            <Container>
                <h1 className="page-title mb-4">About Rate the Plate</h1>

                <Card
                    className="mb-4"
                    style={{
                        background: 'linear-gradient(135deg, #FFD6E8 0%, #E6D5F5 100%)',
                        border: 'none'
                    }}
                >
                    <Card.Body style={{ background: 'white', margin: '10px', borderRadius: '15px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🍽️✨</div>
                            <Card.Title as="h2" style={{
                                color: '#C44569',
                                fontWeight: '700',
                                fontSize: '2rem'
                            }}>
                                Welcome to Rate the Plate!
                            </Card.Title>
                        </div>

                        <Card.Text style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                            This is your personal food journal where you can document and rate all the amazing
                            dishes you've eaten or made. Whether it's a homemade creation or a restaurant discovery,
                            keep track of your culinary adventures! 🎉
                        </Card.Text>

                        <h2 className="h4 mt-5 mb-4" style={{
                            color: '#C44569',
                            fontWeight: '700',
                            borderBottom: '3px solid #FFB5C5',
                            paddingBottom: '0.5rem'
                        }}>
                            ✨ Features
                        </h2>

                        <Row>
                            <Col md={6}>
                                <div style={{
                                    background: 'linear-gradient(135deg, #FFF5F7 0%, #F0F4FF 100%)',
                                    padding: '1rem',
                                    borderRadius: '15px',
                                    marginBottom: '1rem',
                                    borderLeft: '4px solid #56ab2f'
                                }}>
                                    <strong>📝 Create Entries</strong>
                                    <p className="mb-0 mt-2">Add homemade dishes with recipes and instructions</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div style={{
                                    background: 'linear-gradient(135deg, #FFF5F7 0%, #F0F4FF 100%)',
                                    padding: '1rem',
                                    borderRadius: '15px',
                                    marginBottom: '1rem',
                                    borderLeft: '4px solid #4facfe'
                                }}>
                                    <strong>🏪 Track Restaurants</strong>
                                    <p className="mb-0 mt-2">Document restaurant meals and who made them</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div style={{
                                    background: 'linear-gradient(135deg, #FFF5F7 0%, #F0F4FF 100%)',
                                    padding: '1rem',
                                    borderRadius: '15px',
                                    marginBottom: '1rem',
                                    borderLeft: '4px solid #f5576c'
                                }}>
                                    <strong>⭐ Multiple Ratings</strong>
                                    <p className="mb-0 mt-2">Rate using stars, numeric scores, or emoji reactions</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div style={{
                                    background: 'linear-gradient(135deg, #FFF5F7 0%, #F0F4FF 100%)',
                                    padding: '1rem',
                                    borderRadius: '15px',
                                    marginBottom: '1rem',
                                    borderLeft: '4px solid #764ba2'
                                }}>
                                    <strong>📸 Images & Emojis</strong>
                                    <p className="mb-0 mt-2">Add images or use fun food emojis</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div style={{
                                    background: 'linear-gradient(135deg, #FFF5F7 0%, #F0F4FF 100%)',
                                    padding: '1rem',
                                    borderRadius: '15px',
                                    marginBottom: '1rem',
                                    borderLeft: '4px solid #FFB5C5'
                                }}>
                                    <strong>❤️ Favorites</strong>
                                    <p className="mb-0 mt-2">Mark and filter your best dishes</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div style={{
                                    background: 'linear-gradient(135deg, #FFF5F7 0%, #F0F4FF 100%)',
                                    padding: '1rem',
                                    borderRadius: '15px',
                                    marginBottom: '1rem',
                                    borderLeft: '4px solid #a8e063'
                                }}>
                                    <strong>🔍 Search & Sort</strong>
                                    <p className="mb-0 mt-2">Find dishes by name, date, rating, or favorites</p>
                                </div>
                            </Col>
                        </Row>

                        <div style={{
                            background: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)',
                            color: 'white',
                            padding: '1.5rem',
                            borderRadius: '15px',
                            marginTop: '2rem',
                            textAlign: 'center',
                            fontWeight: '600',
                            fontSize: '1.1rem'
                        }}>
                            🎉 Start by adding your first dish on the Home page. Happy eating! 😊
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}
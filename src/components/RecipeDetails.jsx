import { Button, Collapse } from 'react-bootstrap';
import { useState } from 'react';
import { IoLink } from 'react-icons/io5';

export default function RecipeDetails({ recipe, instructions, recipeUrl }) {
    const [showRecipe, setShowRecipe] = useState(false);

    // Only show if there's at least one piece of recipe information
    if (!recipe && !instructions && !recipeUrl) {
        return null;
    }

    return (
        <>
            <Button
                variant="link"
                onClick={() => setShowRecipe(!showRecipe)}
                className="p-0 mb-2 d-block"
                aria-expanded={showRecipe}
                aria-controls="recipe-details"
            >
                {showRecipe ? '▼ Hide Recipe' : '▶ Show Recipe'}
            </Button>
            <Collapse in={showRecipe}>
                <div id="recipe-details" className="recipe-details p-3 bg-light rounded">
                    {recipe && (
                        <div className="mb-2">
                            <h3 className="h6">Recipe:</h3>
                            <p className="mb-1">{recipe}</p>
                        </div>
                    )}
                    {instructions && (
                        <div className="mb-2">
                            <h3 className="h6">Instructions:</h3>
                            <p className="mb-1">{instructions}</p>
                        </div>
                    )}
                    {recipeUrl && (
                        <div className="mt-2">
                            <Button
                                variant="primary"
                                size="sm"
                                href={recipeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IoLink style={{ marginRight: '6px' }} />
                                View Recipe Source
                            </Button>
                        </div>
                    )}
                </div>
            </Collapse>
        </>
    );
}


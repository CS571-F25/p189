import { Button, Collapse } from 'react-bootstrap';
import { useState } from 'react';

export default function RecipeDetails({ recipe, instructions, recipeImage }) {
    const [showRecipe, setShowRecipe] = useState(false);

    // Only show if there's at least one piece of recipe information
    if (!recipe && !instructions && !recipeImage) {
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
                    {recipeImage && (
                        <div>
                            <h3 className="h6">Recipe Image:</h3>
                            <img 
                                src={recipeImage} 
                                alt="Recipe instructions" 
                                className="img-fluid mt-2" 
                            />
                        </div>
                    )}
                </div>
            </Collapse>
        </>
    );
}


import { useState, useEffect } from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import AboutMe from './components/AboutMe.jsx';
import MyFavorites from './components/MyFavorites.jsx';

// Example/tutorial entry
const exampleEntry = {
    id: 1,
    name: "Grandma's Chocolate Chip Cookies",
    isHomemade: true,
    recipe: "2 cups flour, 1 cup butter, 1 cup sugar, 2 eggs, 2 cups chocolate chips, 1 tsp vanilla, 1 tsp baking soda, pinch of salt",
    instructions: "1. Preheat oven to 350°F. 2. Mix butter and sugar until fluffy. 3. Add eggs and vanilla. 4. Mix in dry ingredients. 5. Fold in chocolate chips. 6. Bake for 10-12 minutes.",
    recipeImage: "",
    location: "",
    madeBy: "",
    externalLink: "",
    review: "These cookies are absolutely amazing! The perfect balance of crispy edges and chewy centers. A family favorite for generations!",
    ratingType: "stars",
    rating: 5,
    imageType: "emoji",
    imageUrl: "",
    emoji: "🍪",
    dateCreated: new Date().toISOString(),
    isFavorite: true
};

function App() {
    const [entries, setEntries] = useState(() => {
        // Load from localStorage or use example entry
        const saved = localStorage.getItem('foodEntries');
        return saved ? JSON.parse(saved) : [exampleEntry];
    });

    // Save to localStorage whenever entries change
    useEffect(() => {
        localStorage.setItem('foodEntries', JSON.stringify(entries));
    }, [entries]);

    const handleAddEntry = (newEntry) => {
        setEntries(prev => [newEntry, ...prev]);
    };

    const handleToggleFavorite = (id) => {
        setEntries(prev => prev.map(entry =>
            entry.id === id ? { ...entry, isFavorite: !entry.isFavorite } : entry
        ));
    };

    return (
        <HashRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            entries={entries}
                            onAddEntry={handleAddEntry}
                            onToggleFavorite={handleToggleFavorite}
                        />
                    }
                />
                <Route
                    path="/favorites"
                    element={
                        <MyFavorites
                            entries={entries}
                            onToggleFavorite={handleToggleFavorite}
                        />
                    }
                />
                <Route path="/about" element={<AboutMe />} />
            </Routes>
        </HashRouter>
    );
}

export default App;

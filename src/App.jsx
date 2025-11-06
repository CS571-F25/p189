import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import AboutMe from './components/AboutMe.jsx'

function App() {
    return <HashRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
        </Routes>
    </HashRouter>
}

export default App

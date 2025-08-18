import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import HomePage from './components/HomePage/HomePage';
import CinemaBookingPage from './components/CinemaBookingPage/CinemaBookingPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sin-accesibilidad" element={<CinemaBookingPage />} />
            </Routes>
        </Router>
    );
};

export default App;
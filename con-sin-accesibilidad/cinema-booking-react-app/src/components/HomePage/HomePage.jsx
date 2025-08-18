import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="home-container">
                <h1 className="home-title">Bienvenido a Cine Tico</h1>
                <p className="home-description">
                    Sistema de reservas de entradas de cine
                </p>
                <Link to="/sin-accesibilidad" className="home-link">
                    Ir al Sistema de Reservas
                </Link>
            </div>
        </div>
    );
};

export default HomePage;

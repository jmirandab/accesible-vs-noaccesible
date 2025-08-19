import React from 'react';
import { useAppState } from '../../hooks/useAppState';

// Import all components
import Sidebar from '../Sidebar/Sidebar';
import MovieDisplay from '../MovieDisplay/MovieDisplay';
import BookingForm from '../Form/BookingForm';
import ResultDialog from '../Dialog/ResultDialog';

const CinemaBookingPage = () => {
    const appState = useAppState();

    return (
        <div>
            {/* Banner superior */}
            <div className="banner">
                <button className="hamburger-menu" id="hamburgerMenu" onClick={appState.toggleSidebar}>☰</button>
                <span className="banner-title">Cine Tico</span>
            </div>

            <div className="container">
                {/* Sección izquierda - Tree View */}
                <Sidebar appState={appState} />

                {/* Sección principal */}
                <div className={`main-content ${appState.sidebarCollapsed ? 'expanded' : ''}`}>
                    <div className="page-title">Formulario de Registrooooo</div>
                    
                    <div className="content-wrapper">
                        {/* Área de película seleccionada */}
                        <MovieDisplay appState={appState} />
                        
                        <BookingForm appState={appState} />
                    </div>
                </div>
            </div>

            {/* Dialog para mostrar resultados */}
            <ResultDialog appState={appState} />
        </div>
    );
};

export default CinemaBookingPage;

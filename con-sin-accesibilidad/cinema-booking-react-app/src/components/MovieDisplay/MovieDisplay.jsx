import React from 'react';
import { movies } from '../../data/movies';
import './MovieDisplay.css';

const MovieDisplay = ({ appState }) => {
    // Find the selected movie
    const selectedMovie = movies.find(movie => movie.id === appState.selectedMovie);

    if (!selectedMovie) {
        return null; // Don't show anything if no movie is selected
    }

    // Person head icon as SVG for fallback
    const PersonIcon = () => (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="#ccc">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
    );

    return (
        <div className="movie-display" id="movieDisplay">
            <div className="movie-header">Película Seleccionada</div>
            <div className="movie-content">
                <div className="movie-left">
                    <div className="movie-info">
                        <div className="movie-title" id="movieTitle">{selectedMovie.title}</div>
                    </div>
                    <div className="movie-image">
                        <img id="movieImage" src={selectedMovie.image} alt="Poster de la película" />
                    </div>
                </div>
                <div className="movie-right movie-details">
                    <div className="movie-description">
                        {/* <div className="description-header">Descripción</div> */}
                        <p className="description-text">{selectedMovie.description}</p>
                    </div>
                    <div className="movie-cast">
                        {/* <div className="cast-header">Reparto</div> */}
                        <div className="cast-list">
                            {selectedMovie.cast.map((person, index) => (
                                <div key={index} className="cast-card">
                                    <div className="cast-photo">
                                        {person.profilePicture ? (
                                            <img 
                                                src={person.profilePicture} 
                                                alt={`Foto de ${person.name}`}
                                                className="profile-image"
                                            />
                                        ) : (
                                            <PersonIcon />
                                        )}
                                    </div>
                                    <div className="cast-info">
                                        <div className="cast-name">{person.name}</div>
                                        <div className="cast-role">
                                            {person.role === 'director' ? 'Director' : 'Actor'}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDisplay;
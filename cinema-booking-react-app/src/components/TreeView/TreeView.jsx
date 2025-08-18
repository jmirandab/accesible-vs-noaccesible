import React, { useState, useEffect } from 'react';
import { peliculas } from '../../data/movies';

const TreeView = ({ onSelectMovie, selectedMovieId: parentSelectedMovieId }) => {
    const [expandedGroups, setExpandedGroups] = useState({});
    const [selectedMovieId, setSelectedMovieId] = useState(parentSelectedMovieId);

    // Sync with parent state
    useEffect(() => {
        setSelectedMovieId(parentSelectedMovieId);
    }, [parentSelectedMovieId]);

    // Auto-select first movie on mount if none selected
    useEffect(() => {
        if (!parentSelectedMovieId) {
            const firstGenre = Object.keys(peliculas)[0];
            const firstMovie = peliculas[firstGenre][0];
            
            if (firstMovie) {
                // Expand first genre
                setExpandedGroups({ [firstGenre]: true });
                // Select first movie
                setSelectedMovieId(firstMovie.id);
                onSelectMovie(firstMovie.id);
            }
        } else {
            // Find which genre contains the selected movie and expand it
            Object.keys(peliculas).forEach(genre => {
                if (peliculas[genre].some(movie => movie.id === parentSelectedMovieId)) {
                    setExpandedGroups(prev => ({ ...prev, [genre]: true }));
                }
            });
        }
    }, [onSelectMovie, parentSelectedMovieId]);

    const toggleGroup = (genre) => {
        setExpandedGroups(prev => ({
            ...prev,
            [genre]: !prev[genre]
        }));
    };

    const handleMovieSelect = (movieId) => {
        setSelectedMovieId(movieId);
        onSelectMovie(movieId);
    };

    return (
        <div className="tree-view">
            {Object.keys(peliculas).map((genre) => {
                const genreId = genre.toLowerCase().replace(/\s+/g, '-');
                const isExpanded = expandedGroups[genre];
                
                return (
                    <div key={genre} className="tree-group">
                        <div 
                            className="tree-parent" 
                            data-group={genreId}
                            onClick={() => toggleGroup(genre)}
                        >
                            <span className={`tree-icon ${isExpanded ? 'expanded' : ''}`}>▶</span>
                            <span className="tree-label">{genre}</span>
                        </div>
                        <div 
                            className={`tree-children ${isExpanded ? 'expanded' : ''}`}
                            id={genreId}
                        >
                            {peliculas[genre].map(movie => (
                                <div 
                                    key={movie.id} 
                                    className={`tree-item ${selectedMovieId === movie.id ? 'selected' : ''}`}
                                    data-movie={movie.id}
                                    onClick={() => handleMovieSelect(movie.id)}
                                >
                                    <span className="tree-connector"></span>
                                    <span className="tree-label">{movie.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TreeView;
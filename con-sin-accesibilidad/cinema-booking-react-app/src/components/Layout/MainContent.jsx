import React from 'react';
import MovieDisplay from '../MovieDisplay/MovieDisplay';
import BookingForm from '../Form/BookingForm';
import ResultDialog from '../Dialog/ResultDialog';
import { movies } from '../../data/movies';
import './Layout.css';

const MainContent = ({ appState }) => {
    // Find the selected movie
    const selectedMovie = movies.find(movie => movie.id === appState.selectedMovie);

    return (
        <main className="main-content">
            <div className="content">
                <MovieDisplay movie={selectedMovie} />
                <BookingForm />
            </div>
            <ResultDialog />
        </main>
    );
};

export default MainContent;
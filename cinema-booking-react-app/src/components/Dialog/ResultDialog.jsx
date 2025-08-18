import React, { useEffect, useState } from 'react';
import { movies } from '../../data/movies';
import { provincias, monthNames } from '../../utils/constants';

const ResultDialog = ({ appState }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [dialogData, setDialogData] = useState(null);

    useEffect(() => {
        // Check URL parameters on mount
        const urlParams = new URLSearchParams(window.location.search);
        
        if (urlParams.has('nombre')) {
            const data = {
                nombre: urlParams.get('nombre'),
                provincia: urlParams.get('provincia'),
                fecha: urlParams.get('fecha')
            };
            setDialogData(data);
            setIsOpen(true);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        // Clear URL parameters
        window.history.replaceState({}, document.title, window.location.pathname);
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day} de ${month} de ${year}`;
    };

    const getProvinceName = (value) => {
        return provincias[value] || value;
    };

    const getSelectedMovie = () => {
        if (!appState.selectedMovie) return null;
        return movies.find(movie => movie.id === appState.selectedMovie);
    };

    if (!isOpen || !dialogData) return null;

    const selectedMovie = getSelectedMovie();

    return (
        <dialog className="result-dialog" open={isOpen}>
            <div className="dialog-content">
                <div className="dialog-header">Registrado con éxito</div>
                <div className="dialog-body" id="dialogBody">
                    {selectedMovie && (
                        <div className="dialog-movie-section">
                            <div className="dialog-movie-header">Película Seleccionada</div>
                            <div className="dialog-movie-content">
                                <img 
                                    src={selectedMovie.image} 
                                    alt={`Poster de ${selectedMovie.title}`} 
                                    className="dialog-movie-image"
                                />
                                <div className="dialog-movie-title">{selectedMovie.title}</div>
                            </div>
                        </div>
                    )}
                    
                    {dialogData.nombre && (
                        <div className="dialog-field">
                            <div className="dialog-label">Nombre:</div>
                            <div className="dialog-value">{dialogData.nombre}</div>
                        </div>
                    )}
                    
                    {dialogData.provincia && (
                        <div className="dialog-field">
                            <div className="dialog-label">Cine de su preferencia:</div>
                            <div className="dialog-value">{getProvinceName(dialogData.provincia)}</div>
                        </div>
                    )}
                    
                    {dialogData.fecha && (
                        <div className="dialog-field">
                            <div className="dialog-label">Fecha:</div>
                            <div className="dialog-value">{formatDate(dialogData.fecha)}</div>
                        </div>
                    )}
                </div>
                <div className="dialog-actions">
                    <div className="dialog-close" id="closeDialog" onClick={handleClose}>
                        Cerrar
                    </div>
                </div>
            </div>
        </dialog>
    );
};

export default ResultDialog;
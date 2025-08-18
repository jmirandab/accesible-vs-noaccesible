import React from 'react';

const TreeItem = ({ movie, onSelect }) => {
    const handleClick = () => {
        onSelect(movie.id);
    };

    return (
        <div className="tree-item" onClick={handleClick} data-movie={movie.id}>
            <span className="tree-connector"></span>
            <span className="tree-label">{movie.title}</span>
        </div>
    );
};

export default TreeItem;
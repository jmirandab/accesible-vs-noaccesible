import React, { useState } from 'react';
import TreeItem from './TreeItem';
import './TreeView.css';

const TreeGroup = ({ genre, movies, onSelectMovie }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="tree-group">
            <div className="tree-parent" onClick={toggleExpand}>
                <span className={`tree-icon ${isExpanded ? 'expanded' : ''}`}>▶</span>
                <span className="tree-label">{genre}</span>
            </div>
            {isExpanded && (
                <div className="tree-children">
                    {movies.map(movie => (
                        <TreeItem key={movie.id} movie={movie} onSelect={onSelectMovie} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TreeGroup;
import React from 'react';
import TreeView from '../TreeView/TreeView';

const Sidebar = ({ appState }) => {
    return (
        <div className={`sidebar ${appState.sidebarCollapsed ? 'collapsed' : ''}`}>
            <TreeView 
                onSelectMovie={appState.selectMovie} 
                selectedMovieId={appState.selectedMovie}
            />
        </div>
    );
};

export default Sidebar;
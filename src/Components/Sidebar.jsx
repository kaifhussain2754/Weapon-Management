// src/Components/Sidebar.jsx

import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><a href="#records">Records</a></li>
                <li><a href="#weapons-entry">Weapons Entry</a></li>
                <li><a href="#weapons-details">Weapons Details</a></li>
                <li><a href="#add-weapons">Add Weapons</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;

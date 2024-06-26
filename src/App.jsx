// src/App.jsx

import React from 'react';
import Sidebar from './Components/Sidebar';

function App() {
    return (
        <div className="App">
            <Sidebar />
            <div className="content">
                <h1>Weapon Management System</h1>
            </div>
        </div>
    );
}

export default App;

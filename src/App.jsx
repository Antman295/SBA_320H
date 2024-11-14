import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Info from './pages/Info';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Info />} />
                <Route path="/cars/:make/:model/:year" element={<Info />} />
            </Routes>
        </Router>
    );
};

export default App;
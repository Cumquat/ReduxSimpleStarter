import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './layout/header';
import Routes from '../routes/routes';

const App = () => (
    <Router>
        <div>
            <Header />
            <Routes />
        
        </div>
    </Router>
);

export default App
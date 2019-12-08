import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import Practice from './components/Practice';

ReactDOM.render(
    <Router>
        <Practice />
    </Router>
    , document.getElementById('root'));

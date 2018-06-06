import React from "react";
import ReactDOM from 'react-dom';
import 'bulma'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

// Line 20 & 25: Router stores NavBar which is holding all links for nav
// Line 23: Route was added to dynamically added any profile page upon login



ReactDOM.render(
        <div>
            <App />
        </div>
    , document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouteReact from './Route';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouteReact />, document.getElementById('root'));
registerServiceWorker();
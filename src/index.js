import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

process.on('uncaughtException', function (err) {
    console.log('uncaughtException', err);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Provider allows react application to interact with redux
// Provider wraps our root <App /> component providing it with store
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();

// npm install redux react-redux
// redux is just a library to create store
// redux-react is a glue layer between react & redux
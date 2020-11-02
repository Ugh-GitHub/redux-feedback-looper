import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const reviewReducer = (state = {feeling: '', understanding: '', support: '', comments: ''}, action) => {
    
    switch(action.type){
        case 'FEELING_UPDATE':
            state.feeling= action.payload;
            console.log("Hello from the reducers", state);
            return state;
        case 'UNDERSTANDING_UPDATE':
            state.understanding= action.payload;
            console.log("Hello from the reducers", state);
            return state;
        case 'SUPPORT_UPDATE':
            state.support= action.payload;
            console.log("Hello from the reducers", state);
            return state;
        case 'COMMENTS_UPDATE':
            state.comments= action.payload;
            console.log("Hello from the reducers", state);
            return state;
        case 'NEW_REVIEW':
            state.feeling="";
            state.understanding="";
            state.support="";
            state.comments="";
            return state;
        default:
            return state;
    }
}

const storeInstance = createStore(
    combineReducers({
        reviewReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();

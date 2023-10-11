import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import scienceReducer from './science/science';
import technologyReducer from './technology/technology';

const rootReducer = combineReducers({
  scienceReducer,
  technologyReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
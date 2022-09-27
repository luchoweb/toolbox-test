import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import filesReducer from './reducers/filesReducer';

const appReducer = combineReducers({
  filesReducer: filesReducer
});

const store = configureStore({
  reducer: appReducer,
  middleware: [thunk]
});

export default store;

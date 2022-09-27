import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filesReducer from './reducers/filesReducer';

const appReducer = combineReducers({
  filesReducer: filesReducer
});

const store = configureStore({ reducer: appReducer });

export default store;

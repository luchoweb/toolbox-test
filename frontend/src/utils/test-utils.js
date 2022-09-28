import React from 'react'
import { render } from '@testing-library/react'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';

import filesReducer from '../redux/reducers/filesReducer'

const appReducer = combineReducers({ filesReducer: filesReducer });

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: appReducer,
      preloadedState
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

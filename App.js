import React from 'react';
import { useScreens } from 'react-native-screens';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import MainNavigator from './navigation/MainNavigator';
import qrReducer from "./store/reducers/qrReducer";

useScreens();

const rootReducer = combineReducers({
  qr: qrReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

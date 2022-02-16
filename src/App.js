import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Favorites from './components/Favorites';
import ImageDescription from './components/ImageDescription';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import combinedReducer from './reducers';

const App = () => {
  const store = createStore(combinedReducer, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div className='bodyStyle'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/favorites'
              element={<Favorites />}
            />
            <Route
              path='/imageDescription'
              element={<ImageDescription />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;


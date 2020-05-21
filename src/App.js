import React from 'react';
import './App.css';
import {ImageContextProvider} from './Component/Store/Store';
import FavoritesListItems from './Component/FavoritesListItems/FavoritesListItems';
import Images from './Component/Images/Images';
import Header from './Component/Header/Header';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
library.add(faHeart);

function App() {

  return (
    <ImageContextProvider>
      <div className="App">
        <Header />
        <Images/>
      </div>
    </ImageContextProvider>
  );
}

export default App;

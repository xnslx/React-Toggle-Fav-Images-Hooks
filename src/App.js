import React, {useContext, useState} from 'react';
import {ImageContext, initialState} from './Component/Store/Store';
import './App.css';
import {ImageContextProvider} from './Component/Store/Store';
import Images from './Component/Images/Images';
import Header from './Component/Header/Header';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
library.add(faHeart);

function App() {
  const state = useContext(ImageContext)
  console.log(state)
  const {favoritesList} = state;
  // console.log(favoritesList)
  return (
    <ImageContextProvider>
      <div className="App">
        <Header value={favoritesList.length}/>
        <Images
        />
      </div>
    </ImageContextProvider>
  );
}

export default App;

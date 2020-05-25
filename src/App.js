import React from 'react';
import './App.css';
import {ImageContextProvider} from './Component/Store/Store';
import FavoritesListItems from './Component/FavoritesListItems/FavoritesListItems';
import Images from './Component/Images/Images';
import Header from './Component/Header/Header';
import {Switch, Route} from 'react-router-dom'
// import logo from './assets/logo_transparent.png';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faHeart, faTimesCircle} from '@fortawesome/free-regular-svg-icons';
library.add(faHeart, faTimesCircle);

function App() {
  
  return (
      <ImageContextProvider>
          <Header />
        <Switch>
          <Route path='/' exact component={Images}/>
          <Route path='/favImages' component={FavoritesListItems}/>
        </Switch>
      </ImageContextProvider>
  );
}

export default App;

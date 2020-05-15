import React, {useState} from 'react';
import './App.css';
import {initialState} from './Component/Store/Store';
import Images from './Component/Images/Images';
import Header from './Component/Header/Header';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
library.add(faHeart);

function App() {
  console.log(initialState)
  const [items, setItems] = useState(initialState);
  const favList = [];
  const toggleFavHandler = (id) => {
    setItems({favToggle: !items.favToggle})
  }
  return (
    <div className="App">
      <Header />
      <Images
        items={items}
        clicked={toggleFavHandler}
      />
    </div>
  );
}

export default App;

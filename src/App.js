import React, {useState} from 'react';
import './App.css';
import {ImageContextProvider} from './Component/Store/Store';
import Images from './Component/Images/Images';
import Header from './Component/Header/Header';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
library.add(faHeart);

function App() {  
  const [favList, setFavList] = useState([]);

  return (
    <ImageContextProvider>
      <div className="App">
        <Header value={favList.length}/>
        <Images
        />
      </div>
    </ImageContextProvider>
  );
}

export default App;

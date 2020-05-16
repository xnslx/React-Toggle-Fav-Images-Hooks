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
  const [favList, setFavList] = useState([]);

  const toggleFavHandler = (item) => {
    // const updatedList = favList.concat(item)
    // setFavList(updatedList)
    // console.log(updatedList)

    const updatedList = favList.filter(fav => fav.id !== item.id) 
    updatedList.push(favList)
    setFavList(updatedList)
    console.log(updatedList)
  }
  return (
    <div className="App">
      <Header value={favList.length}/>
      <Images
        items={items}
        clicked={toggleFavHandler}
      />
    </div>
  );
}

export default App;

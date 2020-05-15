import React, {useState} from 'react';
import {initialState} from './Component/Store/Store';
import Images from './Component/Images/Images';
import './App.css';


function App() {
  console.log(initialState)
  const [items, setItems] = useState(initialState)
  return (
    <div className="App">
      <Images
        items={items}
        key={items.id}
        src={items.src}
        title={items.title}
        favToggle={items.favToggle}
      />
    </div>
  );
}

export default App;

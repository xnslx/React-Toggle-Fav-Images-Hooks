import React, {useContext, useReducer} from 'react';
import { ImageContext, ToggleFavReducer, initialState } from '../Store/Store'; 

const Images = () => {
    const {state, dispatch} = useContext(ImageContext);
    console.log(state)
    const {favoritesList} = state;
    console.log('favoritesList', favoritesList)
    return (
        <div style={{marginTop: '100px'}}>
        {state.images.map(item => (
          <div key={item.id} style={{margin: '40px auto'}}>
            <img src={item.src} alt="imageOne" style={{width: '80vw'}}/>
            <li style={{listStyle: 'none', fontSize: '18px'}}>{item.title}</li>
            <button onClick={() => dispatch({type:'ADD_FAV', payload: item})}>{item.favToggle ? "unfavorite" : "favorite"}
            </button>
          </div>
        ))}
      </div>
    )
};

export default Images;

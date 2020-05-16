import React, {useContext, useReducer} from 'react';
import { ImageContext, ToggleFavReducer, initialState } from '../Store/Store'; 

const Images = () => {
    const imageList = useContext(ImageContext);
    const [state, dispatch] = useReducer(ToggleFavReducer, initialState)
    console.log(state)
    // console.log(dispatch)
    return (
        <div style={{marginTop: '100px'}}>
        {imageList.map(item => (
          <div key={item.id} style={{margin: '40px auto'}}>
            <img src={item.src} alt="imageOne" style={{width: '80vw'}}/>
            <li style={{listStyle: 'none', fontSize: '18px'}}>{item.title}</li>
            <button onClick={() => dispatch({type:'ADD_FAV', payload: item})}>{item.favToggle? 'unfavorite': 'favorite'}</button>
          </div>
        ))}
      </div>
    )
};

export default Images;

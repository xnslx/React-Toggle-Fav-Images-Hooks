import React, {useContext } from 'react';
import { ImageContext } from '../Store/Store';
import classes from './Images.module.css'; 

const Images = () => {
    const {state, dispatch} = useContext(ImageContext);
    // console.log(state)
    const {favoritesList} = state;
    // console.log('favoritesList', favoritesList)
    
    return (
        <div className={classes.Container}>
        {state.images.map(item => (
          <div key={item.id} style={{margin: '40px auto'}}>
            <img src={item.src} alt="imageOne" style={{width: '80vw'}}/>
            <li style={{listStyle: 'none', fontSize: '18px'}}>{item.title}</li>
            <button onClick={() => {
                if(favoritesList.includes(item)) {
                    dispatch({type: 'REMOVE_FAV', payload: item})
                } else {
                    dispatch({type: 'ADD_FAV', payload: item})
                }
            }}>{favoritesList.includes(item) ? "unfavorite" : "favorite"}
            </button>
          </div>
        ))}
      </div>
    )
};

export default Images;

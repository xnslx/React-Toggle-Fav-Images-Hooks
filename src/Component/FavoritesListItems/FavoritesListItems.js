import React, {useContext} from 'react';
import {ImageContext} from '../Store/Store';
import classes from './FavoritesListItems.module.css';

const FavoritesListItems = () => {
    const {state, dispatch } = useContext(ImageContext)
    // console.log(state)
    // console.log(dispatch)
    const {favoritesList} = state;

    return (
        <div className={classes.FavList} >
            {favoritesList.map(item => (
                <ul key={item.id}>
                    <img 
                        src={item.src} 
                        alt="imageOne" 
                        style={{width: '80vw' }}
                    />
                    <li style={{listStyle: 'none', fontSize: '18px', textAlign:'center', marginTop:'8px'}}>{item.title}</li>
                        <button onClick={() => dispatch({type:'DELETE_FAV', payload: item.id})}>Delete</button>
                </ul>
            ))}
        </div>
    )
};

export default FavoritesListItems;

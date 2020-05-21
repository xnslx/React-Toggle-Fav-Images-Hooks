import React, {useContext} from 'react';
import {ImageContext} from '../Store/Store';
import classes from './FavoritesListItems.module.css';

const FavoritesListItems = (props) => {
    const {state} = useContext(ImageContext)
    console.log(state)
    const {favoritesList} = state;
    console.log(favoritesList)
    
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
                </ul>
            ))}
        </div>
    )
};

export default FavoritesListItems;

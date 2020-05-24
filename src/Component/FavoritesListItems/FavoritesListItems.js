import React, {useContext} from 'react';
import {ImageContext} from '../Store/Store';
import classes from './FavoritesListItems.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FavoritesListItems = () => {
    const {state, dispatch } = useContext(ImageContext)
    console.log(state)
    console.log(dispatch)
    const {favoritesList} = state;
    console.log(favoritesList)
    
    const buttonStyle = {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div className={classes.FavList} >
            {/* <button onClick={() => setFavListIsVisible(false)}><FontAwesomeIcon 
                icon={['far', 'times-circle']} 
                style={{marginLeft:'40px', marginBottom:'40px'}}
            /></button> */}
            {favoritesList.map(item => (
                <ul key={item.id}>
                    <img 
                        src={item.src} 
                        alt="imageOne" 
                        style={{width: '80vw' }}
                    />
                    <li style={{listStyle: 'none', fontSize: '18px', textAlign:'center', marginTop:'8px'}}>{item.title}</li>
                    <div style={buttonStyle}>
                        <button onClick={() => dispatch({type:'DELETE_FAV', payload: item.index})}>Delete</button>
                    </div>
                </ul>
            ))}
        </div>
    )
};

export default FavoritesListItems;

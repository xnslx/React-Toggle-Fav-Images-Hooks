import React, {useContext, useState} from 'react';
import {ImageContext} from '../Store/Store';
import classes from './FavoritesListItems.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FavoritesListItems = () => {
    const {state } = useContext(ImageContext)
    console.log(state)
    const {favoritesList} = state;
    console.log(favoritesList)
    
    const buttonStyle = {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    // const cssClasses = ['FavList', props.show? 'FavListOpen' : 'FavListClose' ]
    const [favImage, setFavImage] = useState(favoritesList);
    const [favListIsVisible, setFavListIsVisible] = useState(true);

    const deleteImageHandler = (index) => {
        const updatedList = favoritesList.splice(index,1)
        setFavImage({favImage: updatedList})
    }
    return (
        <div className={classes.FavList} >
            <button onClick={() => setFavListIsVisible({favListIsVisible:false})}><FontAwesomeIcon 
                icon={['far', 'times-circle']} 
                style={{marginLeft:'40px', marginBottom:'40px'}}
            /></button>
            {favoritesList.map(item => (
                <ul key={item.id}>
                    <img 
                        src={item.src} 
                        alt="imageOne" 
                        style={{width: '80vw' }}
                    />
                    <li style={{listStyle: 'none', fontSize: '18px', textAlign:'center', marginTop:'8px'}}>{item.title}</li>
                    <div style={buttonStyle}>
                        <button onClick={() => deleteImageHandler(item.index)}>Delete</button>
                    </div>
                </ul>
            ))}
        </div>
    )
};

export default FavoritesListItems;

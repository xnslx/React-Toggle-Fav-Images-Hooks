import React, {useContext, useState} from 'react';
import {ImageContext} from '../Store/Store';
import FavoritesListItems from '../FavoritesListItems/FavoritesListItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const {state} = useContext(ImageContext)
    console.log(state)
    const {favoritesList} = state;
    console.log(favoritesList)
    const [favListIsVisible, setFavListIsVisible] = useState(false);

    // const openFavListHandler = () => {
    //     setFavListIsVisible({favListIsVisible:true})
    // }
    let results;
    if(favListIsVisible) {
        results = (
            <FavoritesListItems /> 
        )
    } else {
        results = ''
    }
    return (
        <div style={{marginTop:'20px', textAlign:'right',marginRight:'40px'}}>
            <button onClick={() => setFavListIsVisible(true)}><FontAwesomeIcon icon={['far', 'heart']}/></button>
            <span>{favoritesList.length}</span>
            {results}
        </div>
    )
};

export default Header;

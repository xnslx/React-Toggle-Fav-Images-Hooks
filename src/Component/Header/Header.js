import React, {useContext} from 'react';
import {ImageContext} from '../Store/Store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const {state} = useContext(ImageContext)
    console.log(state)
    const {favoritesList} = state;
    console.log(favoritesList)
    return (
        <div style={{marginTop:'20px', textAlign:'right',marginRight:'40px'}}>
            <FontAwesomeIcon icon={['far', 'heart']}/>
            <span>{favoritesList.length}</span>
        </div>
    )
};

export default Header;

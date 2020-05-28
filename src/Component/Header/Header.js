import React, {useContext} from 'react';
import {ImageContext} from '../Store/Store';
// import FavoritesListItems from '../FavoritesListItems/FavoritesListItems';
// import Images from '../Images/Images';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo_transparent.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const {state} = useContext(ImageContext)
    // console.log(state)
    const {favoritesList} = state;
    // console.log(favoritesList)

    const logoStyle = {
        width: '20%',
        height:'auto',
        float:'left',
        marginLeft:'20px',
        marginTop:'-20px'
      }

    return (
        <>
            <Link to='/images'><img src={logo} alt="logo" style={logoStyle}/></Link>
            <div style={{marginTop:'20px', textAlign:'right',marginRight:'40px'}}>
                <Link to='/favImages'><FontAwesomeIcon icon={['far', 'heart']}/></Link>
                <span>{favoritesList.length}</span>
            </div>
        </>
    )
};

export default Header;

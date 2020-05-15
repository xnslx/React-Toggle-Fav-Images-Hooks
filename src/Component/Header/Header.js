import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <div style={{marginTop:'20px', textAlign:'right',marginRight:'40px'}}>
            <FontAwesomeIcon icon={['far', 'heart']}/>
        </div>
    )
};

export default Header;

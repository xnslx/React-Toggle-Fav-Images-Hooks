import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = (props) => {
    return (
        <div style={{marginTop:'20px', textAlign:'right',marginRight:'40px'}}>
            <FontAwesomeIcon icon={['far', 'heart']}/>
            <span>{props.value}</span>
        </div>
    )
};

export default Header;

import React from 'react';
import Images from '../Images/Images';
import FavoritesListItems from '../FavoritesListItems/FavoritesListItems';
import {Switch, Route} from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <Switch>
                <Route path='/' exact component={Images}/>
                <Route path='/favImages' component={FavoritesListItems}/>
            </Switch>
        </div>
    )
};

export default Main;

import React from 'react';
import imageOne from '../../assets/img01.jpg';
import imageTwo from '../../assets/img02.jpg';
import imageThree from '../../assets/img03.jpg';
import imageFour from '../../assets/img04.jpg';
import imageFive from '../../assets/img05.jpg';

export const initialState = [
    {
        id:1,
        src: imageOne,
        title: 'The summer and the tree',
        favToggle: false
    },
    {
        id:2,
        src: imageTwo,
        title: 'The yellow grain',
        favToggle: false
    },
    {
        id:3,
        src: imageThree,
        title: 'What has been left on this earth',
        favToggle: false
    },
    {
        id:4,
        src: imageFour,
        title: 'The water and waterfall',
        favToggle: false
    },
    {
        id:5,
        src: imageFive,
        title: 'Very beautiful scenery',
        favToggle: false
    }
]

export const imageContext = React.createContext(initialState)

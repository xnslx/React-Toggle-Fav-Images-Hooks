import React from 'react'

const Images = (props) => {
    console.log(props)
    return (
        <div style={{marginTop: '100px'}}>
        {props.items.map(item => (
          <div key={item.id} style={{margin: '40px auto'}}>
            <img src={item.src} alt="imageOne" style={{width: '80vw'}}/>
            <li style={{listStyle: 'none', fontSize: '18px'}}>{item.title}</li>
            <button onClick={() => props.clicked(item)}>{item.favToggle? 'unfavorite': 'favorite'}</button>
          </div>
        ))}
      </div>
    )
};

export default Images;

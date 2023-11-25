import React from 'react'

import './Board.css'

function Board({name,title,image}) {
  return (
    <div className='board-container'>
        <img className = 'board-image' src={image} alt="" />
        <div className='board-text'>
            <p>{name}</p>
            <p>{title}</p>

        </div>
    </div>
  )
}

export default Board
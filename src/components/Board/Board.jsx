import React from 'react'
import Photo from '../../../assets/photo.png'
import './Board.css'

function Board() {
  return (
    <div className='board-container'>
        <img className = 'board-image' src={Photo} alt="" />
        <div className='board-text'>
            <p>Manav Sharma</p>
            <p>Badmosh</p>

        </div>
    </div>
  )
}

export default Board
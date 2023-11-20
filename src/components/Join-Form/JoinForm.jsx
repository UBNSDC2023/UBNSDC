
import React from 'react'
import './JoinForm.css'
import Button from '../Button/Button'
import groupme from '../../../assets/Group-logo.png'

function JoinForm({ imgPosition,buttonchildren, headerChildren,paraChildren }) {
    let layout;
    if (imgPosition==='left'){
        layout=(
            <>
            <div className='form-box'>
                <img className='form-img' src={groupme} alt="" />
                <Button buttonStyle='btn--outline'>
                    {buttonchildren}
                </Button>
            </div>
            <div className='form-text-container'>
                <h1 className='form-text-header'>{headerChildren}</h1>
                <p className='form-text-para'>{paraChildren} </p>
            </div>
            </>

        )
    }else if (imgPosition==='right'){
        layout=(
            <>
            <div className='form-text-container'>
                <h1 className='form-text-header'>{headerChildren}</h1>
                <p className='form-text-para'> {paraChildren}</p>
             </div>
            <div className='form-box'>
                <img className= 'form-img' src={groupme} alt="" />
                <Button buttonStyle='btn--outline'>
                    {buttonchildren}
                </Button>
            </div>
            </>
        )
    }
  return (
    <div className='form-container'>
        {layout}
    </div>
  )
}

export default JoinForm


import React from 'react'
import './About.css'
import '../../App.css'
import BoardFetchData from '../../components/BoardFetchData/BoardFetchData'
import Spinner from '../../components/Spinner'

function About() {
  return (
    <>
    <div className='goal-container'>
      <h1 className='goal-heading'>What is Our Goal?</h1>
      <p className='goal-para'>We so opinion friends me message as delight. Whole front do of plate heard oh <br />ought. His defective nor convinced residence own. Connection has put impossible<br /> own apartments boisterous. At jointure ladyship an insisted so humanity he. <br />Friendly bachelor entrance to on by.</p>
    </div>
    <h1 className='board-heading'>Meet our Board Members</h1>
    <div className='board-container'>
      <h1>Administrations</h1>
      <div className='admin-board-container'>
        <div className='admin-image-container'>
          <BoardFetchData/>
          {/* <Board name='Manav Sharma' title='Badmosh' image={Photo}/>
          <Board name='Manav Sharma' title='Badmosh' image={Photo}/>
          <Board name='Manav Sharma' title='Badmosh' image={Photo}/>
          <Board name='Manav Sharma' title='Badmosh' image={Photo}/> */}

        </div>
      </div>


      <h1>Project leaders</h1>
      <div className='project-board-container'>
        
        <BoardFetchData/>
        {/* <Board name='Manav Sharma' title='Badmosh' image={Photo}/>
        <Board name='Manav Sharma' title='Badmosh' image={Photo}/>
        <Board name='Manav Sharma' title='Badmosh' image={Photo}/> */}
      </div>
    </div>
    </>
  )
}

export default About
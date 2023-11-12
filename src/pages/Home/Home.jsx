import  { useEffect, useState } from 'react'
import { getBoardMembers } from '../../components/services/apiBoard_Members';



function Home() {
  const [board, setBoard] = useState(null);
  
  useEffect(() => {
    console.log(getBoardMembers())
  })


  return (
    <div>
      
        
    </div>
  )
}

export default Home

import { useEffect, useState } from "react"
import { getBoardMembers } from "../../components/services/apiBoard_Members copy";
import Board from "../../components/Board/Board";
import Spinner from "../Spinner";


function BoardFetchData() {

        const [isLoading, SetIsLoading] = useState(false);
        const [members, setMembers] = useState(null);
         useEffect(() => {
        getBoardMembers().then(res => setMembers(res))
        SetIsLoading(true)
        },[])

        // const lemgthOfList = members.length
        // console.log(members)
        // console.log(typeof members)


        return (
        <>
        
        {members ? members.map((data) => (
        <>
        {console.log(data)}
        <Board image={data.image} name={data.name} title={data.title}/>

        {/* <img src={data.image} key= {data}/>
        <p>{data.name}</p>
        <p>{data.pronouns}</p>
        <p>{data.title}</p> */}

        </>
        )) : <Spinner/>
        }
                
                

        </>
        )
}

export default BoardFetchData
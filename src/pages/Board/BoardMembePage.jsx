import { useEffect, useState } from "react"
import { getBoardMembers } from "../../components/services/apiBoard_Members copy";


function BoardMembePage() {

        const [members, setMembers] = useState(null);
         useEffect(() => {
        getBoardMembers().then(res => setMembers(res))
        },[])

        // const lemgthOfList = members.length
        console.log(members)
        console.log(typeof members)


        return (
                <>
                <h1>Meet the Board</h1>
                {       members ? 

                        members.map((data) => (
                                <>
                                <img src={data.image} key= {data}/>
                                <p>{data.name}</p>
                                <p>{data.pronouns}</p>
                                </>
                                ) ) : ""
                }
                
                

                </>
        )
}

export default BoardMembePage

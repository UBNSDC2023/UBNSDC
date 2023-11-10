import { collection, getDocs } from "firebase/firestore";
import { database } from "../../../firebaseConfig";


const collectionRef = collection(database, "Board_Members");

export function getBoardMembers(){
   const members = getDocs(collectionRef, "Board_Members")
   .then(res => res.docs.map(item => {
    return item.data()
   }))

   return members;
  }

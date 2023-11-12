import supabase from "./supabase";

export async function getBoardMembers(){

let { data: Board_Members, error } = await supabase
.from('Board_Members')
.select('*')

if (error) {
        console.error(error);
        throw new Error("Courses could not be loaded");
      }
    
return Board_Members;
        
}

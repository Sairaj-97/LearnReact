import { createContext } from "react";

const NameContext=createContext(
    {
        names:[
            {
                id:1,
                name:"name",
            }
        ],
        addName:(name)=>{},
        deleteName:(id)=>{}
    }
)

export default NameContext
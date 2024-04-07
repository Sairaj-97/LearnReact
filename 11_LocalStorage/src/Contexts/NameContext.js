import { createContext } from "react";

const NameContext=createContext({names:[],addName:(name)=>{}})

export default NameContext
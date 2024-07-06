import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>setData(res["rates"]))
        .catch((error) => console.error("Error fetching currency data:", error));
        console.log(data)
        
    },[currency])
    return data
}
export default useCurrencyInfo;
import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [state,setState] = useState({
        
        hasError: null,
        isLoading: true,
        data: null
    })
  
    const getFetch = async () =>{
        
        setState({
            ...state,
            isLoading: true
        })

        const resp =  await fetch(url)
        const data = await resp.json()
        setState({
            data,
            isLoading: false,
            hasError: null,
        })
    }


    useEffect(()=>{
        getFetch()
    },[url])

    return{
        ...state
    }
}

export default useFetch
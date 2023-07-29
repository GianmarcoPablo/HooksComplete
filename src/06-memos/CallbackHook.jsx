import { useState,useCallback } from "react"
import ShowIncrement from "./showIncrement"

const CallbackHook = () => {

    const [counter, setCounter] = useState(10)
    
    const increment = useCallback(
        () => {
            setCounter(c => c + 1)
          },
        [], 
    )

  
   
    
    return (
        <>
            <h1>useCallback hook: {counter} </h1>
            <hr/>
            <ShowIncrement
                increment={increment}
            />
        </>
    )
}

export default CallbackHook
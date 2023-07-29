import { useCounter } from "../hooks";
import { useMemo, useState } from "react";


const heavyStuff = (iterations = 100) => {
    for(let i = 0; i < iterations; i++){
        console.log('Here we go...')
    }

    return `${iterations} iterations done!`
}

const MemoHooks = () => {

    const {counter,increment} = useCounter(1)
    const [show,setShow] = useState(true)
    const memorizedValue = useMemo(()=> heavyStuff(counter),[counter])

    return (

        <>
            <h1>Counter: <small>{counter}</small> </h1>

            <hr/>

            <h4>
                {memorizedValue }
            </h4>

            <button
                className="btn btn-primary"
                onClick={() => increment(1)}
            >
                +1
            </button>
            
            <button
                className="btn btn-outline-primary ml-3"
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>

        </>
    )
}

export default MemoHooks
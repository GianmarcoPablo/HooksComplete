import { useCounter } from "../hooks"
import { useState } from "react"
import Small from "./Small"


const Memorize = () => {

    const {counter,increment} = useCounter(1)
    const [show,setShow] = useState(true)

    return (

        <>
            <h1>Counter: <Small value={counter}>{ counter } </Small> </h1>

            <hr/>

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

export default Memorize
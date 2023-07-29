import useCounter from "../hooks/useCounter"

const CounterHook = () => {

    const {counter,increment,decrement,reset} = useCounter(10)
    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr/>
            <button 
                className='btn btn-primary'
                onClick={()=>increment(10)}
            >
                +1 
            </button>
            <button 
                className='btn btn-primary'
                onClick={reset}
            >
                Reset
            </button>
            <button 
                className='btn btn-primary'
                onClick={()=>decrement(10)}
            >
                -1 
            </button>
        </>
    )
}

export default CounterHook
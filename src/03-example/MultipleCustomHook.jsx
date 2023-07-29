import { useCounter,useFetch } from '../hooks'
import {LoadingQuote,Qoute} from "./"

const MultipleCustomHook = () => {

    const {increment,counter} = useCounter(1)
    
    const {data, isLoading,hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

    const {author,quote} = !!data && data[0]

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            { isLoading ? <LoadingQuote/> : <Qoute author={author} quote={quote} /> }

            <button 
                onClick={() => increment(1)} 
                className="btn btn-primary"
                disabled={isLoading}
            >
                Next quote
            </button>
        </>
    )
}

export default MultipleCustomHook
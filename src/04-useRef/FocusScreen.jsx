import { useRef } from "react"


const FocusScreen = () => {

    const inputRef = useRef();

    const onFocus = () => {

        inputRef.current.select();
        console.log(inputRef);
    }
    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={inputRef}
                type="text"
                placeholder="ingrese su nombre"
                className="form-control"
            />

            <button
                className="btn btn-outline-primary mt-3"
                onClick={onFocus}
            >
                set Focus
            </button>  
        </>
    )
}

export default FocusScreen
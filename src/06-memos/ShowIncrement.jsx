import React from 'react'

const showIncrement = ({increment}) => {

    console.log('Me volví a generar :(')

    return (
        <button
            className="btn btn-primary"
            onClick={()=>{
                increment()
            } }
        >
            Incrementar
        </button>
    )
}

export default showIncrement
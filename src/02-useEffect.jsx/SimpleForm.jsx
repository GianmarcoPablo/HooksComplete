import { useState,useEffect } from 'react'
import Message from './Message'

const SimpleForm = () => {

    const [formState,setFormState] = useState({
        username: "gianmarco",
        email: "fernando@google.com"
    })

    const {username,email} = formState
 
    const onInputChange = e =>{
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    } 
 

    useEffect(()=>{
        //console.log("useEffe called!")
    },[]) 

    useEffect(()=>{
        //console.log("useEffe changed!")
    },[formState]) 

    useEffect(()=>{
        //console.log("email changed!")
    },[email]) 

    useEffect(()=>{
        console.log("email changed!")

        return () =>{

        }
    },[email]) 

    return (
        <>
            <h1>Simple form</h1>

            <hr/>
            <input
                type='text'
                className='form-control'
                placeholder='Username'
                name='username'
                value={username}
                onChange={onInputChange}
            />

            <input
                type='email'
                className='form-control mt-2'
                placeholder='fernando@google.com'
                name='email'
                value={email}
                onChange={onInputChange}
            />

            {username === "gianmarco" && <Message/>}
        </>
    )
}

export default SimpleForm
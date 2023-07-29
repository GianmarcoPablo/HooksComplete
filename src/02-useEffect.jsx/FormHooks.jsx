import useForm from "../hooks/useForm"


const FormHooks = () => {
    const {username,email,password, onInputChange,onResetForm} = useForm({
        username: "",
        email: "",
        password: ""
    })

    return (
        <>
            <h1>Simple form</h1>

            <hr />
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
            <input
                type='password'
                className='form-control mt-2'
                placeholder='contraseña'
                name='password'
                value={password}
                onChange={onInputChange}
            />

            <button
                className='btn btn-danger mt-2'
                onClick={onResetForm}
            >
                Borrar
            </button>
        </>
    )
}

export default FormHooks
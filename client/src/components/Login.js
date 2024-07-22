import React from 'react'
import { useState } from 'react';

function Login() {
    const [usename, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const Login = () => { };
    return (
        <div className='Login'>
            <lable> Login  </lable>

            <input placeholder="Username" onChange={(event) => {
                setUsername(event.target.value );
            }
            } />

            <input placeholder="Password" onChange={(event) => {
                setPassword(event.target.value);
            }
            } />
            <button onClick={Login}>Sing Up</button>
        </div>
    )
}

export default Login

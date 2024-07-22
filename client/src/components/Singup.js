import { useState } from "react"
import React from 'react'

function Singup() {
    const [user, setUser] = useState(null)

    const Singup = () => { };

    return (
        <div className='Singup'>
            <lable> Singup  </lable>
            <input placeholder="First Name" onChange={(event) => {
                setUser({ ...user, firstName: event.target.value });
            }
            } />

            <input placeholder="Last Name" onChange={(event) => {
                setUser({ ...user, lastName: event.target.value });
            }
            } />

            <input placeholder="Username" onChange={(event) => {
                setUser({ ...user, username: event.target.value });
            }
            } />

            <input placeholder="Password" onChange={(event) => {
                setUser({ ...user, password: event.target.value });
            }
            } />
            <button onClick={Singup}>Sing Up</button>
        </div>
    )
}

export default Singup

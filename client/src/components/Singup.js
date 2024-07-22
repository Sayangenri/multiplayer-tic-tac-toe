import { useState } from "react"
import React from 'react'

import Axios from "axios";
import Cookies from "universal-cookie";

function Singup({setIsAuth}) {
    const cookies = new Cookies();
    const [user, setUser] = useState(null)

    const Singup = () => {
        Axios.post("http://localhost:3001/singup", user).then((res) => {
            const { token, userId, firstName, lastName, username, hashpass } = res.data;
            cookies.set("token", token);
            cookies.set("userId", userId);
            cookies.set("firstName", firstName);
            cookies.set("lastName", lastName);
            cookies.set("username", username);
            cookies.set("hashpass", hashpass);
            setIsAuth(true);
        });
    };

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

import React, { useState } from 'react'
import {login} from '../scripts/auth'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email && password) {
            // verification de l'email
            if(email.includes('@') && email.includes('.')) {
                login({email, password})
                .then(res => {
                    if(res === 'User not found') {
                        alert('La connexion a échoué')
                    }else {
                        alert('Connexion réussie')
                        window.location.href = '/accueil'
                    }
                })
            }else {
                alert('Please enter a valid email')
            }
        }else {
            alert('Please fill in all fields')
        }
    }

    return (
        <>
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social Network</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Social Network.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox">
                        <input placeholder="Email" className="loginInput" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <input placeholder="Password" className="loginInput" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <button className="loginButton" onClick={handleSubmit}>Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton" onClick={handleSubmit}>Create a New Account</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
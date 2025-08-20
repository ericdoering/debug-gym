"use client";

import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegister, setIsRegister] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const { login, signup } = useAuth();
    const cantAuth = !email.includes('@') || password.length < 6;


    async function handleAuthUser(){
        if(cantAuth){
            return
        }
        setIsAuthenticating(true)
        try {
            if(isRegister){
                await signup(email, password)
            }
            else{
                await login(email, password)
            }
        }
        catch(err) {
            console.log(err.message)
        }
        finally {
            setIsAuthenticating(false)
        }
    };



    return (
        <>
            <div className='login-container'>
                <h1 className='text-gradient'>DebugGYM</h1>
                <h2>Where Bugs Build Better Devs.</h2>
                <p>Improve your debugging skills with an ever growing library of
                    coding challenges in your chosen stack! Whether you are a fresh student
                    or a seasoned senior developer. DebugGYM is the place to train!
                </p>
                <div className='full-line'></div>
                <h6>Sign In</h6>
                <div>
                    <p>Email</p>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Enter your email' />
                </div>
                <div>
                    <p>Password</p>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='************' />
                </div>
                <button onClick={handleAuthUser} disabled={cantAuth || isAuthenticating} className='submit-btn'>
                    <h6>{isAuthenticating ? "Submitting..." : "Submit"}</h6>
                </button>
                <div className='secondary-btns-container'>
                    <button className='card-button-secondary'>
                        <small>Login</small>
                    </button>
                    <button className='card-button-secondary'>
                        <small>Forgot Password?</small>
                    </button>
                </div>
                <div className='full-line'></div>
                <footer>
                    <a target="_blank" href="https://github.com/ericdoering">
                        <img alt='profile-pic' src='https://avatars.githubusercontent.com/u/110167204?v=4' />
                        <h6>ericdoering</h6>
                        <i className='fa-brands fa-github'></i>
                    </a>
                </footer>
            </div>
        </>
    )
}
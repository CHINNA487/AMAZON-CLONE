import React from 'react'
import './SignIn.css'
import {useState} from 'react'
import {Link} from 'react-router-dom';
import {auth} from './firebase';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
    }
    const register = e =>{
        e.preventDefault();
    }
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth)=>{
        console.log(auth);
    })
    .catch(error => alert(error.message))



    return (
        <div className='signin'>
            <Link to="/">
                <img className='signin__logo'
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>

            </Link>
            <div className='signin__container'>
                <h1>Sign-in</h1>
                <form>
                    <h2>Email</h2>
                    <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/> 
                    <h2>Password</h2>
                    <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/> 
                    <button type='submit' onClick={signIn}
                    className='signin__signInButton'>Sign In</button>
                </form>
                <button onClick={register}
                className='signin__registerButton'>Create Amazon Account</button>

            </div>
            
        </div>
    )
}

export default SignIn;

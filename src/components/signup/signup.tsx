import './signup.css'
import {useState} from "react";
import {auth} from "../../firebase.ts";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";

export function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   const navigate = useNavigate()
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then(() => {
            navigate('/profile')
            }).catch(err => {alert(err.message)})
    }

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then(() => {
            navigate('/profile')
          }).catch(err => {alert(err.message)})
    }

    return (
        <div className='signup'>
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit' onClick={signIn}>Sign In</button>
                <h4>
                    <span className='signup__gray'>New to Netflix? </span>
                    <span onClick={register} className='signup__link'>
                     Sign Up now.</span>
                </h4>
            </form>
        </div>
    );
}
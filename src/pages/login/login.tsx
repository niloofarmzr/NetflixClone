import './login.css'
import {useState} from "react";
import {Navbar} from "../../components/navbar/navbar.tsx";
import {Signup} from "../../components/signup/signup.tsx";

export function Login() {
    const [_email, setEmail] = useState('');
    const [signIn, setSignIn] = useState(false)
    return (
        <div className='login'>
            <Navbar/>
            {signIn ? <Signup/> :
                <div className='login__body'>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel any time.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className='login__form'>
                        <form>
                            <input className='login__input' type="email" placeholder='Email Address'
                                   onChange={e => setEmail(e.target.value)}/>
                            <button className='login__button' onClick={() => setSignIn(true)}>Get Started</button>
                        </form>
                    </div>
                </div>
            }
            <div className='login__gradient'/>
        </div>
    );
}
import './navbar.css'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUserState} from "../../features/userSlice/slice.ts";
import {AVATAR_URL} from "../../constants";

export function Navbar() {
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
    const { user } = useSelector(selectUserState);
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
            } else setIsTopOfPage(false);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`nav ${!isTopOfPage ? 'nav__black' : ''}`}>
            <div className='nav__contents'>
                <img onClick={() => navigate('/')} className='nav__logo'
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                     alt=""/>
                {user ? <img  onClick={() => navigate('/profile')} className='nav__avatar'
                             src={AVATAR_URL} alt=""/>
                    :
                    <button className='nav__button' onClick={() => navigate('/login')}>Sign In</button>
                }
            </div>
        </div>
    );
}
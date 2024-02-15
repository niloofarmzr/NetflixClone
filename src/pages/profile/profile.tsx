import './profile.css'
import {Navbar} from "../../components/navbar/navbar.tsx";
import {useSelector} from "react-redux";
import {selectUserState} from "../../features/userSlice/slice.ts";
import {useNavigate} from "react-router-dom";
import {AVATAR_URL} from "../../constants";
import {signOut} from "firebase/auth";
import {auth} from "../../firebase.ts";

export function Profile() {
    const navigate = useNavigate();
    const { user } = useSelector(selectUserState)

    const handleLogout = () => {
        signOut(auth).then(() => {navigate('/')})
    }

    return (
        <div className='profile'>
            <Navbar/>

            <div className='profile__body'>
                <h1>Edit Profile</h1>
                <div className='profile__contents'>
                    <div className='profile__avatar'>
                        <img src={AVATAR_URL} alt=""/>
                    </div>
                    <div className='profile__details'>
                        <div className='profile__email'>{user?.email}</div>
                        <h3>Plans (Current Plan: premium)</h3>
                        <div className='profile__date'>Renewal date: 04/03/2021</div>
                        <div className='profile__plans'>
                            <div className='profile__plan'>
                                <div>
                                    Netflix Standard
                                    <br/>
                                    1080p
                                </div>
                                <div>
                                    <button className='profile__subscribeButton'>Subscribe</button>
                                </div>
                            </div>
                            <div className='profile__plan'>
                                <div>
                                    Netflix Basic
                                    <br/>
                                    480p
                                </div>
                                <div>
                                    <button className='profile__subscribeButton'>Subscribe</button>
                                </div>
                            </div>
                            <div className='profile__plan'>
                                <div>
                                    Netflix Premium
                                    <br/>
                                    4k
                                </div>
                                <div>
                                    <button className='profile__subscribeButton profile__subscribeButton_disabled'>Current Package</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='profile__logout' onClick={handleLogout}>
                    Sign out
                </button>
            </div>

        </div>
    );
}
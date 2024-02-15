import './App.css'
import {HomeScreen} from "./pages/homeScreen/homeScreen.tsx";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {Profile} from "./pages/profile/profile.tsx";
import {Login} from "./pages/login/login.tsx";
import {useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./firebase.ts";
import {useDispatch} from "react-redux";
import {login, logout} from "./features/userSlice/slice.ts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen/>,
    },
    {
        path: "/profile",
        element: <Profile/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
]);

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
            if (userAuth) {
                // Logged In
                dispatch(login({uid: userAuth.uid, email: userAuth.email, phoneNumber: userAuth.phoneNumber, photoURL: userAuth.photoURL}))
            } else {
                //     Logged out
                dispatch(logout())
            }
        })
        return () => unsubscribe();
    }, [])

    return (
        <div className='app'>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App

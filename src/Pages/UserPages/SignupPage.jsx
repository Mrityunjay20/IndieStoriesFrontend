import { Alert, Button } from '@material-tailwind/react';
import axios from 'axios';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import img1 from '../../assets/img3.jpg';
import { auth, provider } from '../../firebaseConfig';

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.loginauth.isLoggedIn); 
    const [userExists, setUserExists] = useState(false);
    const [error, setError] = useState(null);

    async function createUser(email, firebaseUid) {
        try {
            const createUserData = { email, firebaseUid };
            console.log("Sending data:", createUserData);  // Log sent data
            const resultUser = await axios.post("http://localhost:3000/user/signup", createUserData);
            console.log("User created:", resultUser);
        } catch (error) {
            console.error("Error creating user:", error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        try {
            // Check if the user already exists
            await axios.get(`http://localhost:3000/user/${email}`);
            setUserExists(true);
            setTimeout(() => setUserExists(false), 10000);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                // User does not exist, proceed with sign up
                try {
                    const result = await createUserWithEmailAndPassword(auth, email, password);
                    const user = result.user;
                    localStorage.clear();
                    localStorage.setItem("auth", user.auth || ""); // Adjust if auth is not needed
                    localStorage.setItem("accesstoken", user.accessToken || "");
                    localStorage.setItem("displayName", user.displayName || "");
                    localStorage.setItem("email", user.email || "");
                    localStorage.setItem("photoURL", user.photoURL || "");
                    localStorage.setItem("uid", user.uid || "");
                    
                    await createUser(user.email, user.uid);
                    dispatch(login({ data: result.user }))
                    navigate('/userdashboard');
                } catch (signUpError) {
                    console.error("Email esists in our system please try loggin in", signUpError);
                    setError("Email exists in our system please try loggin in");
                }
            } else {
                console.error("Error checking user existence:", error);
                setError("Email esists in our system please try loggin in");
            }
        }
    };

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            try {
                const checkUser = await axios.get(`http://localhost:3000/user/${user.email}`);
                if (checkUser) {
                    setUserExists(true);
                    setTimeout(() => setUserExists(false), 10000);
                } else {
                    localStorage.clear();
                    localStorage.setItem("auth", user.auth || ""); // Adjust if auth is not needed
                    localStorage.setItem("accesstoken", user.accessToken || "");
                    localStorage.setItem("displayName", user.displayName || "");
                    localStorage.setItem("email", user.email || "");
                    localStorage.setItem("photoURL", user.photoURL || "");
                    localStorage.setItem("uid", user.uid || "");
                    await createUser(user.email, user.uid);
                    navigate('/userdashboard');
                }
            } catch (error) {
                console.error("Error checking user existence:", error);
                setError("Error checking user existence. Please try again.");
            }
        } catch (error) {
            console.error("Error signing in with Google:", error);
            setError("Error signing in with Google. Please try again.");
        }
    };

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            navigate('/userdashboard');
        }
    }, [isLoggedIn, navigate]);

    return (
        <>
            <div className="flex h-screen bg-black">
                <img className='hidden md:flex md:w-1/2 object-cover opacity-70' src={img1} alt="Signup background" />
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-10">
                    {userExists && (
                        <Alert color='red' className='w-3/4 text-justify mx-auto my-2 z-50'>
                            This email already exists in our system, try logging in instead
                        </Alert>
                    )}
                    {error && (
                        <Alert color='red' className='w-3/4 text-justify mx-auto my-2 z-50'>
                            {error}
                        </Alert>
                    )}
                    <h2 className="text-2xl font-bold mb-6 text-center">CREATE AN ACCOUNT</h2>
                    <form className="w-full max-w-xs xl:text-xl" onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="w-full p-3 mb-4 border rounded" 
                            ref={emailRef}
                            required
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="w-full p-3 mb-4 border rounded" 
                            ref={passwordRef}
                            minLength='8'
                            required
                        />
                        <button className="w-full p-3 mb-4 bg-black text-white shadow-lg">
                            SIGN UP
                        </button>
                    </form>
                    <button onClick={signInWithGoogle} className="w-full max-w-xs p-3 mx-2 mb-4 border flex items-center justify-center shadow-lg">
                        <i className="fa-brands -px-4 fa-google p-2"></i>
                        Continue with Google
                    </button>
                    <p>Already have an account? <a href="/login" className="text-blue-500">Log in</a></p>
                </div>
            </div>
        </>
    );
}

export default Signup;

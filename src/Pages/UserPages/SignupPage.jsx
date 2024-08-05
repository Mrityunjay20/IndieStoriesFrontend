import { signInWithPopup } from 'firebase/auth';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';

import img1 from '../../assets/img3.jpg';
import { auth, provider } from '../../firebaseConfig';
import { signInWithGoogle } from '../../service/AuthService';
import { login } from '../../service/GlobalState';

const Signup = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.loginauth.isLoggedIn); 
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

    }

    const signInWithGoogle = async () => {
        try {
            // Perform sign-in with Google
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
    
            // Create a serializable user object
            const serializableUser = {
                auth: user.auth, // This might not be serializable or needed; adjust as necessary
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid
            };
    
            // Clear localStorage and set items
            localStorage.clear();
            localStorage.setItem("auth", user.auth || ""); // Adjust if auth is not needed
            localStorage.setItem("displayName", user.displayName || "");
            localStorage.setItem("email", user.email || "");
            localStorage.setItem("photoURL", user.photoURL || "");
            localStorage.setItem("uid", user.uid || "");
    
            // Dispatch the login action
            dispatch({
                type: 'auth/login',
                payload: serializableUser
            });
        } catch (error) {
            console.error("Error signing in with Google: ", error);
        }
    };
    

      
      useEffect(() => {
        console.log('isLoggedIn changed:', isLoggedIn);
        if (localStorage.getItem('auth')) {
          navigate('/userdashboard');
        }
      }, [isLoggedIn, navigate]);


    return (
        <div className="flex h-screen bg-black">
            <img className='hidden md:flex md:w-1/2 object-cover opacity-70' src={img1}></img>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-8">
                <h2 className="text-2xl font-bold mb-6  text-center">CREATE AN ACCOUNT</h2>
                <form className="w-full max-w-xs xl:text-xl" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        className="w-full p-3 mb-4 border rounded" 
                        ref={nameRef}
                        required

                    />
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
                        required
                    />
                    <button 
                        
                        className="w-full p-3 mb-4 bg-black text-white shadow-lg">
                        SIGN UP
                    </button>
                    
                </form>
                <button onClick={signInWithGoogle} className="w-full p-3 mb-4 border flex items-center justify-center shadow-lg">
                        <i className="fa-brands fa-google p-2"></i>
                        Continue with Google
                    </button>
                
                
                <p>Already have an account? <a href="#" className="text-blue-500">Log in</a></p>
            </div>
        </div>
    );
}

export default Signup;

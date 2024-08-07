import { Alert, Button } from '@material-tailwind/react';
import axios from 'axios';
import { signInWithPopup } from 'firebase/auth';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';

import img1 from '../../assets/img3.jpg';
import { auth, provider } from '../../firebaseConfig';
import {signUp } from '../../service/AuthService';

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.loginauth.isLoggedIn); 
    const dispatch = useDispatch()
    const [userExists, setUserExists] = useState(false);


    async function createUser(email,name,firebaseuid){
        const createUserData = {
            email: email,
            name: name,
            firebaseUid: firebaseuid
        }
        const resultuser = await axios.post("http://localhost:3000/user/signup",createUserData);
        console.log(resultuser);
        setErrorBar();
    }

    function setErrorBar(){
        setIsError(true);
        setTimeout(() => {
            setIsError(false);
        }, 5000);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const result = await signUp(email,password);
        
    }



    const signInWithGoogle = async () => {
        try {
            // Perform sign-in with Google
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const checkUser = await axios.get("http://localhost:3000/user/signup",user.email);
            if(checkUser){
                setUserExists(true);
                setInterval(() => {
                    setUserExists(false);
                }, 10000);
            }else{
            localStorage.clear();
            localStorage.setItem("auth", user.auth || ""); // Adjust if auth is not needed
            localStorage.setItem("accesstoken", user.accessToken || "");
            localStorage.setItem("displayName", user.displayName || "");
            localStorage.setItem("email", user.email || "");
            localStorage.setItem("photoURL", user.photoURL || "");
            localStorage.setItem("uid", user.uid || "");
            }
            console.log(checkUser);
            createUser(user.email,user.displayName,user.uid);
        } catch (error) {
            console.error("Error signing in with Google: ", error);
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
            <img className='hidden md:flex md:w-1/2 object-cover opacity-70' src={img1}></img>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-10">
            {userExists?
                <Alert color='red' className='w-3/4 text-justify mx-auto my-2 z-50'>This email already exists in our system, try logging in instead</Alert>:null}
                <h2 className="text-2xl font-bold mb-6  text-center">CREATE AN ACCOUNT</h2>
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
                        required
                    />
                    <button 
                        
                        className="w-full p-3 mb-4 bg-black text-white shadow-lg">
                        SIGN UP
                    </button>
                    
                </form>
                <button onClick={signInWithGoogle} className=" w-full max-w-xs p-3 mx-2 mb-4 border flex items-center justify-center shadow-lg">
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

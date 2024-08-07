import { signInWithPopup } from 'firebase/auth';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import img1 from '../../assets/img2.jpg';
import { login } from '../../service/GlobalState';
import { auth, provider } from '../../firebaseConfig';
import ForgotPasswordDialog from './ForgotPassword';
import { Button } from '@material-tailwind/react';


const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.loginauth.isLoggedIn); 
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log('Email:', email);
        console.log('Password:', password);
    }

    const signInWithGoogle = async () => {
        console.log("button clicked")
        try {
            
          const result = await signInWithPopup(auth, provider);
          
          const user = result.user;
          // Handle sign-in success (e.g., save user info)
          console.log(result.user);
          localStorage.clear();
            localStorage.setItem("auth", user.auth || ""); // Adjust if auth is not needed
            localStorage.setItem("accesstoken", user.accessToken || "");
            localStorage.setItem("displayName", user.displayName || "");
            localStorage.setItem("email", user.email || "");
            localStorage.setItem("photoURL", user.photoURL || "");
            localStorage.setItem("uid", user.uid || "");
    
            // Dispatch the login action
          dispatch(login({ data: result.user }))
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
                <h2 className="text-2xl font-bold mb-6">LOG IN</h2>
                <div className='w-max'>
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
                    <Button 
                        type="submit" 
                        className="w-full p-3 mb-4 text-white shadow-lg">
                        LOGIN
                    </Button>
                    
                </form>
                <Button onClick={signInWithGoogle} className="w-full p-3 mb-4 border flex items-center justify-center shadow-lg">
                        <i class="fa-brands fa-google p-2"></i>
                        Continue with Google
                    </Button>
                </div>
                
                <p>Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a></p>
                <ForgotPasswordDialog/>
            </div>
        </div>
    );
}

export default Login;

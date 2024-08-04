import { signInWithPopup } from 'firebase/auth';
import React, { useRef } from 'react';
import img1 from '../assets/img3.jpg';
import { auth, provider } from '../firebaseConfig';

const Signup = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
    }

    const signInWithGoogle = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          // Handle sign-in success (e.g., save user info)
          console.log(result.user);
        } catch (error) {
          console.error("Error signing in with Google: ", error);
        }
      };

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

                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full p-3 mb-4 border rounded" 
                        ref={emailRef}

                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="w-full p-3 mb-4 border rounded" 
                        ref={passwordRef}

                    />
                    <button 
                        
                        className="w-full p-3 mb-4 bg-black text-white shadow-lg">
                        SIGN UP
                    </button>
                    
                </form>
                <button onClick={signInWithGoogle} className="w-full p-3 mb-4 border flex items-center justify-center shadow-lg">
                        <i class="fa-brands fa-google p-2"></i>
                        Continue with Google
                    </button>
                
                <p>Already have an account? <a href="#" className="text-blue-500">Log in</a></p>
            </div>
        </div>
    );
}

export default Signup;

'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signin() {
    const [formData, setFormData] = useState({enail: '', password: ''});
    const [error, setError] = useState('');
    const router = useRouter();

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData,[e.target.name]: e.target.value});
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('/api/signin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
        })
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            localStorage.setItem('user',JSON.stringify({token: data.token}));
            router.push('/');
        }else{
            setError(data.error);
            console.log(data.error);
        }
    }
    




    return (
        <>
            <Link href="/">
                <div className="flex justify-center items-center h-[100px]">
                    <h1 className="font-pixel text-5xl text-center mt-5">LOCKD.</h1>
                </div>
                
            </Link>        
            <div className="flex justify-evenly items-center h-[85vh]">
                <div className="max-w-[400px]">
                    <div className="mb-5">
                        <h1 className="font-pixel text-5xl text-center ">Welcome Back</h1>
                        <p className="font-inter text-center">Sign in to your account</p>
                    </div>
                    <div className="flex  items-center justify-center rounded-md py-[6.5px] border-black border-[0.5px] mb-2 shadow-md">
                        <Image src='/googleLogo.svg' alt="rdmn" width={31} height={10}/>
                        <p className="ml-2">Continue with Google</p>
                    </div>

                    <div className="flex justify-center items-center mb-2">
                        <hr style={{borderColor: 'black'}}   className="w-[200px]"/>
                        <p className="text-center p-2 font-pixel text-[18px]">or</p>
                        <hr style={{borderColor: 'black'}} className="w-[200px]"/>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label className="font-inter block"  htmlFor="email">Email</label>
                            <input type="email" onChange={handleChange} id="email" name="email" className="border-black border-[0.5px] mb-2 shadow-md h-[41px] w-[400px] pl-2 bg-oat rounded-md"/>
                        </div>

                        <div className="mb-2">
                            <div className="flex justify-between">
                                <label className="font-inter" htmlFor="password">Password</label>
                                <p className="justify-center text-[13px] items-center content-center font-inter">Forgot Password?</p>
                            </div>                    
                            <input type="password" onChange={handleChange} id="password" name="password" className="border-black border-[0.5px] shadow-md h-[41px] w-[400px] mb-[50px] pl-2 bg-oat rounded-md"/>
                        </div>
                        <button type="submit" className="bg-black w-[400px] text-oat font-pixel text-[28px] rounded-md shadow-md h-[48px]">Sign In</button>
                    </form>

                    <Link href="/signup">
                        <p className="text-center w-[400px] mt-4">Don’t have an account? <span className="underline">Sign up Now</span></p>
                    </Link>
                </div>
            </div>
        </>
    )
}
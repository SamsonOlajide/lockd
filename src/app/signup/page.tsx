'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,[e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log(data);
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
                        <h1 className="font-pixel text-5xl text-center ">Get Started</h1>
                        <p className="font-inter text-center">Create a new account</p>
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
                            <label className="font-inter block" htmlFor="name">Username</label>
                            <input onChange={handleChange} className="font-inter border-black border-[0.5px] mb-2 shadow-md h-[41px] w-[400px] pl-2 bg-oat rounded-md" type="text" id="username" name="username" />
                        </div>

                        <div className="mb-2">
                            <label className="font-inter block"  htmlFor="email">Email</label>
                            <input onChange={handleChange} type="email" id="email" name="email" className="border-black border-[0.5px] mb-2 shadow-md h-[41px] w-[400px] pl-2 bg-oat rounded-md"/>
                        </div>

                        <div className="mb-2">
                            <label className="font-inter block" htmlFor="password">Password</label>
                            <input onChange={handleChange} type="password" id="password" name="password" className="border-black border-[0.5px] shadow-md h-[41px] w-[400px] mb-[50px] pl-2 bg-oat rounded-md"/>
                        </div>
                        <button type="submit" className="bg-black w-[400px] text-oat font-pixel text-[28px] rounded-md shadow-md h-[48px]">Sign Up</button>
                    </form>
                    <Link href="/signin">
                        <p className="text-center w-[400px] mt-4">Have an account? <span className="underline">Sign in Now</span></p>
                    </Link>
                </div>
            </div>
        </>
    )
}
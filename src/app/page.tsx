'use client'
import Image from "next/image";
import { ChevronDown,Heart,LoaderCircle } from 'lucide-react';
import Link from "next/link";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import jwt from 'jsonwebtoken';



export default function Home() {
  const [user, setUser] = useState<{ token: string; } | null>(null);
  const [userName, setUserName] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if(user){
      const parsedUser = JSON.parse(user);
      const decoded = jwt.decode(parsedUser.token);
      if (typeof decoded !== 'string' && decoded && 'username' in decoded) {
        setUserName(decoded.username);
      }
      setUser(parsedUser);
      console.log(userName);
    } 
  },[]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const handleDashboard = () => {
    router.push('/dashboard');
  }


  // getUserName()


  return (
    <>

      <div className="flex flex-col justify-between h-screen">
        <div className="flex justify-end mt-3 mr-3">
          {user ? (
            <>
              <p className="font-pixel text-[24px] text-black">Welcome, {userName}</p>
              <button onClick={handleLogout} className="font-pixel text-[24px] bg-black text-oat w-40 py-1 rounded-xl">Logout</button>
              <button onClick={handleDashboard} className="font-pixel text-[24px] bg-black text-oat w-40 py-1 rounded-xl">Dashboard</button>
            </>
          ) : (
            <Link href="/signup">
              <button className="font-pixel text-[24px] bg-black text-oat w-40 py-1 rounded-xl">Enter</button>
            </Link>
          )}

        </div>
        <div className="flex justify-center items-center h-screen">
          <h1 className='font-pixel text-[128px]'>LOCKD.</h1>
        </div>
        <div className='flex justify-center animate-bounce'>
          <ChevronDown strokeWidth={3} size={50} />
        </div>
        <div className='flex justify-center'>
          <div className='flex justify-center bg-black p-11 w-4/5 mx-10 py-[16px] rounded-t-2xl'></div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='flex flex-col justify-center items-center bg-black text-oat w-4/5 mx-10 pb-[32px] rounded-b-2xl mb-[108px]'>
          {/* Main header */}
          <h1 className='font-pixel text-[96px] text-center max-w-[1261px] mb-6'>
            Share your favourite memories with one you love.
          </h1>

          {/* Content container */}
          <div className="relative w-full max-w-screen-lg">
            {/* Decorative hearts */}

            <div className="absolute top-[-160px] left-[980px] rotate-45 animate-ping">
              <Heart strokeWidth={1} size={100} />
            </div>
            <div className="absolute top-[-135px] left-[1008px] rotate-45 animate-ping">
              <Heart strokeWidth={1} size={48} />
            </div>

            {/* Columns */}
            <div className='columns-2 font-inter text-center gap-10 text-[23px] pb-3'>
              <p className='text-[23px]'>
                Lockd makes sharing your cherished moments effortless and secure. Invite your loved ones to join your shared space by providing them with a unique access code and your email credential.
              </p>
              <p className='text-[23px]'>
                Only the people you trust can view and contribute to your albums, creating a private, collaborative space for your favourite memories.
              </p>
            </div>
            <hr/>
            <div className='pt-3 font-inter text-center gap-6 text-[23px]'>
              <p className='text-center'>Lockd ensures that every interaction is personal, meaningful, and safe, fostering a digital haven where your memories are celebrated with the ones who matter most.</p>
            </div>
          </div>
        </div>
      </div>


      <div className='flex justify-center'>
        <div className='flex flex-col justify-center items-center bg-oat text-black border-2 border-black w-4/5 mx-10 rounded-2xl mb-[108px]'>
          {/* Main header */}
          <h1 className='font-pixel text-[96px] text-center max-w-[1261px] mb-6'>
            EGDE AI.
          </h1>

          <div className="flex relative lex-row">
            <Image src="/lockd.svg" width={500} height={500} className="mr-8" alt='image of a prop phone performing a loading'/>
            <div className="absolute top-[483px] left-[180px] skew-y-[-17deg]">
              <LoaderCircle size={140} strokeWidth={0.5} className="animate-spin"/>
            </div>
            <div className="flex flex-col justify-center max-w-[700px]">
              <div className="items-center max-w-[700px]">
                <p className="text-center content-center font-inter text-[24px] pt-[250px]">Our Edge AI is like your memory’s personal DJ, analysing captions and vibes on the spot to pick the perfect background for your moments. It’s fast, it’s private <strong>(no creepy cloud stuff)</strong>, and it’s got a vibe-checking superpower that ensures your albums always match your mood. Your memories, your way, secure and stylish!</p>
              </div>    
              <div className="pt-[250px] pl-[220px]">
                  <p className="text-center content-center font-inter text-[20px] text-gray-400">not beating the ‘AI’ buzzword allegations in 2025 :(</p>
              </div> 
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='bg-black text-oat w-4/5 mx-10 rounded-2xl mb-[108px]'>
        <div className="m-[100px]">
          <div className="flex columns-2 justify-evenly">
              <div className="max-w-[320px] mr-[40px]">
                    <h1 className="font-pixel text-[96px] text-left">Safety with LOCKD.</h1>
                    <p className="text-center">really.</p>
              </div>
              <div className="content-center relative ml-[50px]">
                    <div className="absolute top-[5px] left-[-77px] w-[454px]">
                      <Image src="/image2.png" width={900} height={500} className="animate-spiner" alt='image of a prop phone performing a loading'/>
                    </div>
                    <div>
                      <Image src="/image.png" width={300} height={300} alt='image of a prop phone performing a loading'/>
                    </div>
              </div>         
          </div> 
          <div className="mt-[100px] font-inter text-center text-[30px] max-w-[1137px]">
            <p>At Lockd, your memories are protected with end-to-end encryption, on-device AI, and a commitment to never share or sell your data—ensuring a private, secure, and trusted space for you and your loved ones.</p>
          </div>
        </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='flex flex-col justify-center items-center bg-oat text-black border-2 border-black w-4/5 mx-10 rounded-2xl mb-[108px]'>
          {/* Main header */}
          <h1 className='font-pixel text-[96px] text-center max-w-[1261px] mb-6'>
            Access from any Device
          </h1>
          <div className="mt-[40px] font-inter text-center text-[30px] max-w-[1137px]">
            <p>Enjoy seamless access to Lockd from any device, with your data securely synced across platforms using encrypted connections, ensuring privacy and safety no matter where you log in.</p>
          </div>

          <div>
            <div className="flex columns-3 justify-center mt-[90px] mb-[50px] gap-2 items-end max-w-[1137px]">
              <div className="p-8">
                <Image src="/device1.png" width={390} height={300} alt='image of a prop phone performing a loading'/>          
              </div>
              <div className="p-8">
                <Image src="/device2.png" width={360} height={300} alt='image of a prop phone performing a loading'/>          
              </div>
              <div className="justify-center items-center">
                <div className="place-content-center justify-center items-center py-8 px-16">
                  <Image src="/device3.png" width={112} height={300} className="" alt='image of a prop phone performing a loading'/>          
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className='flex justify-center'>
        <div className='bg-black text-oat w-4/5 mx-10 rounded-2xl mb-[108px]'>
        <div className="mt-[50px] mx-[50px]">
          <div className="flex columns-2 justify-evenly flex-row">
            <div className="columns-3 justify-evenly flex flex-col">
              <div className="max-w-[500px]">
                <h1 className="font-pixel text-[96px]">You’ve scrolled this far..</h1>
              </div>
              <div className="max-w-[500px] my-[30px]">
                <p className="font-pixel text-[45px]">Might aswell press that button 🙃</p>
              </div>
              <div className="content-center">
                <Link href={"/signup"}>
                  <button className="font-pixel w-[483px] font-bold bg-oat text-black text-[55px] py-1 rounded">BEGIN!</button>
                </Link>
              </div>

            </div>  

            <div>
              <Image src="/lastImg.png" width={500} height={500} alt='image of a prop phone performing a loading'/>
            </div>
          </div>

        </div>
        </div>
      </div>

    </>
  );
}

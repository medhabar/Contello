import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'   

const Navbar = () => {

    const navigate = useNavigate();
    const {user} = useUser();
    const {openSignIn} = useClerk();

    return (
        <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-baseline py-3 px-4 sm:px-20 xl:px-20'>
            <div className='flex sm:w-44 gap-2 items-center cursor-pointer' onClick={() => navigate('/')}>
                <img src={assets.logo} alt="logo" className='h-5'/>
                <h1 className='font-bold text-[#3A04FF] text-xl'>Contello</h1>
            </div>

            {
                user ? <UserButton /> :
                (
                    <button onClick={openSignIn} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>Get started <ArrowRight className='w-4 h-4'/> </button>
                )
            }
            
        </div>
    )
}

export default Navbar
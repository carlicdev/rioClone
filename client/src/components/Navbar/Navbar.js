import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
    return (
        <div className='flex w-full bg-gray-900 bg-opacity-50 py-3 content-base divide-x divide-gray-800 mb-5'>
            <div>
                <button className='inline lg:hidden text-gray-500 focus:outline-none hover:text-gray-600'>
                    <GiHamburgerMenu className='inline lg:hidden mb-1' size={25}/>
                </button>
                <div className='text-xl text-gray-100 mr-1 ml-1 inline'>
                    RUN IT ONCE
                </div>
            </div>
            <div className='hidden lg:inline mr-2 ml-2 px-4'>
                <ul>
                <li className='text-gray-100 semibold mr-4 inline mx-4'>Training</li>
                <li className='text-sm text-gray-400 font-thin mx-2 italic inline'>Pro Videos</li>
                <li className='text-sm text-gray-400 font-thin mx-2 italic inline'>Courses</li>
                <li className='text-sm text-gray-400 font-thin mx-2 italic inline'>Vision</li>
                </ul>
            </div>
            <div className='hidden lg:inline ml-2 mr-auto px-4'>
                <ul>
                <div className='text-sm text-gray-400 font-thin mx-2 italic inline'>Forums</div>
                <div className='text-sm text-gray-400 font-thin mx-2 italic inline' >More</div>
                </ul>
            </div>
            <div className='hidden md:block ml-auto mr-2  px-4'>
                <div className='text-sm text-gray-400 font-thin mx-3 italic inline'>Go to Run It Once Poker</div>
                <div className='text-sm font-semibold text-gray-400 mx-3 inline' >LOG IN</div>
                <button className='rounded-full text-sm text-white bg-red-700 py-1 mx-3 px-4 font-medium'>SIGN UP FREE</button>
            </div>
        </div>
    )
}

export default Navbar;

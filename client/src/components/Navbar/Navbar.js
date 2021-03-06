import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu , GiSpades } from 'react-icons/gi'

const Navbar = () => {
    return (
        <div className='flex w-full bg-black py-3 content-base divide-x divide-gray-800'>
            <div>
                <button className='inline lg:hidden text-gray-500 focus:outline-none hover:text-gray-600'>
                    <GiHamburgerMenu className='inline lg:hidden mb-1' size={25}/>
                </button>
                <div className='text-xl text-gray-100 mr-1 ml-1 inline'>
                    <Link to='/'>
                        <GiSpades className='inline' />
                    </Link>
                </div>
            </div>
            <div className='hidden lg:inline mr-2 ml-2 px-4'>
                <ul>
                <li className='text-gray-100 semibold mr-4 inline mx-4'>Training</li>
                <Link to='/videos'>
                    <li className='text-sm text-gray-400 font-thin mx-2 italic inline'>Pro Videos</li>
                </Link>
                <li className='text-sm text-gray-400 font-thin mx-2 italic inline'>Courses</li>
                <li className='text-sm text-gray-400 font-thin mx-2 italic inline'>
                    <Link to='/roster'>
                        Roster
                    </Link>
                </li>
                </ul>
            </div>
            <div className='hidden lg:inline ml-2 mr-auto px-4'>
                <ul>
                <div className='text-sm text-gray-400 font-thin mx-2 italic inline'>Forums</div>
                <div className='text-sm text-gray-400 font-thin mx-2 italic inline' >More</div>
                </ul>
            </div>
            <div className='hidden md:block ml-auto mr-2  px-4'>
                <Link to='/login'>
                    <div className='text-sm font-semibold text-gray-400 mx-3 inline' >LOG IN</div>
                </Link>
                <Link to='/signup'>
                    <button className='rounded-full text-sm text-white bg-red-700 py-1 mx-3 px-4 font-medium focus:outline-none'>REGISTRO GRATIS</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;

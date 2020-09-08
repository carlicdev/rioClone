import React from 'react';
import { Link } from 'react-router-dom';

const SimpleNav = () => {
    return (
        <div className='flex w-full bg-black py-3 content-base divide-x divide-gray-800 mb-5'>
            <Link to='/'>
                <div className='text-xl text-gray-100'>LOGO</div>
            </Link>
        </div>
    )
}

export default SimpleNav

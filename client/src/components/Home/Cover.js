import React from 'react';
import { Link } from 'react-router-dom';

const Cover = () => {
    return (
        <div className='p-16 text-left'>
            <div className='md:mt-5 lg:mt-32 xl:mt-15 text-gray-100 text-6xl font-bold'>Aprende de los Mejores</div>
            <div className='mt-2 text-gray-400 text-xl font-light'>La comunidad de Poker mas grande de Latinoamérica</div>
            <Link to='/signup'>
                <button className='mt-5 mr-5 bg-red-700 hover:bg-red-600 text-gray-100 px-4 py-3 rounded-full shadow focus:outline-none'>Regístrate sin Costo</button>
            </Link>
            <Link to='/login'>
                <button className='mt-5 bg-teal-600 hover:bg-teal-700 text-gray-100 px-16 py-3 rounded-full shadow focus:outline-none'>Log In</button>
            </Link>
        </div>
    )
}

export default Cover;

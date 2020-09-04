import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login-cover h-screen pt-16'>
            <div className='container p-2 bg-gray-800 max-w-xl shadow mx-auto rounded bg-opacity-25'>
                <div className='block text-xs text-white text-right mr-5 mt-1 underlined'>Forgot password?</div>
                <div className='block text-semibold text-2xl text-white text-left ml-4'>Login</div>
                <div className='flex flex-wrap p-2' >
                    <div className='xs:w-1 md:w-2/5 lg:w-2/5 px-2'>
                        <div className='text-sm text-left text-gray-500'>Username or Email</div>
                        <input className='w-full p-1 rounded bg-gray-700 text-gray-200 focus:outline-none focus:shadow-outline mr-5'/>
                    </div>
                    <div className='xs:w-1 md:w-2/5 lg:w-2/5 px-2'>
                        <div className='text-sm text-left text-gray-500'>Password</div>
                        <input className='w-full p-1 rounded bg-gray-700 text-gray-200 focus:outline-none focus:shadow-outline mr-5'/>
                    </div>
                    <div className='md:w-1/5 px-2 sm:w-5/5'>
                        <button className='mt-6 bg-red-700 text-white px-4 py-1 text-sm font-medium shadow-sm rounded'>
                            Log In
                        </button>
                    </div>
                </div>
                <div className='container text-left p-5'>
                    <div className='text-sm  text-white'>Aun no eres miembro?</div>
                    <div className='text-sm  text-gray-200'>Estas a un click de llevar tu juego al siguiente nivel</div>
                    <Link to='/signup'>
                        <button className='bg-teal-500 rounded text-white text-sm px-6 py-1 mt-6 focus:outline-none'>
                            Crear Cuenta
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;

import React from 'react';
import SimpleNav from '../Navbar/SimpleNav';
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <div className='login-cover h-screen'>
            <SimpleNav />
            <div className='pt-64'>
            <LoginForm />
            </div>
        </div>
    )
}

export default Login;

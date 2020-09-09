import React from 'react';
import Card from './Card';

const Signup = () => {
    return (
        <div>
            <div className='flex justify-center pb-2'>
                <ul>
                    <li className='inline font-semibold text-grey-800 mr-5'>1. Planes</li>
                    <li className='inline font-semibold text-grey-800 mr-5'>2. Cursos</li>
                </ul>
            </div>
            <hr/>
            <div className='container text-center mx-auto mt-5'>
                <div className='text-gray-900 font-semibold text-3xl'>Nuestros Planes</div>
                <div className='text-gray-700 text-xl'>Planes que se ajustan a tus necesidades</div>
            </div>
            <div className='flex flex-wrap justify-center xl:max-w-1/3 p-5'>
                <Card title='Esencial' subtitle='Get a free taste' price='GRATIS' bg='white' text='gray-900'/>
                <Card title='Elite' subtitle='Get a free taste' price={800} bg='black' text='gray-100'/>
                <Card title='Pro' subtitle='Get a free taste' price={450} bg='gray-900' text='gray-100'/>
            </div>
        </div>
    )
}

export default Signup

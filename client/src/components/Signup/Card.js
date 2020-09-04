import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Card = (props) => {
    const { title, subtitle, price, bg, text} = props;
    return (
        <div className='lg:w-1/3 md:w-1/2 w-full'>
            <div className={`max-w-sm p-5 bg-${bg} text-${text} border border-gray-500 mx-auto`}>
                <div className='text-center text-2xl font-bold'>{title.toUpperCase()}</div>
                <div className='text-center text-md mb-5'>{subtitle}</div>
                <hr/>
                <div className='text-center mt-5 text-5xl '>{price > 0 ? '$' : null}{price + '.00'}</div>
                <div className='text-center text-sm font-semibold '>/MES</div>
                <div className='container text-justify text-sm  p-10'>
                     <div className=''><span><FaCheckCircle className='inline text-green-700 mb-1'/></span> Unlimited Forum Access</div>
                     <div className=''><span><FaCheckCircle className='inline text-green-700 mb-1'/></span> Unlimited Forum Access</div>
                     <div className=''><span><FaCheckCircle className='inline text-green-700 mb-1'/></span> Unlimited Forum Access</div>
                     <div className='text-gray-600'> Unlimited Forum Access</div>
                </div>
                <button className='bg-teal-600 focus:outline-none hover:bg-teal-700 rounded-full text-gray-200 px-4 py-2'>ELEGIR PLAN</button>
            </div>
        </div>
    )
}

export default Card

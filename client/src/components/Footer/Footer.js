import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black text-gray-100 p-10 footer'>
            <div className='flex flex-wrap'>
                <div className='container text-left'>
                    <div className='font-bold text-xl'>Aces Plus</div>
                    <div className='text-sm text-gray-400'>2020 Aces Plus. Al rights reserved</div>
                </div>
                <div className='container mt-10 lg:mt-1 mr-1 ml-auto'>
                    <div className='flex flex-wrap max-w-xl mr-1 ml-auto'>
                        <div className='container text-justify md:w-1/3 w-full mb-10 '>
                            <div className='font-semibold mb-5'>About</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>About Us</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>Affiliates</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>Meet the Pros</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>Top Members</div>
                        </div>
                        <div className='container text-justify md:w-1/3 w-full mb-10'>
                            <div className='font-semibold mb-5'>Account</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>About Us</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>Affiliates</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>Meet the Pros</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>Top Members</div>
                        </div>
                        <div className='container text-justify md:w-1/3 w-full mb-10'>
                            <div className='font-semibold mb-5'>Social</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>About Us</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>Affiliates</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>Meet the Pros</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>Top Members</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

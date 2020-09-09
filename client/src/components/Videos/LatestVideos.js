import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegPlayCircle } from 'react-icons/fa'

const LatestVideos = () => {
    return (
        <div className='w-full bg-gray-900 text-gray-100'>
            <div className='grid grid-cols-2'>
                <div className='lg:col-span-1 col-span-2 p-5'>
                    <div className='text-gray-600 font-semibold'>Últimos Videos:</div>
                    <div className='p-5'>
                        <div className='bg-gray-700 flex max-w-lg mx-auto shadow'>
                            <img src={require('../../images/player1.png')} alt='player' className='w-1/3' />
                            <div className='w-2/3 text-justify p-5'>
                                <div className='text-lg text-white font-semibold'>Badugi: High Stakes SCOOP Final Table</div>
                                <div className='text-xs text-gray-300'>51 min</div>
                                <div className='text-xs text-gray-300 mt-3 mb-5'>Heard the request for more badugi content and obligues with...</div>
                                <FaRegPlayCircle />
                            </div>
                        </div>
                        <div className='bg-gray-700 flex max-w-lg mx-auto mt-5 shadow'>
                            <img src={require('../../images/player1.png')} alt='player' className='w-1/3' />
                            <div className='w-2/3 text-justify p-5'>
                                <div className='text-lg text-white font-semibold'>Badugi: High Stakes SCOOP Final Table</div>
                                <div className='text-xs text-gray-300'>51 min</div>
                                <div className='text-xs text-gray-300 mt-3 mb-5'>Heard the request for more badugi content and obligues with...</div>
                                <FaRegPlayCircle />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-1 col-span-2 p-10'>
                    <div className='text-4xl'>Pro Videos</div>
                    <div className='text-justify text-sm p-10'>
                    <div className='text-gray-300 mb-2'>Featuring 1.758 advanced poker coaching videos, our full library provides Run It Once members with direct access to a wealth of poker knowledge.</div>
                    <div className='text-gray-300 mb-2'>Go inside the mind of an elite poker player with 14 new and diverse poker videos every week. Whether it be tournaments or cashgames, live-play or detailed hand analisys, meta-game discussion or mindset issues, the Run It Once video library has it all.</div>
                    <div className='text-gray-300 mb-2'>If you would like a more structured progression through key elements of essential poker concepts, try our learning paths.</div>
                    <div className='text-gray-300 mb-2'>Explore and enjoy the Run It Once poker video library.</div>
                    <div className='text-gray-300'>Watch your game take off.</div>
                    <Link to='/roster'>
                        <button className='bg-teal-600 text-gray-100 px-4 pt-1 pb-2 focus:outline-none mt-5 shadow rounded hover:bg-teal-700'>
                            Conoce a los Pros
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestVideos

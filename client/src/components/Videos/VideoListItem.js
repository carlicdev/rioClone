import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { VscComment } from 'react-icons/vsc';

const VideoListItem = ({video}) => {
    return (
        <div className='w-full'>
        <div className='border border-gray-300'>
            <div className='flex flex-wrap'>
                <div className='text-gray-900 mr-2 font-semibold py-2 pl-2'>{video.title}</div>
                <div className='text-gray-900 mr-2 text-xs mt-1 py-2'>({video.size}min)</div>
                <div className='text-gray-900 italic py-2'>by <span className='font-semibold'>{video.by}</span></div>
                <div className='flex ml-auto  w-64 divide-x divide-gray-200 text-center italic'>
                    <div className='w-1/4 inline  p-2'>
                        <div className='text-gray-900 text-xs inline mr-5'>{video.plan}</div>
                    </div>
                    <div className='w-1/4 inline  p-2'>
                        <div className='text-gray-900 text-xs inline'>{video.game}</div>
                    </div>
                    <div className='w-1/4 inline  p-2'>
                    <div className='text-gray-900'><VscComment className='inline mr-1'/><span className='inline text-xs'>3</span></div>
                    </div>
                    <div className='w-1/4 inline  p-2'>
                        <div className='text-gray-900'><BsHeart className='inline mr-1'/><span className='inline text-xs'>3</span></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default VideoListItem

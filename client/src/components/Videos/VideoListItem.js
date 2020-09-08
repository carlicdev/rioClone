import React from 'react'

const VideoListItem = ({video}) => {
    return (
        <div className='w-full'>
        <div className='border border-gray-300'>
            <div className='flex flex-wrap'>
                <div className='text-gray-900 mr-2 font-semibold py-2 pl-2'>{video.title}</div>
                <div className='text-gray-900 mr-2 text-xs mt-1 py-2'>({video.size}min)</div>
                <div className='text-gray-900 italic py-2'>by <span className='font-semibold'>{video.by}</span></div>
                <div className='flex ml-auto  w-48 divide-x divide-gray-200 text-center italic'>
                    <div className='w-1/2 inline  p-2'>
                        <div className='text-gray-900  inline mr-5'>{video.plan}</div>
                    </div>
                    <div className='w-1/2 inline  p-2'>
                        <div className='text-gray-900 inline'>{video.game}</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default VideoListItem

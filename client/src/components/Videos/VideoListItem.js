import React from 'react'

const VideoListItem = ({video}) => {
    return (
        <div className='max-w-xl'>
        <div className='border border-gray-300 p-2'>
            <div className='flex flex-wrap'>
                <div className='text-gray-900 mr-2 font-semibold'>{video.title}</div>
                <div className='text-gray-900 mr-2 text-xs'>(${video.size}min)</div>
                <div className='text-gray-900'>by {video.by}</div>
                <div className='text-gray-900 mr-4 ml-auto'>{video.plan}</div>
                <div className='text-gray-900 mr-4'>{video.game}</div>
            </div>
        </div>
        </div>
    )
}

export default VideoListItem

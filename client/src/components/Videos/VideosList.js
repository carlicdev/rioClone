import React, { useState, useCallback } from 'react'
import Filters from '../Filters/Filters';
import VideoListItem from './VideoListItem';

import data from '../../data/videos';
import LatestVideos from './LatestVideos';

const VideosList = () => {
    const [videos, setVideos] = useState(data);

    const filterBy = useCallback((obj) => {
        if (Object.values(obj).every(i => i === 'all')) {
            setVideos(data);
        } else {
            if(obj.by === 'all' && obj.game === 'all') {
                const filteredVideos = data.filter(i => i.plan === obj.plan);
                setVideos(filteredVideos)
            } else if (obj.by === 'all' && obj.plan === 'all') {
                const filteredVideos = data.filter(i => i.game === obj.game);
                setVideos(filteredVideos)
            } else if (obj.game === 'all' && obj.plan === 'all') {
                const filteredVideos = data.filter(i => i.by === obj.by);
                setVideos(filteredVideos)
            } else if (obj.by === 'all') {
                const filteredVideos = data.filter(i => i.plan === obj.plan && i.game === obj.game);
                setVideos(filteredVideos)
            } else if (obj.plan === 'all') {
                const filteredVideos = data.filter(i => i.by === obj.by && i.game === obj.game);
                setVideos(filteredVideos)
            } else if (obj.game === 'all') {
                const filteredVideos = data.filter(i => i.by === obj.by && i.plan === obj.plan);
                setVideos(filteredVideos)
            } else {
                const filteredVideos = data.filter(i => i.by === obj.by && i.plan === obj.plan && i.game === obj.game);
                setVideos(filteredVideos)
            }
        }
    }, [])
    
    return (
        <div>
            <LatestVideos />
            <div className='container w-full mx-auto p-10'>
                <Filters filterBy={filterBy}/>
                <div className='shadow-md mt-5'>
                {
                    videos && (
                        videos.map(i => {
                            return <VideoListItem key={i.id} video={i} />
                        })
                    )
                }
                </div>
                {
                    videos.length === 0 && (
                        <p className='text-left'>No videos found</p>
                    )
                }
            </div>
        </div>
    )
}

export default VideosList;

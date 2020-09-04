import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
import Filters from '../Filters/Filters';
import VideoListItem from './VideoListItem';

import data from '../../data/videos';

const VideosList = () => {
    const [videos, setVideos] = useState(data);

    const filterBy = (videos, key, value) => {
        return videos.filter(i => i[key] === value)
    }

    return (
        <div>
            <Navbar />
            <Filters onChange={filterBy}/>
            {
                videos && (
                    videos.map(i => {
                        return <VideoListItem key={i.id} video={i} />
                    })
                )
            }

        </div>
    )
}

export default VideosList;

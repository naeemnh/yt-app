import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div className='ui segment'>
            <div className='ui embed'>
                <iframe src={videoSrc} title={video.snippet.title}/>
            </div>
            <div className='ui header'>
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>

        </div>
    );
}


export default VideoDetail;
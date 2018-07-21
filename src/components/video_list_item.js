import React from 'react';

import '../style/style.css';
const VideoListItem = ({video, onVideoSelect}) => {

    //const video = props.video;
    console.log(video);
    const imgUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img alt= "" className="media-object" src={imgUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};


export default VideoListItem
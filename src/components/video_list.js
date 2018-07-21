import React from 'react';
import VideoListItem from './video_list_item';

import '../style/style.css';
const VideoList = (props) => {

    const vItems = props.v.map( (data) => {
        return (
        <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key={data.etag}
        video={data} />
        )
    });

    return (
        <ul className="col-md-4 list-group">
            {vItems}
        </ul>
    );
};


export default VideoList
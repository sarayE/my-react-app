import React from 'react';

const VideoList = (props) => { //pass the parent state (App data), to the chiled (VideoList) --> part 2
	
	//const videos = props.videos;
	
	return(
		<ul className="col-md-4 list-group">
			{props.videos.length}
		</ul>
	);
}

export default VideoList;
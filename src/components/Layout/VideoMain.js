import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../../actions';

import VideoCard from '../UI/VideoCardMain/VideoCardMain';

class VideoMain extends Component {
  /**
   * @description VideoMain is a UI component to render landing page for YouClone web app.
   * As the component renders it makes call to YouTube v3 api using axios to show
   * default videos for the viewers.
   */

  componentDidMount() {
    /**
     * fetch default videos to render on main page
     */
    this.props.fetchVideos('iron man');
  }

  render() {
    // Iterate through an videos array and render each video component using VideoCard
    // VideoCard expects 2 props key and video
    // Key prop is used to give distinction to each element
    // video prop is an object that contains information about a single video
    const renderedVideos = this.props.videos.map(video => {
      return (
        <VideoCard
          key={video.id.videoId}
          video={video}
        />
      )
    })
    
    return(
      <div className="video__main">
        {renderedVideos}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    videos: Object.values(state.fetchedVideos.videos)
  };
}


export default connect(mapStateToProps, { fetchVideos })(VideoMain);
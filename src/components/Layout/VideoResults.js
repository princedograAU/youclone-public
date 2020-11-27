import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchVideos} from '../../actions';

import CardVideo from '../UI/CardVideo/CardVideoSecondary';

export class VideoResults extends Component {

  componentDidMount() {
    if (this.props.videos.length < 1) {
      this.props.fetchVideos(this.props.match.params.searchString);
    }
  }

  render() {
    const renderedVideoList = this.props.videos.map(video => {
      return (
        <CardVideo 
          key={video.id.videoId}
          video={video}
        />
      )
    });
    return (
      <div className="video__results">
        {renderedVideoList}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    videos: Object.values(state.fetchedVideos.videos)
  }
}

export default connect(mapStateToProps, { fetchVideos })(VideoResults);

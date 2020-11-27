import React, { Component } from 'react';
import {connect} from 'react-redux';
import history from '../../../history';
import {setSelectedVideo} from '../../../actions';
import {dateMonthCalculator} from '../../Helper/dateMonthCalculator';


class VideoCardMain extends Component {

  onCardClick = () => {
    this.props.setSelectedVideo(this.props.video);
    history.push(`/watch/${this.props.video.id.videoId}`)
  }
  render() {
    const video = this.props.video;
    return (
      <div className="video-card-main" onClick={this.onCardClick}>
        <div className="video-card-main__banner">
          <img 
            src={video.snippet.thumbnails.medium.url} 
            className="video-card-main__banner-image"
            alt={video.snippet.title}
          />
        </div>
        <div className="video-card-main__info">
          <div className="video-card-main__info-channel">
          </div>
          <div className="video-card-main__info-about">
            <div className="heading-5 bold">
              {video.snippet.title}
            </div>
            <div className="heading-5">
              {video.snippet.channelTitle}
            </div>
            <div className="heading-5">
              Released {dateMonthCalculator(video.snippet.publishedAt)} ago
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default connect(null, { setSelectedVideo })(VideoCardMain);

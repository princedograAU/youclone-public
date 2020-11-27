import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setSelectedVideo} from '../../../actions';
import { dateMonthCalculator } from '../../Helper/dateMonthCalculator';
import history from '../../../history';


class VideoCard extends Component {

  onCardClick = () => {
    this.props.setSelectedVideo(this.props.video);
    history.push(`/watch/${this.props.video.id.videoId}`)
  }

  render() {
    const video = this.props.video;
    return (
      <div className="card-video__secondary" onClick={this.onCardClick}>
        <div className="card-video__secondary__banner">
          <img 
            src={video.snippet.thumbnails.medium.url} 
            alt={video.snippet.title}
          />
        </div>
        <div className="card-video__secondary__info">
          <div className="heading-3 semi-bold">
            {video.snippet.title}
          </div>
          <div className="card-video__secondary__info-middle">
            <div className="heading-4">
              {video.snippet.channelTitle} <span className="middle-dot">&#183;</span>
            </div>
            <div className="heading-4">
              {dateMonthCalculator(video.snippet.publishedAt)} ago
            </div>
          </div>
          <div className="heading-4">
              {video.snippet.description}
            </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { setSelectedVideo })(VideoCard);

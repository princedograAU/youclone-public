import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideo, fetchRelatedVideos } from '../../actions';
import { dateMonthCalculator } from '../Helper/dateMonthCalculator';

import CardVideo from '../UI/CardVideo/CardVideoTertiary';

export class VideoWatch extends Component {

  componentDidMount() {
    if (!Object.keys(this.props.videoPlay).length) {
      this.props.fetchVideo(this.props.match.params.videoId);
    }
    this.props.fetchRelatedVideos(this.props.match.params.videoId);
  }
  render() {
    const { videoPlay, relatedVideos } = this.props;

    if(!Object.keys(this.props.videoPlay).length) {
      return "Loading...";
    }

    const renderedRecommendedList = relatedVideos.map(video => {
      return (
        <CardVideo 
          key={video.id.videoId}
          video={video}
        />
      )
    });

    return (
      <div className="video__watch">
        <div className="video__watch-main">
          <iframe src={`https://www.youtube.com/embed/${videoPlay.id.videoId || videoPlay.id}`} />
          <div className="heading-3 semi-bold">
            {videoPlay.snippet.title}
          </div>
          <div className="container">
            <div className="heading-4">
              {dateMonthCalculator(videoPlay.snippet.publishedAt)} ago
            </div>
          </div>
          <hr/>
          <div className="container">
            <div className="video__watch--channel-avatar">
              {/** Channel image placed here */}
            </div>
            <div className="channel__name">
              <div className="heading-5 semi-bold">{videoPlay.snippet.channelTitle}</div>
              <p>
                {videoPlay.snippet.description}
              </p>
            </div>
            <div className="channel__subscribe">
              <button className="button button-primary"></button>
            </div>
          </div>
          <div className="container">
            	Comments
          </div>
        </div>
        <div className="video__watch-recommendations">
          {renderedRecommendedList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    videoPlay: state.fetchedVideos.selectedVideo,
    relatedVideos: Object.values(state.fetchedVideos.relatedVideos)
  };
}

export default connect(mapStateToProps, { fetchVideo, fetchRelatedVideos })(VideoWatch);

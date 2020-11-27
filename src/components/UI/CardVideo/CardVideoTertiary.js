import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedVideo } from '../../../actions';
import { dateMonthCalculator } from '../../Helper/dateMonthCalculator';

class CardVideoTertiary extends Component {

    onCardClick = () => {
        this.props.setSelectedVideo(this.props.video);
    }

    render() {
        const video = this.props.video;
        return (
            <div className="card-video__tertiary" onClick={this.onCardClick}>
                <div className="card-video__tertiary__banner">
                    <img 
                        src={video.snippet.thumbnails.medium.url} 
                        alt={video.snippet.title}
                    />
                </div>
                <div className="card-video__tertiary__info">
                    <div className="heading-5 semi-bold">
                        {video.snippet.title}
                    </div>
                    <div className="card-video__tertiary__info-middle">
                        <div className="heading-5">
                        {video.snippet.channelTitle} <span className="middle-dot">&#183;</span>
                        </div>
                        <div className="heading-5">
                        {dateMonthCalculator(video.snippet.publishedAt)} ago
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { setSelectedVideo })(CardVideoTertiary);

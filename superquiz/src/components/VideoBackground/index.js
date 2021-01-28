/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable object-curly-spacing */
/* eslint-disable space-before-function-paren */

import React, {Component} from 'react';

class Video extends Component {
  constructor (props) {
    super(props);

    this.state = {
      videoURL: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4',
    };
  }

  render () {
    return (

      <video id="background-video" loop autoPlay>

        <source src={this.state.videoURL} type="video/mp4" />
        <source src={this.state.videoURL} type="video/ogg" />

      </video>
    );
  }
}

export default Video;

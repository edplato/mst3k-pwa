import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="aboutBody">
        <h4 className="fadedViewTitles">ABOUT MST3K QUICK GUIDE</h4>
        <div className="aboutText">
          <p>Episode data from <a href="https://github.com/edplato/mst3k-episodes" target="_blank" rel="noopener noreferrer">MST3K JSON</a></p>
          <p>MST3K Episode Guide GitHub found <a href="https://github.com/edplato/mst3k-pwa" target="_blank" rel="noopener noreferrer">here</a></p>
          <p>Find me <a href="https://edplato.github.io" target="_blank" rel="noopener noreferrer">here</a></p>
        </div>
        <div className="aboutFooter"></div>
      </div>
    );
  }
}

export default About;
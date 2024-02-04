
import React from 'react';
import './VideoPlayerComponent.css';

const VideoPlayerComponent = ({ livestreamUrl, overlays }) => {
  return (
    <div className="video-container">
      <h2 className="text-center mt-3">Live Video Stream</h2>
      <iframe
        title="Live Stream"
        src={livestreamUrl}
        width="fit-content"  
        height="fit-content" 
        frameBorder="0"
        allowFullScreen
      ></iframe>
      {overlays.map((overlay, index) => (
        <center key={index}>
          <div className="video-overlay" style={{ ...overlay.position, width: overlay.size.width, height: overlay.size.height }}>
            <p>{overlay.content}</p>
          </div>
        </center>
      ))}
    </div>
  );
};

export default VideoPlayerComponent;

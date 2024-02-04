// src/App.js
import React, { useState } from 'react';
import OverlayFormComponent from './components/OverlayFormComponent';
import VideoPlayerComponent from './components/VideoPlayerComponent';

const App = () => {
  const [livestreamUrl, setLivestreamUrl] = useState('http://192.168.43.221:5000'); // Update this line
  const [overlays, setOverlays] = useState([]);

  const handleSaveOverlay = async (newOverlay) => {
    // Create overlay using Flask API
    const response = await fetch('/api/overlays', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOverlay),
    });

    if (response.ok) {
      const data = await response.json();
      setOverlays([...overlays, data]);
    } else {
      console.error('Error creating overlay:', response.statusText);
    }
  };

  return (
    <div>
      <OverlayFormComponent onSaveOverlay={handleSaveOverlay} />
      <VideoPlayerComponent livestreamUrl={livestreamUrl} overlays={overlays} />
    </div>
  );
};

export default App;

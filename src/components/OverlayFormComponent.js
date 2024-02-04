
import React, { useState } from 'react';

const OverlayFormComponent = ({ onSaveOverlay }) => {
  const [content, setContent] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 100, height: 100 });

  const handleSaveOverlay = () => {
    // Validate and save overlay options
    if (content.trim() === '') {
      alert('Overlay content cannot be empty');
      return;
    }

    const newOverlay = {
      content: content,
      position: position,
      size: size,
    };

    onSaveOverlay(newOverlay);
    // Optionally, you can reset form fields here
    setContent('');
    setPosition({ x: 0, y: 0 });
    setSize({ width: 100, height: 100 });
  };

  return (
    <div className="container mt-4">
      <h2>Overlay Options</h2>
      <div className="form-group">
        <label htmlFor="content">Content:</label>
        <input
          type="text"
          className="form-control"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="positionX">Position X:</label>
          <input
            type="number"
            className="form-control"
            id="positionX"
            value={position.x}
            onChange={(e) => setPosition({ ...position, x: e.target.value })}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="positionY">Position Y:</label>
          <input
            type="number"
            className="form-control"
            id="positionY"
            value={position.y}
            onChange={(e) => setPosition({ ...position, y: e.target.value })}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="sizeWidth">Size Width:</label>
          <input
            type="number"
            className="form-control"
            id="sizeWidth"
            value={size.width}
            onChange={(e) => setSize({ ...size, width: e.target.value })}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="sizeHeight">Size Height:</label>
          <input
            type="number"
            className="form-control"
            id="sizeHeight"
            value={size.height}
            onChange={(e) => setSize({ ...size, height: e.target.value })}
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleSaveOverlay}>
        Save Overlay
      </button>
    </div>
  );
};

export default OverlayFormComponent;

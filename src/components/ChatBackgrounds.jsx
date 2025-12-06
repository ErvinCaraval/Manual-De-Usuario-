import React, { useState, useEffect } from 'react';
import './Shared.css';
import './ChatBackgrounds.css';
import { useManual } from './Manual/ManualContext';

const ChatBackgrounds = ({ onBack }) => {
  const { startTour } = useManual();

  useEffect(() => {
    const timer = setTimeout(() => {
      startTour('chat-backgrounds');
    }, 500);
    return () => clearTimeout(timer);
  }, [startTour]);

  const backgrounds = [
    'https://i.pravatar.cc/400?img=1',
    'https://i.pravatar.cc/400?img=2',
    'https://i.pravatar.cc/400?img=3',
    'https://i.pravatar.cc/400?img=4',
    'https://i.pravatar.cc/400?img=5',
    'https://i.pravatar.cc/400?img=6',
    'https://i.pravatar.cc/400?img=7',
    'https://i.pravatar.cc/400?img=8',
    'https://i.pravatar.cc/400?img=9',
  ];

  const [selectedBg, setSelectedBg] = useState(backgrounds[0]);

  return (
    <div className="view-container">
      <div className="view-header">
        <button className="back-button" onClick={onBack} data-tour-target="backgrounds-back">&lt; Atrás</button>
        <h2 className="view-title">Fondos de Chat</h2>
      </div>
      <div className="menu-view-content">
        <div className="backgrounds-grid" data-tour-target="backgrounds-grid">
          {backgrounds.map((bg, index) => (
            <div
              key={index}
              className={`background-item ${selectedBg === bg ? 'selected' : ''}`}
              onClick={() => setSelectedBg(bg)}
            >
              <img src={bg} alt={`Background ${index + 1}`} className="background-image" />
              <div className="checkmark">✓</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBackgrounds;

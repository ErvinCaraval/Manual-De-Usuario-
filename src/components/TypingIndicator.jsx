import React from 'react';
import './TypingIndicator.css';

const TypingIndicator = ({ username }) => {
  return (
    <div className="typing-indicator">
      <div className="typing-avatar">{username[0].toUpperCase()}</div>
      <div className="typing-text">
        {username} is typing
        <span className="typing-dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </div>
    </div>
  );
};

export default TypingIndicator;
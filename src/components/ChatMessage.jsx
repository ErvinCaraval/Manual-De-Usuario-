import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({ message }) => {
  const isMe = message.sender === 'me';
  const isSystem = message.isSystem;

  return (
    <div className={`chat-message ${isMe ? 'message-mine' : 'message-other'} ${isSystem ? 'message-system' : ''}`}>
      {!isSystem && !isMe && <div className="message-sender">{message.sender}</div>}
      <div className="message-content">
        <p className="message-text">{message.text}</p>
        <div className="message-meta">
          <span className="message-time">{message.time}</span>
          {isMe && <span className="message-status">✓</span>}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
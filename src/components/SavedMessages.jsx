
import React from 'react';
import './Shared.css';
import './SavedMessages.css';

const SavedMessages = ({ onBack }) => {
  const savedMessages = [
    {
      sender: 'Alice',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
      text: 'Here is the link to the documentation we talked about: https://reactjs.org/',
      timestamp: 'Yesterday, 10:45 AM'
    },
    {
      sender: 'Bob',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f',
      text: 'Remember to buy milk on your way home!',
      timestamp: 'Today, 3:30 PM'
    },
    {
      sender: 'You',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
      text: 'My flight details: Flight UA123, Seat 14A, Departure at 8:00 AM.',
      timestamp: 'June 15, 9:00 AM'
    }
  ];

  return (
    <div className="view-container">
      <div className="view-header">
        <button className="back-button" onClick={onBack}>&lt; Atrás</button>
        <h2 className="view-title">Mensajes Guardados</h2>
      </div>
      <div className="menu-view-content">
        <div className="saved-messages-list">
          {savedMessages.map((msg, index) => (
            <div key={index} className="saved-message-item">
              <img src={msg.avatar} alt={msg.sender} className="sender-avatar" />
              <div className="message-content">
                <span className="message-sender">{msg.sender}</span>
                <p className="message-text">{msg.text}</p>
                <span className="message-timestamp">{msg.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedMessages;

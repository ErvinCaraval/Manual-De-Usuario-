import React, { useState, useRef } from 'react';
import './Message.css';
import MessageContextMenu from './MessageContextMenu';

const Message = ({ message, onReply, onDelete, showToast }) => {
  const isMe = message.sender === 'me';
  const isSystem = message.isSystem;
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [showReactions, setShowReactions] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
  const [messageStatus, setMessageStatus] = useState(message.status || 'sent');
  const longPressTimer = useRef(null);
  const [selectedReaction, setSelectedReaction] = useState(null);

  const handleLongPress = (e) => {
    e.preventDefault();
    setShowContextMenu(true);
  };

  const handleTouchStart = (e) => {
    longPressTimer.current = setTimeout(() => {
      setShowContextMenu(true);
    }, 500);
  };

  const handleTouchEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    if (showToast) showToast('Mensaje copiado al portapapeles ✓', 'success');
    setShowContextMenu(false);
  };

  const handleReply = () => {
    onReply(message);
    if (showToast) showToast('Preparando respuesta...', 'info');
    setShowContextMenu(false);
  };

  const handleReact = () => {
    setShowReactions(!showReactions);
  };

  const handleDelete = () => {
    onDelete(message.id);
    if (showToast) showToast('Mensaje eliminado correctamente', 'success');
    setShowContextMenu(false);
  };

  const handleReactionSelect = (reaction) => {
    setSelectedReaction(reaction);
    setShowReactions(false);
    if (showToast) showToast(`Reaccionaste con ${reaction}`, 'info');
  };

  return (
    <div 
      className={`message-container ${isMe ? 'message-right' : 'message-left'} ${isSystem ? 'message-system' : ''}`}
      onContextMenu={handleLongPress}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {!isSystem && !isMe && <div className="message-sender">{message.sender}</div>}
      <div className={`message-bubble ${isMe ? 'message-mine' : 'message-other'}`}>
        {message.replyTo && (
          <div className="message-reply-to">
            <div className="reply-sender">{message.replyTo.sender}</div>
            <div className="reply-text">{message.replyTo.text}</div>
          </div>
        )}
        <p className="message-text">{message.text}</p>
        <div className="message-footer">
          <span className="message-time">{message.time}</span>
          {isMe && (
            <span className={`message-status ${messageStatus}`}>
              {messageStatus === 'sending' && '⌛'}
              {messageStatus === 'sent' && '✓'}
              {messageStatus === 'delivered' && '✓✓'}
              {messageStatus === 'read' && '✓✓'}
            </span>
          )}
        </div>
        {selectedReaction && (
          <div className="message-reaction">{selectedReaction}</div>
        )}
      </div>

      {showContextMenu && (
        <MessageContextMenu
          position={contextMenuPosition}
          onClose={() => setShowContextMenu(false)}
          onCopy={handleCopy}
          onReply={handleReply}
          onReact={handleReact}
          onDelete={handleDelete}
          message={message}
        />
      )}

      {showReactions && (
        <div className="reactions-picker">
          {['👍', '❤️', '😂', '😮', '😢', '🙏'].map((reaction) => (
            <button
              key={reaction}
              className="reaction-button"
              onClick={() => handleReactionSelect(reaction)}
            >
              {reaction}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Message;
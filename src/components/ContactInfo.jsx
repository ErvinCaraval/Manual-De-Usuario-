import { useState } from 'react';
import './ContactInfo.css';

const ContactInfo = ({ contact, onClose, onShowQR, onBlock, onHug, isBlocked }) => {
  const [isFavorite, setIsFavorite] = useState(contact.isFavorite);

  const toggleFavorite = () => setIsFavorite(!isFavorite);

  return (
    <div className="contact-info-container" onClick={onClose}>
      <div className="contact-info" onClick={(e) => e.stopPropagation()}>
        <div className="menu-header">
          <h2>{contact.name}</h2>
          <button onClick={onClose} className="close-btn">&times;</button>
        </div>
        
        <div className="contact-details">
          <p>Status: {isBlocked ? <span className="status-blocked">Blocked</span> : <span className="status-online">{contact.status}</span>}</p>
          <p>Distance: {contact.distance}</p>
          <p>Last seen: {contact.lastSeen}</p>
        </div>

        <div className="contact-actions">
          <button onClick={toggleFavorite}>{isFavorite ? 'Unfavorite' : 'Favorite'}</button>
          <button onClick={onShowQR}>QR Identity</button>
          <button onClick={() => onBlock(contact.id)} disabled={isBlocked}>{isBlocked ? 'Blocked' : 'Block'}</button>
          <button onClick={() => onHug(contact.name)}>🤗 Hug</button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

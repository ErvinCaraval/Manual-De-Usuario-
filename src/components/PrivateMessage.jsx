import { useState, useEffect } from 'react'
import './PrivateMessage.css'

const PrivateMessage = ({ contactName, onClose, onSend }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300)
  }

  const handleSend = () => {
    if (message.trim()) {
      onSend(message.trim())
      handleClose()
    }
  }

  return (
    <div className="private-message-overlay" onClick={handleClose}>
      <div
        className={`private-message-container ${isVisible ? 'visible' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="private-header">
          <div className="lock-indicator">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <rect x="5" y="11" width="14" height="10" rx="2" stroke="#ff4444" strokeWidth="2" fill="none"/>
              <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="#ff4444" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="16" r="1.5" fill="#ff4444"/>
            </svg>
          </div>

          <div className="private-info">
            <div className="private-label">Para: {contactName}</div>
          </div>
        </div>

        <div className="private-content">
          <div className="message-input-area">
            <textarea
              className="private-textarea"
              placeholder="Mensaje..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoFocus
            />
          </div>
        </div>

        <div className="private-buttons">
          <button className="private-icon-btn hand">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M8 9 L10 11 L8 13 M12 8 L14 10 L12 12 M16 9 L18 11 L16 13"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <button className="private-icon-btn square">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </button>

          <button className="private-icon-btn dots">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="6" cy="12" r="2" fill="currentColor"/>
              <circle cx="12" cy="12" r="2" fill="currentColor"/>
              <circle cx="18" cy="12" r="2" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PrivateMessage

import { useState, useEffect } from 'react'
import './HugAnimation.css'

const HugAnimation = ({ contactName, onClose }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300)
  }

  return (
    <div className="hug-overlay" onClick={handleClose}>
      <div
        className={`hug-container ${isVisible ? 'visible' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hug-header">
          <button className="hug-action-btn">
            <span className="action-text">Saludar</span>
          </button>
          <div className="contact-info">
            <span className="contact-label">Para: {contactName}</span>
          </div>
        </div>

        <div className="hug-animation-area">
          <div className="hand-icon">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <circle cx="60" cy="60" r="58" fill="rgba(0, 255, 255, 0.2)" stroke="#00ffff" strokeWidth="3"/>
              <path d="M50 50 L40 45 L35 50 L40 55 Z M60 45 L55 40 L50 45 L55 50 Z M70 50 L65 45 L60 50 L65 55 Z M80 55 L75 50 L70 55 L75 60 Z"
                    fill="white" stroke="white" strokeWidth="2"/>
              <path d="M40 55 L35 60 Q35 75 45 80 L70 80 Q80 75 80 60 L75 60"
                    fill="white" stroke="white" strokeWidth="2"/>
            </svg>
          </div>

          <div className="hug-message-box">
            <div className="message-label">Mensaje...</div>
          </div>
        </div>

        <div className="hug-buttons">
          <button className="hug-icon-btn square">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </button>

          <button className="hug-icon-btn dots">
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

export default HugAnimation

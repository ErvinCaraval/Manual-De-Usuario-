import { useState, useEffect, useRef } from 'react';
import './LocationPermission.css';
import { useManual } from './Manual/ManualContext';

// --- SVG Illustrations --- //

const PreciseLocationMap = ({ selected }) => (
  <svg className="location-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
    <path d="M10,90 L10,10 L90,10 L90,90 Z" fill="#2d2d2d" stroke="#444" strokeWidth="2" />
    <path d="M10,30 L90,30 M10,50 L90,50 M10,70 L90,70 M30,10 L30,90 M50,10 L50,90 M70,10 L70,90" stroke="#444" strokeWidth="1" />
    <g transform="translate(50, 45)">
      <path d="M0,0 C-15,-15 -15,-30 0,-30 C15,-30 15,-15 0,0 Z" fill={selected ? 'var(--accent-primary)' : '#888'} />
      <circle cx="0" cy="-22" r="6" fill="#121212" />
    </g>
  </svg>
);

const ApproximateLocationMap = ({ selected }) => (
  <svg className="location-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
    <path d="M10,90 L10,10 L90,10 L90,90 Z" fill="#2d2d2d" stroke="#444" strokeWidth="2" />
    <path d="M10,30 L90,30 M10,50 L90,50 M10,70 L90,70 M30,10 L30,90 M50,10 L50,90 M70,10 L70,90" stroke="#444" strokeWidth="1" />
    <circle cx="50" cy="50" r="35" fill={selected ? 'var(--accent-primary)' : '#888'} opacity="0.4" />
    <circle cx="50" cy="50" r="0" className="center-dot-approximate" />
  </svg>
);

const LocationPermission = ({ onComplete }) => {
  const [selectedType, setSelectedType] = useState('precise');
  const [isVisible, setIsVisible] = useState(false);
  const [statusToProceed, setStatusToProceed] = useState(null);
  const overlayRef = useRef(null); // Ref for the overlay element
  const { startTour } = useManual();

  // Animate in on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);

    // Start tour slightly after animation
    const tourTimer = setTimeout(() => {
      startTour('location-permission');
    }, 800);

    return () => {
      clearTimeout(timer);
      clearTimeout(tourTimer);
    };
  }, [startTour]);

  // Effect to handle the exit transition and call onComplete
  useEffect(() => {
    const node = overlayRef.current;

    const handleTransitionEnd = (event) => {
      // Make sure we are listening to the opacity transition
      if (node && statusToProceed && event.propertyName === 'opacity' && !isVisible) {
        onComplete(statusToProceed);
      }
    };

    if (node) {
      node.addEventListener('transitionend', handleTransitionEnd);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (node) {
        node.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, [isVisible, statusToProceed, onComplete]);

  // This function now just starts the exit process
  const handleComplete = (status) => {
    setStatusToProceed(status);
    setIsVisible(false); // Trigger the exit animation
  };

  return (
    <div ref={overlayRef} className={`location-permission-overlay ${isVisible ? 'visible' : ''}`}>
      <div className="location-permission-sheet">
        <div className="permission-header">
          <div className="location-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" fill="var(--accent-primary)" />
            </svg>
          </div>
          <h2 className="permission-title">Encuentra gente cerca de ti</h2>
          <p className="permission-description">
            Elige qué tan visible quieres ser. Tu elección afecta cómo te conectas con otros.
          </p>
        </div>

        <div className="permission-options">
          <div
            className={`option-card ${selectedType === 'precise' ? 'selected' : ''}`}
            onClick={() => setSelectedType('precise')}
            data-tour-target="location-card-precise"
          >
            <div className="option-illustration">
              <PreciseLocationMap selected={selectedType === 'precise'} />
            </div>
            <div className="option-text">
              <h3 className="option-title">Precisa</h3>
              <p className="option-description">Ideal para conectar en un lugar específico, como un café o un evento.</p>
            </div>
          </div>

          <div
            className={`option-card ${selectedType === 'approximate' ? 'selected' : ''}`}
            onClick={() => setSelectedType('approximate')}
            data-tour-target="location-card-approximate"
          >
            <div className="option-illustration">
              <ApproximateLocationMap selected={selectedType === 'approximate'} />
            </div>
            <div className="option-text">
              <h3 className="option-title">Aproximada</h3>
              <p className="option-description">Muestra tu ubicación general, como el barrio, para más privacidad.</p>
            </div>
          </div>
        </div>

        <div className="permission-actions">
          <button className="action-button primary" onClick={() => handleComplete('granted')} data-tour-target="location-allow-btn">
            Mientras uso la app
          </button>
          <button className="action-button" onClick={() => handleComplete('granted_once')}>
            Solo esta vez
          </button>
          <button className="action-button" onClick={() => handleComplete('denied')}>
            No permitir
          </button>
        </div>

        <div className="privacy-notice">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V13H5V6.3l7-3.11v10.8z" fill="var(--text-secondary)" />
          </svg>
          <span>Tu ubicación es temporal y solo se comparte cuando buscas a otros.</span>
        </div>
      </div>
    </div>
  );
};

export default LocationPermission;

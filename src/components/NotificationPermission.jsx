import { useState, useEffect } from 'react';
import './PermissionModal.css';
import { useManual } from './Manual/ManualContext';

// --- SVG Icons --- //
const BellIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);

// --- New Privacy Icon ---
const PrivacyShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V13H5V6.3l7-3.11v10.8z" fill="var(--text-secondary)" />
  </svg>
);


const NotificationPermission = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { startTour } = useManual();

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    const tourTimer = setTimeout(() => {
      startTour('notification-permission');
    }, 800);
    return () => clearTimeout(tourTimer);
  }, [startTour]);

  const handleAction = (status) => {
    setIsVisible(false); // Animate out
    setTimeout(() => onComplete(status), 300);
  };

  return (
    <div className={`permission-modal ${isVisible ? 'visible' : ''}`}>
      <div className="permission-backdrop" onClick={() => handleAction('denied')} />

      <div className="permission-card">
        <div className="permission-icon-wrapper">
          <div className="permission-icon notification-icon" data-tour-target="notification-icon">
            <BellIcon />
          </div>
        </div>

        <h2 className="permission-title">Mantente al tanto de tus mensajes</h2>
        <p className="permission-description">
          Recibe alertas cuando lleguen mensajes nuevos, incluso si la app está en segundo plano.
        </p>

        <div className="notification-illustration">
          <svg viewBox="0 0 200 120">
            <g transform="translate(100, 60)" className="notification-bell" style={{ animation: 'bellRing 2.5s ease-in-out infinite', transformOrigin: 'top center' }}>
              <path d="M-18 8 C -18 -20, 0 -25, 18 -20 C 18 8, 18 12, -18 12 Z" fill="#ffc864" stroke="#fff" strokeWidth="1.5" opacity="0.9"></path>
              <circle cx="0" cy="15" r="5" fill="#fff" opacity="0.8"></circle>
              <path d="M -2 -28 L 2 -28 L 2 -23 L -2 -23 Z" fill="#fff" rx="2"></path>
            </g>
          </svg>
        </div>

        <div className="notification-benefits">
          <div className="benefit-item">
            <div className="benefit-icon" style={{ color: '#ffc864' }}><ZapIcon /></div>
            <div className="benefit-item-content">
              <h4>No te pierdas ningún mensaje</h4>
              <p>Recibe notificaciones al instante.</p>
            </div>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon" style={{ color: '#ffc864' }}><ClockIcon /></div>
            <div className="benefit-item-content">
              <h4>Responde rápidamente</h4>
              <p>Chatea en tiempo real con tus contactos.</p>
            </div>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon" style={{ color: '#ffc864' }}><ShieldIcon /></div>
            <div className="benefit-item-content">
              <h4>Privadas y seguras</h4>
              <p>El contenido del mensaje no se muestra.</p>
            </div>
          </div>
        </div>

        <div className="permission-actions">
          <button className="btn btn-primary" onClick={() => handleAction('granted')} data-tour-target="notification-enable-btn">
            Activar notificaciones
          </button>
          <button className="btn btn-secondary" onClick={() => handleAction('denied')}>
            Ahora no
          </button>
        </div>

        {/* --- NEW PRIVACY NOTICE --- */}
        <div className="privacy-notice">
          <PrivacyShieldIcon />
          <span><b>Privacidad garantizada:</b> Solo recibirás alertas de mensajes. Cero spam.</span>
        </div>

      </div>
    </div>
  );
};

export default NotificationPermission;

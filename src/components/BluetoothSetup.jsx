import { useState, useEffect } from 'react'
import './BluetoothSetup.css'
import { useManual } from './Manual/ManualContext'

const NetworkVisualization = ({ isEnabled }) => (
  <svg className="network-svg" viewBox="0 0 200 200">
    {/* Center Node */}
    <circle className={`center-node ${!isEnabled ? 'disabled' : ''}`} cx="100" cy="100" r="12" fill="var(--accent-primary)" />

    {/* Network Lines */}
    {[...Array(6)].map((_, i) => {
      const angle = (i * 60) * (Math.PI / 180);
      const x2 = 100 + Math.cos(angle) * 80;
      const y2 = 100 + Math.sin(angle) * 80;
      return <line key={i} className={`network-line ${!isEnabled ? 'disabled' : ''}`} x1="100" y1="100" x2={x2} y2={y2} stroke="var(--accent-primary-faded)" strokeWidth="2" style={{ animationDelay: `${i * 0.1}s` }} />;
    })}

    {/* Outer Nodes */}
    {[...Array(6)].map((_, i) => {
      const angle = (i * 60) * (Math.PI / 180);
      const cx = 100 + Math.cos(angle) * 80;
      const cy = 100 + Math.sin(angle) * 80;
      return <circle key={i} className={`network-node ${!isEnabled ? 'disabled' : ''}`} cx={cx} cy={cy} r="6" fill="var(--accent-primary)" style={{ animationDelay: `${0.5 + i * 0.1}s` }} />;
    })}
  </svg>
);

const BluetoothSetup = ({ onNext, showToast }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)
  const { startTour } = useManual()

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
    const tourTimer = setTimeout(() => {
      startTour('bluetooth-setup');
    }, 800);
    return () => clearTimeout(tourTimer);
  }, [startTour])

  const handleEnable = () => {
    setIsEnabled(true)
    if (showToast) {
      showToast('Bluetooth activado', 'success')
    }
    setTimeout(() => {
      if (onNext && !skipRequested) onNext()
    }, 700)
  }

  const [skipRequested, setSkipRequested] = useState(false)

  const handleSkip = () => {
    setSkipRequested(true)
    if (onNext) onNext()
  }

  return (
    <div className={`bluetooth-setup ${isVisible ? 'visible' : ''}`}>
      <div className="setup-content">
        <div className="setup-header">
          <h1 className="setup-title">BitChat</h1>
          <p className="setup-subtitle">Mensajería privada y segura vía Bluetooth</p>
        </div>

        <div className="network-visualization-large" data-tour-target="bluetooth-viz">
          <NetworkVisualization isEnabled={isEnabled} />
        </div>

        <div className={`bluetooth-status-card ${isEnabled ? 'enabled' : ''}`}>
          <div className="bluetooth-icon-large">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path
                d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29z"
                fill={isEnabled ? 'var(--accent-primary)' : 'var(--text-muted)'}
              />
            </svg>
          </div>

          <div className="status-content">
            {!isEnabled ? (
              <>
                <h2>Bluetooth es necesario</h2>
                <p>BitChat utiliza Bluetooth para:</p>
              </>
            ) : (
              <>
                <h2>Bluetooth activado</h2>
                <p>Listo para comenzar a chatear</p>
              </>
            )}
          </div>

          {!isEnabled && (
            <ul className="bluetooth-features">
              <li>- Encontrar amigos cerca</li>
              <li>- Enviar y recibir mensajes sin internet</li>
              <li>- Crear una red de malla local</li>
            </ul>
          )}
        </div>

        {!isEnabled ? (
          <div className="button-group">
            <button className="btn btn-primary" onClick={handleEnable} data-tour-target="bluetooth-enable-btn">
              <span>Activar Bluetooth</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29z"
                  fill="currentColor"
                />
              </svg>
            </button>

            <button className="btn btn-secondary" onClick={handleSkip}>
              Omitir
            </button>
          </div>
        ) : (
          <div className="success-message">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="var(--accent-primary)" fillOpacity="0.2" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                fill="var(--accent-primary)"
              />
            </svg>
            <p>Todo listo para comenzar</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BluetoothSetup

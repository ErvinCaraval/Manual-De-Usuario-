import { useState, useEffect } from 'react'
import './BatteryOptimization.css'
import { useManual } from './Manual/ManualContext'

const BatteryOptimization = ({ onNext, showToast }) => {
  const [isVisible, setIsVisible] = useState(true)
  const { startTour } = useManual()

  useEffect(() => {
    const tourTimer = setTimeout(() => {
      startTour('battery-optimization');
    }, 800);
    return () => clearTimeout(tourTimer);
  }, [startTour])

  const handleDisable = () => {
    if (showToast) {
      showToast('Optimización de batería desactivada', 'success')
    }
    onNext()
  }

  const handleCheckAgain = () => {
    if (showToast) {
      showToast('Verificando de nuevo la configuración...', 'info')
    }
    // In a real app, you would re-run the check here.
  }

  const handleSkip = () => {
    onNext()
  }

  return (
    <div className={`battery-optimization ${isVisible ? 'visible' : ''}`}>
      <div className="battery-content">
        <div className="battery-header">
          <h1 className="battery-title">bitchat</h1>
        </div>

        <div className="battery-icon-container" data-tour-target="battery-icon">
          <svg className="battery-icon" width="120" height="120" viewBox="0 0 120 120" fill="none">
            <rect x="20" y="40" width="70" height="50" rx="8" fill="#FF6B6B" fillOpacity="0.2" stroke="#FF6B6B" strokeWidth="3" />
            <rect x="90" y="52" width="10" height="26" rx="2" fill="#FF6B6B" />
            <path d="M35 65L55 65" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round" />
            <circle cx="75" cy="65" r="8" fill="#FF6B6B" />
            <path d="M70 65L74 69L80 61" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="battery-status-card">
          <h2 className="status-title">Actividad en segundo plano deshabilitada</h2>

          <p className="status-description">
            BitChat funciona en segundo plano para mantener las conexiones de red mesh con dispositivos cercanos.
            La optimización de batería de tu teléfono puede impedir esto, causando que los mensajes lleguen con retraso o se pierdan.
          </p>

          <p className="status-recommendation">
            Deshabilitar la optimización de batería garantiza mensajería confiable entre pares en segundo plano.
          </p>

          <div className="benefits-box">
            <h3 className="benefits-title">¿Por qué mantenerla activa?</h3>
            <ul className="benefits-list">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="var(--accent-primary)" strokeWidth="2" />
                  <path d="M9 12l2 2 4-4" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Asegura entrega confiable de mensajes</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="var(--accent-primary)" strokeWidth="2" />
                  <path d="M9 12l2 2 4-4" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Mantiene conectividad de red mesh</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="var(--accent-primary)" strokeWidth="2" />
                  <path d="M9 12l2 2 4-4" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Permite mensajes en segundo plano</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="battery-actions">
          <button className="btn btn-primary" onClick={handleDisable} data-tour-target="battery-disable-btn">
            Desactivar optimización de batería
          </button>

          <div className="secondary-actions">
            <button className="btn btn-secondary" onClick={handleCheckAgain} data-tour-target="battery-check-btn">
              Verificar de nuevo
            </button>
            <button className="btn btn-secondary" onClick={handleSkip} data-tour-target="battery-skip-btn">
              Omitir por ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BatteryOptimization

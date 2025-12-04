import { useState } from 'react'
import './ClearMessages.css'

const ClearMessages = ({ onConfirm, onCancel, showToast }) => {
  const [inputValue, setInputValue] = useState('')

  const handleConfirm = () => {
    if (showToast) showToast('Mensajes eliminados correctamente', 'success')
    onConfirm()
  }

  return (
    <div className="clear-messages-overlay" onClick={onCancel}>
      <div className="clear-messages-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="clear-dialog-header">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="clear-icon-large">
            <path d="M3 6h18M8 6V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2m3 0v14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6h14z"
                  stroke="#EF4444" strokeWidth="2" fill="none"/>
            <path d="M10 11v6M14 11v6" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <h3 className="clear-dialog-title">Limpiar mensajes</h3>
          <p className="clear-dialog-text">
            ¿Deseas eliminar todo el historial de mensajes? Esta acción no se puede deshacer y los mensajes se perderán permanentemente.
          </p>
        </div>

        <div className="clear-dialog-actions">
          <button className="clear-dialog-btn secondary" onClick={onCancel}>
            Cancelar
          </button>
          <button className="clear-dialog-btn danger" onClick={handleConfirm}>
            Limpiar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ClearMessages

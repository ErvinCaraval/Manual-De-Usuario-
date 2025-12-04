import './BlockedContact.css'

const BlockedContact = ({ contactName, onUnblock, onClose, showToast }) => {
  const handleUnblock = () => {
    onUnblock()
    if (showToast) showToast(`Contacto ${contactName} desbloqueado correctamente`, 'success')
    onClose()
  }

  return (
    <div className="blocked-contact-overlay" onClick={onClose}>
      <div className="blocked-contact-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="blocked-dialog-header">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="blocked-icon-large">
            <circle cx="12" cy="12" r="10" stroke="#EF4444" strokeWidth="2" fill="none"/>
            <path d="M4.93 4.93l14.14 14.14" stroke="#EF4444" strokeWidth="2"/>
          </svg>
          <h3 className="blocked-dialog-title">Contacto bloqueado</h3>
          <p className="blocked-dialog-text">
            <strong>{contactName}</strong> está bloqueado. No podrás recibir mensajes de este usuario.
          </p>
        </div>

        <div className="blocked-dialog-actions">
          <button className="blocked-dialog-btn secondary" onClick={onClose}>
            Cerrar
          </button>
          <button className="blocked-dialog-btn unblock" onClick={handleUnblock}>
            Desbloquear
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlockedContact

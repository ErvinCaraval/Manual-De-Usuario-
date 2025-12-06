import { useEffect } from 'react';
import './ContactActions.css'
import { useManual } from './Manual/ManualContext';

const ContactActions = ({
  contactName,
  onBlock,
  onClose,
  onRemove,
  onViewOnline,
  onFavorite,
  onClearMessages
}) => {
  const { startTour } = useManual();

  useEffect(() => {
    const timer = setTimeout(() => {
      startTour('contact-actions');
    }, 500);
    return () => clearTimeout(timer);
  }, [startTour]);

  const handleAction = (action) => {
    onClose();
    if (action) {
      action();
    }
  };

  return (
    <div className="contact-actions-overlay" onClick={onClose}>
      <div className="contact-actions-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-header">
          <div className="sheet-handle"></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <h3 className="sheet-title">Opciones de chat</h3>
          </div>
        </div>

        <div className="sheet-content">
          <button className="action-item" onClick={() => handleAction(onViewOnline)} data-tour-target="action-online">
            <div className="action-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
              </svg>
            </div>
            <div className="action-content">
              <span className="action-title">Ver usuarios en línea</span>
              <span className="action-subtitle">0 usuarios conectados</span>
            </div>
          </button>

          <button className="action-item" onClick={() => handleAction(onFavorite)} data-tour-target="action-favorite">
            <div className="action-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className="action-content">
              <span className="action-title">Marcar como favorito</span>
              <span className="action-subtitle">Acceso rápido a este contacto</span>
            </div>
          </button>

          <button className="action-item" onClick={() => handleAction(onClearMessages)} data-tour-target="action-clear">
            <div className="action-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 6h18M8 6V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2m3 0v14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6h14z"
                  stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className="action-content">
              <span className="action-title">Limpiar mensajes</span>
              <span className="action-subtitle">Eliminar historial del chat</span>
            </div>
          </button>

          <button className="action-item danger" onClick={() => handleAction(onBlock)} data-tour-target="action-block">
            <div className="action-icon danger">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M4.93 4.93l14.14 14.14" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <div className="action-content">
              <span className="action-title">Bloquear contacto</span>
              <span className="action-subtitle">Ya no podrás recibir mensajes</span>
            </div>
          </button>

          <button className="action-item danger" onClick={() => handleAction(onRemove)} data-tour-target="action-remove">
            <div className="action-icon danger">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="17" y1="11" x2="23" y2="11"></line></svg>
            </div>
            <div className="action-content">
              <span className="action-title">Quitar Contacto</span>
              <span className="action-subtitle">Eliminar de tu lista de contactos</span>
            </div>
          </button>

        </div>

        <div className="sheet-footer">
          <button className="sheet-cancel" onClick={onClose} data-tour-target="action-cancel">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactActions

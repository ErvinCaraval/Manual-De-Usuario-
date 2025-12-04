import './FavoriteContact.css'

const FavoriteContact = ({ contactName, onAdd, onFavorite, onBlock, onClose }) => {
  const handleAddFavorite = () => {
    onFavorite()
    onClose()
  }

  return (
    <div className="favorite-contact-overlay" onClick={onClose}>
      <div className="favorite-contact-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="favorite-dialog-header">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="favorite-icon-large">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="var(--accent-primary)"/>
          </svg>
          <h3 className="favorite-dialog-title">Agregar a favoritos</h3>
          <p className="favorite-dialog-text">
            ¿Deseas agregar a <strong>{contactName}</strong> a tus contactos favoritos?
          </p>
        </div>

        <div className="favorite-dialog-actions">
          <button className="favorite-dialog-btn secondary" onClick={onClose}>
            Cancelar
          </button>
          <button className="favorite-dialog-btn primary" onClick={handleAddFavorite}>
            Agregar
          </button>
        </div>
      </div>
    </div>
  )
}

export default FavoriteContact

import './CommandToast.css';

const CommandToast = ({ isVisible }) => {
  return (
    <div className={`command-toast ${isVisible ? 'visible' : ''}`}>
      <div className="toast-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 17.25L12 21.5L20 17.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 12.25L12 16.5L20 12.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 2.5L20 7L12 11.5L4 7L12 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="toast-content">
        <p className="toast-title">¿Sabías que puedes usar comandos?</p>
        <p className="toast-description">Escribe <strong>/</strong> para ver la lista de acciones rápidas.</p>
      </div>
    </div>
  );
};

export default CommandToast;

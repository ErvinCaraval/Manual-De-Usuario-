import { useState, useEffect } from 'react';
import './OnlineUsers.css';
import { mockUsers } from '../utils/mockData';

const OnlineUsers = ({ onUserSelect, onClose, showToast, actionContext }) => {
  const [onlineUsers, setOnlineUsers] = useState(mockUsers.slice(0, 3));

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineUsers(prevUsers => {
        const onlineIds = new Set(prevUsers.map(u => u.id));
        const offlineUsers = mockUsers.filter(u => !onlineIds.has(u.id));

        if (prevUsers.length < 2 || (Math.random() > 0.4 && offlineUsers.length > 0)) {
          const userToAdd = offlineUsers[Math.floor(Math.random() * offlineUsers.length)];
          return [...prevUsers, userToAdd];
        } else {
          const userToRemove = prevUsers[Math.floor(Math.random() * prevUsers.length)];
          return prevUsers.filter(user => user.id !== userToRemove.id);
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getTitle = () => {
    switch (actionContext) {
      case 'favorite': return 'Marcar favorito';
      case 'block': return 'Bloquear usuario';
      case 'remove': return 'Quitar contacto';
      default: return 'Usuarios en línea';
    }
  };

  const getSubtitle = () => {
    switch (actionContext) {
      case 'favorite': return 'Selecciona un usuario para añadir a favoritos';
      case 'block': return 'Selecciona un usuario para bloquear';
      case 'remove': return 'Selecciona un usuario para quitar de tus contactos';
      default: return `${onlineUsers.length} conectados`;
    }
  };

  return (
    <div className="online-users-overlay" onClick={onClose}>
      <div className="online-users-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="online-sheet-header">
          <div className="drag-handle"></div>
          <h3 className="online-sheet-title">{getTitle()}</h3>
          <span className="online-count">{getSubtitle()}</span>
        </div>

        <div className="online-users-list">
          {onlineUsers.map((user) => (
            <button
              key={user.id}
              className="online-user-item"
              onClick={() => onUserSelect(user)}
            >
              <div className="user-avatar">
                <div className="avatar-circle">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div className="status-indicator online"></div>
              </div>
              <div className="user-info">
                <span className="user-name-text">{user.name}</span>
                <span className="user-status">En línea</span>
              </div>
              <svg className="chevron-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          ))}
        </div>

        <div className="online-sheet-footer">
          <button className="online-sheet-cancel" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineUsers;

import React from 'react';
import './Shared.css';
import './Settings.css';

const Settings = ({ onBack }) => {
  const settingsOptions = [
    { id: 'notifications', label: 'Notificaciones' },
    { id: 'privacy', label: 'Privacidad' },
    { id: 'appearance', label: 'Apariencia' },
    { id: 'language', label: 'Idioma' },
    { id: 'about', label: 'Acerca de' },
  ];

  return (
    <div className="view-container">
      <div className="view-header">
        <button className="back-button" onClick={onBack}>‹</button>
        <h2 className="view-title">Configuración</h2>
      </div>
      <div className="menu-view-content settings-content">
        <div className="settings-list">
          {settingsOptions.map((option) => (
            <div key={option.id} className="settings-item">
              <span className="settings-item-label">{option.label}</span>
              <span>〉</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;

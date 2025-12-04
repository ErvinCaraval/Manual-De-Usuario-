import React, { useState } from 'react';
import './Shared.css';
import './UserProfile.css';

const UserProfile = ({ onBack }) => {
  const [name, setName] = useState('Juan Pérez');
  const [bio, setBio] = useState('Desarrollador Frontend | Entusiasta de React');

  return (
    <div className="view-container">
      <div className="view-header">
        <button className="back-button" onClick={onBack}>‹</button>
        <h2 className="view-title">Editar Perfil</h2>
      </div>
      <div className="menu-view-content user-profile-content">
        <div className="profile-header">
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Avatar" className="profile-avatar" />
          <button className="btn btn-secondary">Cambiar Avatar</button>
        </div>

        <form className="profile-form">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="bio">Biografía</label>
            <input type="text" id="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
          </div>
          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={onBack}>Cancelar</button>
            <button type="submit" className="btn btn-primary">Guardar Cambios</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;

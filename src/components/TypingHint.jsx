import React from 'react';
import './TypingHint.css';

const TypingHint = ({ show }) => {
  return (
    <div className={`typing-hint ${show ? 'visible' : ''}`}>
      <span>Escribe <strong>/</strong> para descubrir comandos</span>
    </div>
  );
};

export default TypingHint;

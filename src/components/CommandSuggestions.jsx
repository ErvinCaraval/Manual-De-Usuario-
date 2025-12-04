import { useEffect, useRef } from 'react';
import './CommandSuggestions.css';

const CommandSuggestions = ({ input, onSelectCommand, onClose }) => {
  const suggestionsRef = useRef(null);

  const allCommands = [
    {
      command: '/help',
      args: '',
      description: 'Muestra todos los comandos disponibles',
      example: '/help',
      color: '#00ccff'
    },
    {
      command: '/status',
      args: '',
      description: 'Muestra el estado de la conexión',
      example: '/status',
      color: '#00ff88'
    },
    {
      command: '/clear',
      args: '',
      description: 'Limpia la ventana de chat',
      example: '/clear',
      color: '#ff9500'
    },
    {
      command: '/hug',
      args: '<usuario>',
      description: 'Envía un abrazo a otro usuario',
      example: '/hug anon64',
      color: '#00ffff'
    },
    {
      command: '/msg',
      args: '<usuario> <mensaje>',
      description: 'Envía un mensaje privado',
      example: '/msg anon64 Hola!',
      color: '#ff4444'
    },
    {
        command: '/slap',
        args: '<usuario>',
        description: 'Dale una bofetada a alguien con una trucha',
        example: '/slap anon64',
        color: '#ff6b6b'
    },
    {
        command: '/w',
        args: '',
        description: "Ver quién está en línea",
        example: '/w',
        color: '#00ff88'
    },
    {
        command: '/join',
        args: '<canal>',
        description: 'Únete o crea un canal',
        example: '/join general',
        color: '#00ff88'
    }
  ];

  const filteredCommands = input && input.startsWith('/')
    ? allCommands.filter(cmd =>
        cmd.command.toLowerCase().startsWith(input.toLowerCase())
      )
    : [];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  if (filteredCommands.length === 0) return null;

  return (
    <div className="command-suggestions" ref={suggestionsRef}>
      <div className="suggestions-header">
        <span className="suggestions-title">Comandos disponibles</span>
        <span className="suggestions-count">{filteredCommands.length}</span>
      </div>

      <div className="suggestions-list">
        {filteredCommands.map((cmd, index) => (
          <button
            key={index}
            className="suggestion-item"
            onClick={() => onSelectCommand(cmd.command)}
          >
            <div className="suggestion-left">
              <div className="command-indicator" style={{ background: cmd.color }}></div>
              <div className="suggestion-content">
                <div className="suggestion-command">
                  <span className="cmd-name">{cmd.command}</span>
                  {cmd.args && <span className="cmd-args">{cmd.args}</span>}
                </div>
                <div className="suggestion-description">{cmd.description}</div>
              </div>
            </div>
            <div className="suggestion-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        ))}
      </div>

      <div className="suggestions-footer">
        <span className="hint-text">Presiona Tab para autocompletar</span>
      </div>
    </div>
  );
};

export default CommandSuggestions;

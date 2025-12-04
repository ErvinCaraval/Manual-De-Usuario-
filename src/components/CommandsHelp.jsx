import './CommandsHelp.css'

const CommandsHelp = ({ onClose, showToast }) => {
  const commands = [
    {
      command: '/block',
      args: '[nickname]',
      description: 'block or list blocked peers',
      icon: '🚫'
    },
    {
      command: '/channels',
      args: '',
      description: 'show all discovered channels',
      icon: '📡'
    },
    {
      command: '/clear',
      args: '',
      description: 'clear chat messages',
      icon: '🗑️'
    },
    {
      command: '/hug',
      args: '<nickname>',
      description: 'send someone a warm hug',
      icon: '🤗'
    },
    {
      command: '/m, /join',
      args: '<channel>',
      description: 'join or create a channel',
      icon: '➕'
    },
    {
      command: '/m, /mg',
      args: '<nickname> [message]',
      description: 'send private message',
      icon: '💬'
    },
    {
      command: '/slap',
      args: '<nickname>',
      description: 'slap someone with a trout',
      icon: '🐟'
    },
    {
      command: '/unblock',
      args: '<nickname>',
      description: 'unblock a peer',
      icon: '✅'
    },
    {
      command: '/w',
      args: '',
      description: "see who's online",
      icon: '👥'
    }
  ]

  return (
    <div className="commands-help">
      <div className="commands-overlay" onClick={() => { if (showToast) showToast('Ayuda de comandos cerrada', 'info'); onClose(); }}></div>

      <div className="commands-panel">
        <div className="commands-header">
          <div className="slash-icon">/</div>
          <button className="close-btn" onClick={() => { if (showToast) showToast('Ayuda de comandos cerrada', 'info'); onClose(); }}>
            Cerrar
          </button>
        </div>

        <div className="commands-content">
          <div className="terminal-window">
            {commands.map((cmd, index) => (
              <div key={index} className="command-row">
                <div className="command-syntax">
                  <span className="command-name">{cmd.command}</span>
                  {cmd.args && <span className="command-args"> {cmd.args}</span>}
                </div>
                <div className="command-description">
                  <span className="command-icon">{cmd.icon}</span>
                  <span>{cmd.description}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="commands-footer">
            <div className="tip-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="var(--accent-primary)" strokeWidth="2"/>
                <path d="M12 16v-4M12 8h.01" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Tip: Escribe / en el chat para ver los comandos disponibles</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommandsHelp

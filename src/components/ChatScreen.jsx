import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatScreen.css';
import ClearMessages from './ClearMessages';
import ContactActions from './ContactActions';
import OnlineUsers from './OnlineUsers';
import BlockedContact from './BlockedContact';
import FloatingMenu from './FloatingMenu';
import HugAnimation from './HugAnimation';
import PrivateMessage from './PrivateMessage';
import QRIdentity from './QRIdentity';
import CommandSuggestions from './CommandSuggestions';
import TypingHint from './TypingHint';
import { mockUsers, mockMessages, generateRandomReply } from '../utils/mockData';
import { useManual } from './Manual/ManualContext';

const ChatScreen = ({ showToast }) => {
  const navigate = useNavigate();
  const { startTour } = useManual();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(mockMessages);
  const [showClearMessages, setShowClearMessages] = useState(false);
  const [showContactActions, setShowContactActions] = useState(false);
  const [showOnlineUsers, setShowOnlineUsers] = useState(false);
  const [showBlockedContact, setShowBlockedContact] = useState(false);
  const [selectedContact, setSelectedContact] = useState('anon64');
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);
  const [showHugAnimation, setShowHugAnimation] = useState(false);
  const [showPrivateMessage, setShowPrivateMessage] = useState(false);
  const [showQRIdentity, setShowQRIdentity] = useState(false);
  const [showCommandSuggestions, setShowCommandSuggestions] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [showTypingHint, setShowTypingHint] = useState(false);
  const hintTimeoutRef = useRef(null);
  const [actionContext, setActionContext] = useState(null);

  // Auto-start tour on mount for visibility
  useEffect(() => {
    const timer = setTimeout(() => {
      startTour('chat');
    }, 500);
    return () => clearTimeout(timer);
  }, [startTour]);

  const addSystemMessage = (text) => {
    const systemMessage = {
      id: Date.now(),
      text,
      time: new Date().toLocaleTimeString(),
      isSystem: true,
    };
    setMessages(prev => [...prev, systemMessage]);
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    const text = message.trim();

    if (text.startsWith('/')) {
      const [command, ...args] = text.split(' ');
      const arg = args.join(' ');
      addSystemMessage(text);

      switch (command) {
        case '/block':
          addSystemMessage(`> Bloqueaste a ${arg || 'un usuario'}.`);
          showToast(`Bloqueaste a ${arg || 'un usuario'}`, 'success');
          break;
        case '/unblock':
          addSystemMessage(`> Desbloqueaste a ${arg || 'un usuario'}.`);
          showToast(`Desbloqueaste a ${arg || 'un usuario'}`, 'success');
          break;
        case '/channels':
          addSystemMessage('> Navegando a canales...');
          navigate('/channels');
          break;
        case '/clear':
          setShowClearMessages(true);
          break;
        case '/hug':
          addSystemMessage(`> Le enviaste un abrazo a ${arg || 'alguien'}.`);
          setShowHugAnimation(true);
          break;
        case '/join':
          addSystemMessage(`> Te uniste al canal #${arg}.`);
          break;
        case '/msg':
        case '/m':
          const recipient = args[0] || 'alguien';
          const privateMsg = args.slice(1).join(' ');
          addSystemMessage(`> (Mensaje privado a ${recipient}): ${privateMsg}`);
          showToast('Mensaje privado enviado', 'success');
          break;
        case '/slap':
          addSystemMessage(`> Abofeteaste a ${arg || 'alguien'} con una trucha.`);
          break;
        case '/w':
          addSystemMessage('> Usuarios en línea: @anon9680, @anon64, @user123, @peerx');
          break;
        default:
          addSystemMessage(`> Comando no reconocido: ${command}`);
          break;
      }
      setMessage('');
      setShowCommandSuggestions(false);
      return;
    }

    const newMessage = { id: Date.now(), text, time: new Date().toLocaleTimeString(), sender: 'me', status: 'sending' };
    setMessages(prev => [...prev, newMessage]);
    setMessage('');
    setTimeout(() => {
      const reply = { id: Date.now() + 1, text: generateRandomReply(), time: new Date().toLocaleTimeString(), sender: selectedContact, status: 'sent' };
      setMessages(prev => [...prev.map(m => m.id === newMessage.id ? { ...m, status: 'sent' } : m), reply]);
    }, 1000);
  };

  const handleCommandInput = (value) => {
    setMessage(value);
    if (value.startsWith('/')) {
      setShowCommandSuggestions(true);
      setShowTypingHint(false);
    } else {
      setShowCommandSuggestions(false);
      if (value.length > 0) {
        setShowTypingHint(true);
        if (hintTimeoutRef.current) {
          clearTimeout(hintTimeoutRef.current);
        }
        hintTimeoutRef.current = setTimeout(() => {
          setShowTypingHint(false);
        }, 2000);
      } else {
        setShowTypingHint(false);
      }
    }
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
    if (message.length === 0) {
      setShowTypingHint(true);
      if (hintTimeoutRef.current) {
        clearTimeout(hintTimeoutRef.current);
      }
      hintTimeoutRef.current = setTimeout(() => {
        setShowTypingHint(false);
      }, 2000);
    }
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
    setShowTypingHint(false);
    if (hintTimeoutRef.current) {
      clearTimeout(hintTimeoutRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (hintTimeoutRef.current) {
        clearTimeout(hintTimeoutRef.current);
      }
    };
  }, []);

  const handleInitiateAction = (action) => {
    setActionContext(action);
    setShowOnlineUsers(true);
    setShowContactActions(false);
  };

  const handleUserSelection = (user) => {
    const userName = user.name || 'este usuario';

    if (actionContext) {
      const message = { time: new Date().toLocaleTimeString(), isSystem: true };
      switch (actionContext) {
        case 'favorite':
          message.text = `> Has añadido a ${userName} a tus favoritos.`;
          showToast(message.text, 'success');
          break;
        case 'block':
          message.text = `> Has bloqueado a ${userName}.`;
          showToast(message.text, 'success');
          break;
        case 'remove':
          message.text = `> Has eliminado a ${userName} de tus contactos.`;
          showToast(message.text, 'success');
          break;
        default:
          setSelectedContact(userName);
          message.text = `> Ahora estás chateando con ${userName}.`;
          showToast(message.text);
          break;
      }
      setMessages(prev => [...prev, message]);
    } else {
      setSelectedContact(userName);
      const message = { text: `> Ahora estás chateando con ${userName}.`, time: new Date().toLocaleTimeString(), isSystem: true };
      setMessages(prev => [...prev, message]);
      showToast(message.text);
    }

    setShowOnlineUsers(false);
    setActionContext(null);
  };

  const handleAddAttachment = () => setShowContactActions(true);
  const handleClearMessages = () => {
    addSystemMessage('> Historial de chat limpiado.');
    setMessages([]);
    setShowClearMessages(false);
    showToast('Mensajes eliminados', 'success');
  };
  const handleUnblockContact = () => {
    addSystemMessage(`> ${selectedContact} ha sido desbloqueado.`);
    showToast(`${selectedContact} ha sido desbloqueado.`, 'success');
  }
  const handleSelectCommand = (command) => { setMessage(command.split(' ')[0] + ' '); setShowCommandSuggestions(false); document.querySelector('.message-input')?.focus(); };
  const handleSendPrivateMessage = (msg, recipient) => {
    addSystemMessage(`> (Mensaje privado a ${recipient}): ${msg}`);
    showToast('Mensaje privado enviado', 'success');
  }

  return (
    <>
      <div className="chat-screen">
        <div className="chat-header">
          <div className="header-left">
            <h1 className="chat-title">bitchat</h1>
            <span className="user-name">/@anon9680</span>
          </div>
          <div className="header-right">
            <button className="header-btn" onClick={() => navigate('/channels')} title="Cambiar de canal" data-tour-target="channel-btn"><span className="mesh-label">#canal</span></button>
            <button className="header-btn" onClick={() => navigate('/network')} title="Ver red de contactos" data-tour-target="network-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M20 8v6" /><path d="M23 11h-6" /></svg><span className="peer-count">0</span></button>
            <button className="header-btn" onClick={() => setShowQRIdentity(true)} title="Mostrar mi código QR" data-tour-target="qr-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h4v4H3z M17 3h4v4h-4z M3 17h4v4H3z" /><path d="M9 3h1v1H9z M11 3h1v1h-1z M13 3h1v1h-1z M9 5h1v1H9z M13 5h1v1h-1z M5 9h1v1H5z M9 9h1v1H9z M11 9h1v1h-1z M13 9h1v1h-1z M15 9h1v1h-1z M17 9h1v1h-1z M19 9h1v1h-1z M5 11h1v1H5z M9 11h1v1H9z M13 11h1v1h-1z M19 11h1v1h-1z M3 13h1v1H3z M5 13h1v1H5z M7 13h1v1H7z M9 13h1v1H9z M11 13h1v1h-1z M15 13h1v1h-1z M17 13h1v1h-1z M5 15h1v1H5z M7 15h1v1H7z M9 15h1v1H9z M11 15h1v1h-1z M13 15h1v1h-1z M15 15h1v1h-1z M19 15h1v1h-1z M9 17h1v1H9z M13 17h1v1h-1z M15 17h1v1h-1z M9 19h1v1H9z M11 19h1v1h-1z M13 19h1v1h-1z" /></svg></button>
            <button className="header-btn menu-dots-btn" onClick={() => setShowFloatingMenu(true)} title="Abrir menú" data-tour-target="menu-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
          </div>
        </div>
        <div className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.sender === 'me' ? 'sent' : 'received'} ${msg.isSystem ? 'system-message' : ''}`}>
              {msg.isSystem && <span className="message-prefix">$&gt;</span>}
              {msg.text && <span className="message-text">{msg.text}</span>}
              <span className="message-time">[{msg.time}]</span>
            </div>
          ))}
        </div>
        <div className="chat-input-container">
          <div className="chat-options-bar">
            <button className="chat-options-btn" onClick={handleAddAttachment} title="Opciones de Chat" data-tour-target="options-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V15a1.65 1.65 0 0 0 1.51 1z"></path>
              </svg>
            </button>
          </div>
          <TypingHint show={showTypingHint} />
          {showCommandSuggestions && <CommandSuggestions input={message} onSelectCommand={handleSelectCommand} onClose={() => setShowCommandSuggestions(false)} />}
          <div className={`input-wrapper ${isInputFocused || message ? 'focused' : ''}`}>
            <input
              type="text"
              className="message-input"
              placeholder="Escribe un comando o mensaje..."
              value={message}
              onChange={(e) => handleCommandInput(e.target.value)}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              data-tour-target="message-input"
            />
            <button className="send-btn" onClick={handleSendMessage} title="Enviar mensaje" data-tour-target="send-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--accent-primary)"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z" /></svg></button>
          </div>
        </div>
      </div>

      {/* Modals and other overlays */}
      {showClearMessages && <ClearMessages onConfirm={handleClearMessages} onCancel={() => setShowClearMessages(false)} showToast={showToast} />}
      {showContactActions && <ContactActions contactName={selectedContact} onClose={() => setShowContactActions(false)} onViewOnline={() => handleInitiateAction(null)} onFavorite={() => handleInitiateAction('favorite')} onBlock={() => handleInitiateAction('block')} onRemove={() => handleInitiateAction('remove')} onClearMessages={() => { setShowContactActions(false); setShowClearMessages(true); }} />}
      {showOnlineUsers && <OnlineUsers onClose={() => { setShowOnlineUsers(false); setActionContext(null); }} onUserSelect={handleUserSelection} showToast={showToast} actionContext={actionContext} />}
      {showBlockedContact && <BlockedContact contactName={selectedContact} onUnblock={handleUnblockContact} onClose={() => setShowBlockedContact(false)} showToast={showToast} />}
      {showFloatingMenu && <FloatingMenu onClose={() => setShowFloatingMenu(false)} showToast={showToast} />}
      {showHugAnimation && <HugAnimation contactName={selectedContact} onClose={() => setShowHugAnimation(false)} />}
      {showPrivateMessage && <PrivateMessage contactName={selectedContact} onClose={() => setShowPrivateMessage(false)} onSend={(msg) => handleSendPrivateMessage(msg, selectedContact)} />}
      {showQRIdentity && <QRIdentity onClose={() => setShowQRIdentity(false)} />}
    </>
  );
};

export default ChatScreen;

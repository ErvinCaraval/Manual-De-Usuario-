export const mockUsers = [
  { id: 1, name: 'CryptoExplorer', status: 'online', distance: '5m', isFavorite: true, lastSeen: 'Activo ahora' },
  { id: 2, name: 'LocalFoodie', status: 'online', distance: '10m', isFavorite: false, lastSeen: 'Activo ahora' },
  { id: 3, name: 'TechNomad', status: 'offline', distance: '15m', isFavorite: false, lastSeen: 'Hace 5 minutos' },
  { id: 4, name: 'ArtLover', status: 'online', distance: '20m', isFavorite: true, lastSeen: 'Activo ahora' },
  { id: 5, name: 'SportsFan', status: 'online', distance: '25m', isFavorite: false, lastSeen: 'Activo ahora' },
  { id: 6, name: 'MusicJunkie', status: 'offline', distance: '30m', isFavorite: false, lastSeen: 'Hace 15 minutos' },
  { id: 7, name: 'NightOwl', status: 'online', distance: '35m', isFavorite: false, lastSeen: 'Activo ahora' },
  { id: 8, name: 'BookWorm', status: 'offline', distance: '40m', isFavorite: false, lastSeen: 'Hace 1 hora' }
];

export const mockMessages = [
  {
    id: 1,
    text: '👋 ¡Bienvenido a BitChat! Conéctate con gente a tu alrededor de forma segura.',
    time: '11:50:39',
    isSystem: true
  },
  {
    id: 2,
    senderId: 1,
    text: '¡Hola a todos! ¿Alguien interesado en una quedada sobre criptomonedas hoy?',
    time: '11:51:00',
    status: 'sent'
  },
  {
    id: 3,
    senderId: 2,
    text: '¡Conozco un café genial cerca que acepta cripto! 🚀',
    time: '11:51:30',
    status: 'received'
  },
  {
    id: 4,
    senderId: 4,
    text: 'Acabo de visitar una galería de arte increíble en la zona. ¡Tienen una exposición de NFT!',
    time: '11:52:00',
    status: 'received'
  },
  {
    id: 5,
    senderId: 1,
    text: '¡Suena perfecto! ¿Nos vemos allí en una hora?',
    time: '11:52:30',
    status: 'sent'
  },
  {
    id: 6,
    text: '🎉 ¡CryptoExplorer y LocalFoodie ahora están conectados!',
    time: '11:53:00',
    isSystem: true
  }
];

export const generateRandomReply = () => {
  const replies = [
    '¡Hola! ¿Qué tal todo por aquí? 👋',
    '¡Eso suena interesante! ¿Me cuentas más? 🤔',
    'Estoy cerca, ¿quedamos para un café? ☕',
    '¿Has probado las nuevas funciones de la app? 🚀',
    '¡Gracias por el mensaje! Me encanta conocer gente nueva 😊',
    '¡Genial! Hablemos más sobre eso 💬',
    '¡Acabo de llegar a la zona! ¿Alguna recomendación? 🌟',
    '¿Alguien para una quedada crypto? 💰',
    '¡Me encanta este barrio! Siempre hay algo nuevo que descubrir 🌆',
    '¿Habéis visto el nuevo café que han abierto? ¡Acepta Bitcoin! 🎉'
  ];
  return replies[Math.floor(Math.random() * replies.length)];
};

export const mockChannels = [
  { id: 1, name: '🎨 Distrito de Arte', members: 45 },
  { id: 2, name: '☕ Cafés Locales', members: 78 },
  { id: 3, name: '💰 Charla Cripto', members: 120 },
  { id: 4, name: '🎵 Escena Musical', members: 65 },
  { id: 5, name: '📚 Club de Lectura', members: 32 }
];

export const mockNotifications = [
  { id: 1, type: 'newUser', text: '¡NightOwl se ha unido a la red!' },
  { id: 2, type: 'channelActivity', text: 'Nuevo mensaje en Charla Cripto' },
  { id: 3, type: 'nearby', text: '3 nuevos usuarios cerca' }
];

export const mockCommands = [
  { command: '/help', description: 'Muestra los comandos disponibles' },
  { command: '/clear', description: 'Limpia el historial de chat' },
  { command: '/location', description: 'Comparte tu ubicación' },
  { command: '/favorite', description: 'Añade un usuario a favoritos' },
  { command: '/block', description: 'Bloquea a un usuario' },
  { command: '/channel', description: 'Únete a un canal' }
];

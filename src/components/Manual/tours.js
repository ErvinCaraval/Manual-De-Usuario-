export const tours = {
    onboarding: [
        {
            target: "welcome-title",
            title: "Bienvenido a BitChat",
            content: "La forma más segura, descentralizada y privada de comunicarse. Configuremos tu experiencia.",
            position: "bottom"
        },
        {
            target: "start-btn",
            title: "Comenzar",
            content: "Haz clic aquí para iniciar el proceso de configuración. Solo tomará un minuto.",
            position: "top"
        }
    ],
    "location-permission": [
        {
            target: "location-card-precise",
            title: "Ubicación Precisa",
            content: "Ideal para encontrar personas en un lugar específico, como un evento o café.",
            position: "top"
        },
        {
            target: "location-card-approximate",
            title: "Ubicación Aproximada",
            content: "Muestra tu zona general (barrio) para mayor privacidad.",
            position: "top"
        },
        {
            target: "location-allow-btn",
            title: "Permitir Acceso",
            content: "Selecciona una opción para continuar y encontrar pares cercanos.",
            position: "top"
        }
    ],
    "notification-permission": [
        {
            target: "notification-icon",
            title: "No te pierdas nada",
            content: "Necesitamos permiso para avisarte cuando recibas mensajes nuevos.",
            position: "bottom"
        },
        {
            target: "notification-enable-btn",
            title: "Activar Notificaciones",
            content: "Haz clic para recibir alertas instantáneas de tus chats.",
            position: "top"
        }
    ],
    "bluetooth-setup": [
        {
            target: "bluetooth-viz",
            title: "Red Mesh Local",
            content: "BitChat usa Bluetooth para conectar dispositivos cercanos sin internet.",
            position: "bottom"
        },
        {
            target: "bluetooth-enable-btn",
            title: "Activar Bluetooth",
            content: "Enciende el Bluetooth para unirte a la red y encontrar usuarios.",
            position: "top"
        }
    ],
    "battery-optimization": [
        {
            target: "battery-icon",
            title: "Segundo Plano",
            content: "Para mantener la conexión mesh, la app necesita funcionar en segundo plano.",
            position: "bottom"
        },
        {
            target: "battery-disable-btn",
            title: "Optimizar",
            content: "Desactiva la optimización de batería para asegurar que los mensajes lleguen siempre.",
            position: "top"
        }
    ],
    chat: [
        {
            target: "channel-btn",
            title: "Canales",
            content: "Cambia entre canales públicos, privados o de tu vecindario.",
            position: "bottom"
        },
        {
            target: "network-btn",
            title: "Red Mesh",
            content: "Mira quién está conectado cerca de ti en el mapa de red.",
            position: "bottom"
        },
        {
            target: "qr-btn",
            title: "Identidad QR",
            content: "Muestra tu código para que otros puedan escanearte y añadirte.",
            position: "bottom"
        },
        {
            target: "menu-btn",
            title: "Menú Principal",
            content: "Accede a ajustes, perfil y tutoriales.",
            position: "bottom"
        },
        {
            target: "options-btn",
            title: "Opciones de Chat",
            content: "Gestiona contactos, limpia el historial o bloquea usuarios.",
            position: "top"
        },
        {
            target: "message-input",
            title: "Mensajería y Comandos",
            content: "Escribe mensajes cifrados o usa '/' para ver comandos como /hug, /slap o /block.",
            position: "top"
        },
        {
            target: "send-btn",
            title: "Enviar",
            content: "Envía mensajes instantáneamente a través de la red mesh.",
            position: "left"
        }
    ],
    "floating-menu": [
        {
            target: "menu-profile",
            title: "Editar Perfil",
            content: "Cambia tu nombre, foto y estado visible para otros usuarios.",
            position: "left"
        },
        {
            target: "menu-saved",
            title: "Mensajes Guardados",
            content: "Accede rápidamente a los mensajes que has marcado como importantes.",
            position: "left"
        },
        {
            target: "menu-backgrounds",
            title: "Fondos de Chat",
            content: "Personaliza la apariencia de tus conversaciones.",
            position: "left"
        },
        {
            target: "menu-darkmode",
            title: "Modo Oscuro",
            content: "Alterna entre el tema claro y oscuro para descansar tu vista.",
            position: "left"
        },
        {
            target: "menu-settings",
            title: "Configuración",
            content: "Ajusta la privacidad, notificaciones y opciones de red.",
            position: "left"
        }
    ],
    "contact-actions": [
        {
            target: "action-online",
            title: "Ver en Línea",
            content: "Comprueba si este usuario está conectado actualmente a la red mesh.",
            position: "top"
        },
        {
            target: "action-favorite",
            title: "Favorito",
            content: "Marca a este contacto para tenerlo siempre a mano.",
            position: "top"
        },
        {
            target: "action-clear",
            title: "Limpiar Chat",
            content: "Borra el historial de mensajes con este usuario. No se puede deshacer.",
            position: "top"
        },
        {
            target: "action-block",
            title: "Bloquear",
            content: "Impide que este usuario te envíe mensajes o vea tu estado.",
            position: "top"
        },
        {
            target: "action-remove",
            title: "Eliminar",
            content: "Borra a este usuario de tu lista de contactos.",
            position: "top"
        }
    ],
    "location-channels": [
        {
            target: "channels-list",
            title: "Canales Geográficos",
            content: "Únete a canales basados en tu ubicación para chatear con gente cerca.",
            position: "top"
        },
        {
            target: "join-btn-0", // Assuming first button
            title: "Unirse",
            content: "Toca para unirte o salir de un canal.",
            position: "left"
        }
    ],
    "network-people": [
        {
            target: "network-map",
            title: "Mapa de Red",
            content: "Visualiza los dispositivos conectados a tu alrededor en tiempo real.",
            position: "bottom"
        },
        {
            target: "peer-node-0", // Assuming first peer
            title: "Usuarios",
            content: "Toca un usuario para ver detalles o chatear.",
            position: "top"
        }
    ]
};

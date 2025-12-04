# Guion para Test de Usabilidad en Maze - BitChat

Este documento contiene el guion de preguntas y tareas para configurar un test de usabilidad no moderado en la plataforma Maze, basado en el `USABILITY_PLAN.md` del proyecto.

---

### **Escenario General para Maze**

Antes de que los usuarios comiencen, preséntales este escenario para darles contexto:

> **"Imagina que un amigo te recomendó BitChat, una nueva app de mensajería que funciona sin internet. Tu misión es abrirla, completar todos los pasos para dejarla lista, y enviar un saludo a todos los que estén cerca."**

---

### **1. Pantalla de Bienvenida (`WelcomeScreen`)**

*   **Misión (Implícita):** El usuario ve la primera pantalla.
*   **Preguntas de Sondeo:**
    1.  **(Pregunta Abierta):** "Sin hacer clic todavía, describe en una o dos frases: ¿qué crees que te permite hacer esta aplicación?"
    2.  **(Escala de Opinión):** "Del 1 al 5, ¿qué tan claramente entiendes para qué sirve BitChat? (1 = Nada claro, 5 = Muy claro)".
    3.  **(Pregunta Abierta):** "¿Qué es lo que más te llama la atención o te genera interés de esta pantalla?"

### **2. Configuración de Bluetooth (`BluetoothSetup`)**

*   **Misión:** "Avanza al siguiente paso."
*   **Preguntas de Sondeo:**
    1.  **(Pregunta Abierta):** "Según lo que acabas de leer, ¿por qué es necesario el Bluetooth para esta app?"
    2.  **(Escala de Opinión):** "Del 1 al 5, ¿la explicación sobre el uso del Bluetooth te parece lógica y te da confianza? (1 = Nada lógico, 5 = Muy lógico)".
    3.  **(Opción Múltiple):** "¿Qué acción te sientes más inclinado a tomar? "
        *   a) Activar Bluetooth
        *   b) Omitir este paso
        *   c) Buscar más información antes de decidir

### **3. Permiso de Ubicación (`LocationPermission`)**

*   **Misión:** "Continúa con la configuración."
*   **Preguntas de Sondeo:**
    1.  **(Pregunta Abierta):** "¿Por qué crees que una app de mensajería *offline* te pide permiso de ubicación?"
    2.  **(Sí/No):** "La pantalla te da a elegir entre ubicación 'Precisa' y 'Aproximada'. ¿Entiendes la diferencia entre las dos?"
    3.  **(Pregunta Abierta - *Opcional, si responden 'Sí'*):** "Explícanos brevemente cuál crees que es la diferencia."
    4.  **(Escala de Opinión):** "Del 1 al 5, ¿qué tan cómodo te sientes compartiendo tu ubicación para usar esta app? (1 = Muy incómodo, 5 = Muy cómodo)".

### **4. Permiso de Notificaciones (`NotificationPermission`)**

*   **Misión:** "Sigue al próximo paso."
*   **Preguntas de Sondeo:**
    1.  **(Pregunta Abierta):** "En tus propias palabras, ¿qué beneficios obtienes si activas las notificaciones?"
    2.  **(Escala de Opinión):** "El mensaje 'Privacidad garantizada: Cero spam' te hace sentir... (1 = Desconfiado, 5 = Confiado)".
    3.  **(Escala de Opinión):** "Del 1 al 5, ¿qué tan importante crees que es activar las notificaciones para no perderte nada en esta app? (1 = Nada importante, 5 = Esencial)".

### **5. Optimización de Batería (`BatteryOptimization`)**

*   **Misión:** "Lee esta última pantalla de configuración."
*   **Preguntas de Sondeo (Clave para tu investigación):**
    1.  **(Pregunta Abierta):** "Esta pantalla es un poco más técnica. Intenta explicar con tus propias palabras, ¿cuál es el problema que la app te pide que soluciones?"
    2.  **(Escala de Opinión):** "Del 1 al 5, ¿qué tan dispuesto estarías a cambiar una configuración de tu teléfono para asegurar que la app funcione bien? (1 = Nada dispuesto, 5 = Totalmente dispuesto)".
    3.  **(Opción Múltiple):** "Si tuvieras que tomar una decisión ahora, ¿qué botón pulsarías?"
        *   a) Abrir Configuración
        *   b) Recordármelo más tarde
        *   c) No volver a mostrar

### **6. Pantalla de Chat (`ChatScreen`)**

*   **Misión Final:**
    > **"¡Has llegado a la pantalla principal! Tu misión final es simple: envía el mensaje 'Hola a todos!'"**
    *(Maze registrará si el usuario logra hacer clic en el input, escribir y enviar).*
*   **Preguntas de Cierre (Post-Misión):**
    1.  **(Sí/No):** "¿Conseguiste enviar el mensaje?"
    2.  **(Pregunta Abierta):** "Al llegar a esta pantalla, ¿entendiste inmediatamente que estabas en un chat público?"
    3.  **(Pregunta Abierta):** "Si quisieras saber quién más está conectado cerca de ti, ¿qué harías?"
    4.  **(Pregunta Abierta):** "El campo de texto menciona la palabra 'comando'. ¿Qué te imaginas que podrías hacer con un comando?"

### **Preguntas Finales del Test**

1.  **(Escala de Opinión):** "En general, del 1 al 5, ¿cómo de fácil te pareció todo el proceso desde que abriste la app hasta que enviaste el mensaje? (1 = Muy difícil, 5 = Muy fácil)".
2.  **(Pregunta Abierta):** "¿Cuál fue la parte, pantalla o texto que te generó más dudas o confusión?"
3.  **(Pregunta Abierta):** "Si tuvieras una varita mágica y pudieras cambiar una sola cosa de lo que has visto, ¿qué cambiarías y por qué?"

# Plan de Evaluación de Usabilidad: BitChat (Versión Final Completa)

Este documento detalla el plan y guion para evaluar la usabilidad, claridad y confianza del flujo completo de la aplicación, desde la configuración inicial hasta la pantalla principal de chat.

## 1. Definir Objetivos

**Objetivo Principal:** Evaluar la efectividad del flujo de la aplicación para que los usuarios comprendan la propuesta de valor, acepten los permisos necesarios con confianza y entiendan cómo iniciar una conversación en la pantalla de chat.

**Flujo a Probar:**
*   `WelcomeScreen` → `BluetoothSetup` → `LocationPermission` → `NotificationPermission` → `BatteryOptimization` → **`ChatScreen`**

**Preguntas de Investigación Clave:**
1.  **Claridad del Onboarding:**
    *   ¿Entienden los usuarios *por qué* BitChat necesita cada permiso en el contexto de una app de mensajería offline?
    *   **Específico para `BatteryOptimization`:** ¿Comprenden el problema técnico y el beneficio de desactivar la optimización, o lo perciben como un riesgo?
2.  **Confianza y Percepción:**
    *   ¿El lenguaje de la app genera confianza o sospecha al solicitar permisos?
3.  **Usabilidad de la Pantalla de Chat:**
    *   Al llegar a la pantalla de chat, ¿entienden los usuarios dónde se encuentran?
    *   ¿Saben cómo ver quién más está conectado en la red?
    *   ¿La funcionalidad de los comandos (`/`) es intuitiva o confusa para un nuevo usuario?
    *   ¿Identifican cómo enviar un mensaje a todos o a un usuario específico?

**Métricas de Éxito:**
*   **Cualitativas:** Alta tasa de comentarios positivos. Mínimo de preguntas de confusión. Los usuarios deben poder verbalizar el propósito de la app y cómo usarla.
*   **Cuantitativas:** Tasa de éxito superior al 80% en completar el flujo y enviar un primer mensaje. Tiempo promedio de finalización (hasta enviar mensaje) inferior a 4 minutos.

## 2. Seleccionar Participantes

*   **Número:** 5-8 participantes.
*   **Perfil:** Usuarios de smartphones (principiante a intermedio) que usen apps de mensajería a diario.

## 3. Diseñar Escenarios y Tareas

**Escenario General:**
"Imagina que un amigo te recomendó BitChat, una nueva app de mensajería que funciona sin internet. Acabas de descargarla. Ahora, ábrela por primera vez y completa todos los pasos para dejarla lista, encontrar a tu amigo y enviarle un saludo."

## 4. Preparar Guion del Moderador (Guion Completo)

**1. Introducción y Calentamiento (5 min)**
*   Presentación, agradecimiento y explicación del propósito (probar la app, no al usuario).
*   Instrucción clave: **"Piensa en voz alta"**.
*   Solicitud de consentimiento para grabar la sesión.

**2. Preguntas de Contexto (5 min)**
*   "¿Qué apps de mensajería usas normalmente?"
*   "Cuando instalas una app nueva y te pide permisos, ¿qué sueles hacer?"

**3. Tareas Guiadas y Sondeo (20-25 min)**
*   (Presentar escenario) "Muy bien, ahora te pido que imagines el escenario que te comenté. Abre la app y comienza el proceso."

    *   **Tarea 1: Pantalla de Bienvenida y Bluetooth**
        *   *Observar la reacción inicial a `WelcomeScreen`.*
        *   "Describe en tus palabras, ¿qué te ofrece esta aplicación?"
        *   *El usuario avanza a `BluetoothSetup`.*
        *   "La app te pide activar el Bluetooth. Según lo que lees, ¿para qué lo necesita? ¿Te parece lógico?"
        *   "¿Qué acción te sientes más inclinado a tomar aquí?"

    *   **Tarea 2: Permiso de Ubicación**
        *   *El usuario avanza a `LocationPermission`.*
        *   "Ahora pasamos a la ubicación. ¿Por qué crees que una app de mensajería necesita tu ubicación?"
        *   "Veo que hay dos opciones: 'Precisa' y 'Aproximada'. ¿Podrías explicarme con un ejemplo la diferencia entre ambas?"
        *   "Para el propósito de esta app, ¿cuál de las dos te parece más útil? ¿Y cuál te hace sentir más cómodo?"

    *   **Tarea 3: Permiso de Notificaciones**
        *   *El usuario avanza a `NotificationPermission`.*
        *   "Ahora, notificaciones. ¿Sueles permitir notificaciones en tus apps? ¿Por qué?"
        *   "Según lo que ves, ¿qué te perderías si no las activas en BitChat?"

    *   **Tarea 4: Optimización de Batería**
        *   *El usuario avanza a `BatteryOptimization`.*
        *   "Llegamos a la última pantalla de configuración. Tómate un momento para leerla. ¿Qué es lo primero que te llama la atención aquí?"
        *   "Intenta explicarme en tus propias palabras, ¿cuál es el problema que la app te está diciendo que tienes en tu teléfono?"
        *   "¿Qué crees que hace cada uno de los tres botones que ves?"
        *   "Si tuvieras que elegir ahora mismo, ¿qué botón pulsarías? ¿Por qué ese y no los otros?"

    *   **Tarea 5: Explorar la Pantalla de Chat**
        *   *El usuario llega a `ChatScreen`.*
        *   "Perfecto, has terminado la configuración. Ahora estás en la pantalla principal. Echa un vistazo y descríbeme, ¿dónde crees que estás? ¿Qué es esto?"
        *   "Veo que ya hay algunos mensajes. ¿Quién crees que los ha enviado? ¿A quién le estás hablando?"
        *   "Recuerda, tu objetivo es encontrar a tu amigo. Mirando esta pantalla, ¿qué intentarías hacer para ver quién más está conectado?"
        *   "Ahora quieres enviar un saludo a todos en general. ¿Cómo lo harías?"
        *   "El campo para escribir dice 'Escribe un comando o mensaje'. ¿Qué significa 'comando' para ti en una app de chat?"
        *   "Intenta enviar el mensaje 'Hola a todos!'."

**4. Cierre y Preguntas Finales (5-10 min)**
*   "¡Genial! Hemos terminado. Muchas gracias."
*   "En una escala del 1 al 5, donde 1 es 'muy difícil' y 5 es 'muy fácil', ¿cómo de fácil te pareció configurar la app y enviar tu primer mensaje?"
*   "¿Cuál fue la parte más confusa de todo el proceso?"
*   "Si tuvieras una varita mágica y pudieras cambiar una sola cosa de la aplicación que has visto, ¿qué cambiarías?"

## 5. Analizar Resultados y Recomendar Mejoras

*   **Análisis:** Identificar patrones de confusión, clasificar hallazgos por gravedad (Críticos, Moderados, Menores).
*   **Recomendaciones:** Proponer cambios concretos para los textos, botones o flujos problemáticos, respaldados por la evidencia de las pruebas.
    *   **Ejemplo:** "4 de 5 usuarios no entendieron que estaban en un canal público. **Recomendación:** Al llegar por primera vez al chat, mostrar un mensaje del sistema que diga: '¡Bienvenido a #mesh! Este es un canal público. Usa el icono de usuarios para ver quién está cerca'."

# Mapa Visual de la Aplicación: Evi

Este documento contiene un diagrama de flujo visualmente mejorado que detalla la arquitectura de navegación completa de la aplicación. Es una representación gráfica de cómo un usuario se mueve a través de las diferentes pantallas.

**Instrucción:** Para ver el diagrama, abre este archivo en tu editor de código y utiliza la función de **"Vista Previa" (Preview)**.

## Diagrama de Flujo Profesional

```mermaid
graph TD;
    %% --- Estilos Visuales ---
    classDef welcome fill:#8E44AD,color:#fff,stroke:#000,stroke-width:2px,font-weight:bold;
    classDef permission fill:#3498DB,color:#fff,stroke:#000,stroke-width:2px,font-weight:bold;
    classDef setup fill:#16A085,color:#fff,stroke:#000,stroke-width:2px,font-weight:bold;
    classDef main fill:#2ECC71,color:#fff,stroke:#000,stroke-width:4px,font-weight:bold;
    classDef nav fill:#F39C12,color:#fff,stroke:#000,stroke-width:2px,font-weight:bold;
    classDef action fill:#E67E22,color:#fff;

    %% --- Flujo de Configuración ---
    subgraph "🚀 PASO 1: Configuración Inicial"
        direction LR
        A(<b>BIENVENIDA</b><br>WelcomeScreen) -- "Click en 'Comenzar'" --> B;
        B(<b>UBICACIÓN</b><br>fa:fa-map-marker-alt<br>LocationPermission) -- "Conceder / Denegar" --> C;
        C(<b>NOTIFICACIONES</b><br>fa:fa-bell<br>NotificationPermission) -- "Conceder / Denegar" --> D;
        D(<b>BLUETOOTH</b><br>fa:fa-bluetooth-b<br>BluetoothSetup) -- "Activar / Omitir" --> E;
        E(<b>BATERÍA</b><br>fa:fa-battery-full<br>BatteryOptimization) -- "Optimizar / Omitir" --> F;
    end

    %% --- Navegación Principal ---
    subgraph "📱 PASO 2: Uso de la Aplicación"
        F(<b>PANTALLA DE CHAT</b><br>fa:fa-comments<br>/chat);
        G(<b>CANALES CERCANOS</b><br>fa:fa-broadcast-tower<br>/channels);
        H(<b>RED DE USUARIOS</b><br>fa:fa-users<br>/network);
    end

    subgraph "🕹️ BARRA DE NAVEGACIÓN"
      F <== "Click en Ícono de Chat" ==> G;
      F <== "Click en Ícono de Chat" ==> H;
      G <== "Click en Ícono de Canales" ==> F;
      G <== "Click en Ícono de Red" ==> H;
      H <== "Click en Ícono de Red" ==> G;
      H <== "Click en Ícono de Chat" ==> F;
    end


    %% --- Aplicar Estilos ---
    class A welcome;
    class B,C permission;
    class D,E setup;
    class F main;
    class G,H nav;

```
<!-- comentario de prueba -->

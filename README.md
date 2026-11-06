# 🕌 Carta de Invitación Web - Mis 15 Años (Yaisrelis Isabella) ✨

Invitación web interactiva para los 15 años de **Yaisrelis Isabella Vázquez Hernández**, inspirada en la magia de Aladdín y Las Noches de Arabia.

## 🌟 Características
- **Lámpara Mágica Interactiva**: Los invitados deben frotar la lámpara para desbloquear la invitación, desprendiendo humo del Genio y destellos dorados con sonido y vibración háptica.
- **Música de Fondo**: Pista instrumental de Aladdín (*A Whole New World*) con reproductor flotante y barritas animadas.
- **Palacio de Agrabah**: Diseño con arco morisco, faroles dorados oscilantes y cielo estrellado dinámico.
- **Detalles del Evento**:
  - **Fecha**: Sábado, 14 de Noviembre de 2026
  - **Hora**: 9:30 PM
  - **Lugar**: *"Los Bohíos de Carlos"*
  - **Dirección**: Avenida 49B con Calle 178, Maracaibo, Zulia
- **Contador Regresivo en Vivo** y botón para agendar en Google Calendar o Apple iCal.
- **5 Botones de Acción**:
  1. ✍️ **Confirmar Asistencia (RSVP)**: Autocompletado de la lista oficial de 41 invitados con asignación de pases, sincronizado con Google Sheets.
  2. 📍 **Cómo Llegar**: Enlace directo a Google Maps y Waze.
  3. 👗 **Código de Vestimenta**: Estilo Cóctel (Área de piscina).
  4. 🎁 **Sugerencia de Regalos**: Lluvia de Sobres / Cofre de Deseos.
  5. 📜 **Manual del Invitado**: Normas de oro, puntualidad y sorpresas.
- **Conexión a Google Sheets**: Integración mediante Google Apps Script para actualizar el estado (*Confirmado* / *No asiste*), teléfono y observaciones en tiempo real.
- **Respaldo por WhatsApp**: Opción de enviar la confirmación redactada directamente al chat de los organizadores.

## 📁 Estructura del Proyecto
```
├── assets/
│   ├── audio/
│   │   └── aladdin-theme.mp3
│   └── img/
│       ├── carpet.svg
│       ├── lamp.svg
│       ├── lantern.svg
│       └── palace.svg
├── google-apps-script.js
├── INSTRUCCIONES_GOOGLE_SHEETS.md
├── index.html
├── script.js
├── style.css
└── README.md
```

## 🚀 Despliegue en GitHub Pages
Para activar la página web gratis en GitHub Pages:
1. Ve a la pestaña **Settings** de este repositorio en GitHub.
2. En el menú lateral izquierdo, haz clic en **Pages**.
3. En **Build and deployment** > **Branch**, selecciona `main` y la carpeta `/ (root)`.
4. Haz clic en **Save**. ¡En pocos segundos tu invitación estará disponible en `https://odba08.github.io/carta-aladin/`!

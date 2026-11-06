# 📜 Guía Paso a Paso: Conectar la Invitación Web con tu Google Sheet

Tu hoja de cálculo de Google Sheets:
🔗 [Abrir Hoja de Control y Registro de Asistencia Familiar](https://docs.google.com/spreadsheets/d/1d3uSHlVQtv1E1HeQTXANpKzpuDNG13Qb6c7rRu8lYZE/edit?usp=sharing)

Para que cuando los invitados confirmen su asistencia en la página web, la columna **Estado (Columna G)** cambie automáticamente a **"Confirmado"** o **"No asiste"**, y se actualicen sus números telefónicos y observaciones, sólo debes seguir estos sencillos pasos:

---

## 🚀 Paso 1: Abrir el editor de Apps Script en tu Hoja
1. Abre tu hoja en Google Sheets: [https://docs.google.com/spreadsheets/d/1d3uSHlVQtv1E1HeQTXANpKzpuDNG13Qb6c7rRu8lYZE/edit](https://docs.google.com/spreadsheets/d/1d3uSHlVQtv1E1HeQTXANpKzpuDNG13Qb6c7rRu8lYZE/edit)
2. En el menú superior de Google Sheets, haz clic en **Extensiones** > **Apps Script**.
3. Se abrirá una nueva pestaña con el editor de código.

---

## 📋 Paso 2: Pegar el Código del Script
1. En el editor de Apps Script, verás un archivo llamado `Código.gs`.
2. Borra las líneas que vengan por defecto (como `function myFunction() { ... }`).
3. Abre el archivo [`google-apps-script.js`](file:///C:/Users/oscar.bueno/.gemini/antigravity/scratch/invitacion-15-yaisrelis/google-apps-script.js), copia **TODO** su contenido y pégalo en el editor de Google.
4. Haz clic en el ícono del disquete 💾 (**Guardar proyecto**) o presiona `Ctrl + S`.

---

## 🌐 Paso 3: Implementar como Aplicación Web
1. En la esquina superior derecha, haz clic en el botón azul **Implementar** (o *Deploy*) y selecciona **Nueva implementación** (*New deployment*).
2. Haz clic en el engranaje ⚙️ al lado de "Seleccionar tipo" y elige **Aplicación web** (*Web app*).
3. Llena la ventana con esta configuración:
   - **Descripción**: `RSVP 15 Años Yaisrelis`
   - **Ejecutar como**: `Yo (tu correo de Google)`
   - **Quién tiene acceso**: `Cualquier persona` (*Anyone*)  
     *(⚠️ ¡Muy importante! Debe ser "Cualquier persona" para que tus invitados puedan enviar sus confirmaciones sin tener que iniciar sesión).*
4. Haz clic en **Implementar**.
5. Google te pedirá revisar permisos:
   - Haz clic en **Revisar permisos** (*Review permissions*).
   - Elige tu cuenta de Google.
   - Si te sale la advertencia de "Google no ha verificado esta aplicación", haz clic en **Configuración avanzada** (*Advanced*) abajo a la izquierda y luego en **Ir a RSVP 15 Años (no seguro)**.
   - Haz clic en **Permitir** (*Allow*).
6. Google te mostrará una ventana con la **URL de la aplicación web** (un enlace largo que termina en `/exec`).
7. **Copia esa URL**.

---

## 🔗 Paso 4: Vincular en la Invitación Web
1. Abre la invitación web en tu navegador (`index.html`).
2. En la esquina superior izquierda de la pantalla, haz clic en el ícono del engranaje ⚙️.
3. Pega la URL que copiaste y haz clic en **Guardar Enlace**.
4. ¡Listo! A partir de ese momento, cada vez que un invitado busque su nombre y confirme o rechace la invitación, se actualizará en tiempo real en tu hoja de Google Sheets.

---

## ✨ Estructura Automática de tu Hoja

El script respeta de forma exacta las columnas de tu hoja:
- **Columna B (Nº)**: Identificador único del invitado.
- **Columna C (Invitado / Titular)**: Nombre principal (Tulio Parra, Francis, etc.).
- **Columna D (Acompañantes / Familia)**: Integrantes del grupo familiar.
- **Columna E (Pases)**: Número de puestos asignados.
- **Columna F (Teléfono / Contacto)**: Registra el teléfono o WhatsApp que el invitado introduce.
- **Columna G (Estado)**: Se actualiza automáticamente con el chip **Confirmado** o **No asiste**, lo cual actualizará los contadores de las tarjetas de resumen en la parte superior (B3:E4).
- **Columna H (Mesa / Observaciones)**: Agrega cualquier nota, mensaje especial o dedicatoria que escriba el invitado.

---

## 💬 Respaldo Adicional por WhatsApp
La invitación cuenta además con un botón directo:  
**"Confirmar también por WhatsApp"**  
Si algún invitado prefiere avisar por WhatsApp o no tiene buena conexión a internet, puede presionar ese botón y le redactará un mensaje listo con su nombre, pases asignados y confirmación para enviártelo directamente a tu chat.

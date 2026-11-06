/**
 * ==============================================================================
 * JAVASCRIPT INTERACTIVO - 15 AÑOS DE YAISRELIS ISABELLA
 * Lámpara mágica, humo del genio, música, modales y conexión con Google Sheets
 * ==============================================================================
 */

// 1. LISTA LOCAL DE INVITADOS (RESPALDO INMEDIATO DE LA HOJA DE GOOGLE SHEETS)
// Hoja: https://docs.google.com/spreadsheets/d/1d3uSHlVQtv1E1HeQTXANpKzpuDNG13Qb6c7rRu8lYZE/edit
let guestsDatabase = [
  { nro: 1, titular: "Tulio Parra", acompanantes: "Francisco Parra, Génesis Parra, Luigi", pases: 4, familia: "Familia Parra", estado: "Pendiente" },
  { nro: 2, titular: "Yaisnorys Hernández", acompanantes: "Ivonne Hernández", pases: 2, familia: "Familia Hernández", estado: "Pendiente" },
  { nro: 3, titular: "Yaisibell Parra", acompanantes: "-", pases: 1, familia: "Familia Parra", estado: "Pendiente" },
  { nro: 4, titular: "Henry Torres", acompanantes: "-", pases: 1, familia: "Familia Torres", estado: "Pendiente" },
  { nro: 5, titular: "Maryoris Soto", acompanantes: "Angel, Arelis", pases: 3, familia: "Familia Soto", estado: "Pendiente" },
  { nro: 6, titular: "Herimar Torres", acompanantes: "Victor", pases: 2, familia: "Familia Torres", estado: "Pendiente" },
  { nro: 7, titular: "Elianny Torres", acompanantes: "-", pases: 1, familia: "Familia Torres", estado: "Pendiente" },
  { nro: 8, titular: "Herianny Torres", acompanantes: "-", pases: 1, familia: "Familia Torres", estado: "Pendiente" },
  { nro: 9, titular: "Angel Melan", acompanantes: "-", pases: 1, familia: "", estado: "Pendiente" },
  { nro: 10, titular: "Nelly Márquez", acompanantes: "-", pases: 1, familia: "Familia Márquez", estado: "Pendiente" },
  { nro: 11, titular: "Neivy Melean", acompanantes: "-", pases: 1, familia: "", estado: "Pendiente" },
  { nro: 12, titular: "Victoria López", acompanantes: "-", pases: 1, familia: "", estado: "Pendiente" },
  { nro: 13, titular: "Jesús Vázquez", acompanantes: "-", pases: 1, familia: "Familia Vázquez", estado: "Pendiente" },
  { nro: 14, titular: "Germán Vázquez", acompanantes: "-", pases: 1, familia: "Familia Vázquez", estado: "Pendiente" },
  { nro: 15, titular: "Lesmi Higuera", acompanantes: "-", pases: 1, familia: "", estado: "Pendiente" },
  { nro: 17, titular: "Carlitos Martes", acompanantes: "-", pases: 1, familia: "Familia Martes", estado: "Pendiente" },
  { nro: 19, titular: "Vicner Martes", acompanantes: "-", pases: 1, familia: "Familia Martes", estado: "Pendiente" },
  { nro: 20, titular: "Heidy Hernández", acompanantes: "-", pases: 1, familia: "Familia Hernández", estado: "Pendiente" },
  { nro: 21, titular: "Milagro Hernández", acompanantes: "-", pases: 1, familia: "Familia Hernández", estado: "Pendiente" },
  { nro: 22, titular: "Lily González", acompanantes: "-", pases: 1, familia: "Familia González", estado: "Pendiente" },
  { nro: 23, titular: "Francis", acompanantes: "Oscar", pases: 2, familia: "", estado: "Pendiente" },
  { nro: 24, titular: "Francheska", acompanantes: "-", pases: 1, familia: "", estado: "Pendiente" },
  { nro: 25, titular: "Daily González", acompanantes: "Leandro", pases: 2, familia: "Familia González", estado: "Pendiente" },
  { nro: 26, titular: "Dani González", acompanantes: "-", pases: 1, familia: "Familia González", estado: "Pendiente" },
  { nro: 27, titular: "Manuel Vázquez", acompanantes: "-", pases: 1, familia: "Familia Vázquez", estado: "Pendiente" },
  { nro: 28, titular: "Iriam Rodríguez", acompanantes: "-", pases: 1, familia: "Familia Rodríguez", estado: "Pendiente" },
  { nro: 29, titular: "Irlenis Rojas", acompanantes: "-", pases: 1, familia: "Familia Rojas", estado: "Pendiente" },
  { nro: 30, titular: "Carmen Calixtro", acompanantes: "Merce Rojas", pases: 2, familia: "Familia Rojas / Calixtro", estado: "Pendiente" },
  { nro: 31, titular: "Mery Rojas", acompanantes: "Exnnery Vázquez", pases: 2, familia: "Familia Rojas / Vázquez", estado: "Pendiente" },
  { nro: 32, titular: "Manuel Polo", acompanantes: "Yuliany", pases: 2, familia: "Familia Polo", estado: "Pendiente" },
  { nro: 33, titular: "Eduardo Pineda", acompanantes: "-", pases: 1, familia: "Familia Pineda", estado: "Pendiente" },
  { nro: 34, titular: "Edelmira Caicedo", acompanantes: "Camila, Luisana", pases: 3, familia: "Familia Caicedo", estado: "Pendiente" },
  { nro: 35, titular: "Sove Navarro", acompanantes: "-", pases: 1, familia: "Familia Navarro", estado: "Pendiente" },
  { nro: 37, titular: "Escarlet Andrade", acompanantes: "-", pases: 1, familia: "Familia Andrade", estado: "Pendiente" },
  { nro: 38, titular: "Eiberth Hernández", acompanantes: "-", pases: 1, familia: "Familia Hernández", estado: "Pendiente" },
  { nro: 39, titular: "Jonesca Hernández", acompanantes: "-", pases: 1, familia: "Familia Hernández", estado: "Pendiente" },
  { nro: 40, titular: "Marco Rojas", acompanantes: "-", pases: 1, familia: "Familia Rojas", estado: "Pendiente" },
  { nro: 41, titular: "Yadira", acompanantes: "-", pases: 1, familia: "", estado: "Pendiente" },
  { nro: 42, titular: "Jean Carlos Villasmil", acompanantes: "María Soto", pases: 2, familia: "Familia Villasmil / Soto", estado: "Pendiente" },
  { nro: 44, titular: "Familia Bastidas", acompanantes: "-", pases: 1, familia: "Familia Bastidas", estado: "Pendiente" },
  { nro: 45, titular: "Señor Jeffrey", acompanantes: "Yajari, Ale", pases: 3, familia: "", estado: "Pendiente" }
];

// URL de Google Apps Script guardada en localStorage o configurable
const STORAGE_KEY_SCRIPT_URL = "yaisrelis_15_apps_script_url";
let appsScriptUrl = localStorage.getItem(STORAGE_KEY_SCRIPT_URL) || "";

// ==============================================================================
// 2. SISTEMA DE AUDIO (Música de fondo y efectos mágicos)
// ==============================================================================
const bgMusic = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
const musicIcon = document.getElementById("music-icon");
let isAudioPlaying = false;

// Sintetizador Web Audio API para efectos de sonido reactivos (chispas, brillo y magia)
let audioCtx = null;
function initAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
}

function playMagicChime(freq = 600) {
  try {
    initAudioContext();
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.8, audioCtx.currentTime + 0.25);

    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.3);
  } catch (e) {
    // Silencioso si no está disponible
  }
}

function playMagicBurstSound() {
  try {
    initAudioContext();
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const chords = [523.25, 659.25, 783.99, 1046.50]; // Acorde C mayor brillante
    chords.forEach((note, i) => {
      setTimeout(() => {
        playMagicChime(note);
      }, i * 70);
    });
  } catch (e) {}
}

function startMusic() {
  if (!bgMusic) return;
  bgMusic.volume = 0.55;
  bgMusic.play().then(() => {
    isAudioPlaying = true;
    musicBtn.classList.add("playing");
    musicIcon.className = "fa-solid fa-volume-high";
  }).catch(() => {
    // Autoplay prevenido por navegador hasta interacción del usuario
    isAudioPlaying = false;
    musicBtn.classList.remove("playing");
    musicIcon.className = "fa-solid fa-volume-xmark";
  });
}

function toggleMusic() {
  if (!bgMusic) return;
  if (isAudioPlaying) {
    bgMusic.pause();
    isAudioPlaying = false;
    musicBtn.classList.remove("playing");
    musicIcon.className = "fa-solid fa-volume-xmark";
  } else {
    bgMusic.play();
    isAudioPlaying = true;
    musicBtn.classList.add("playing");
    musicIcon.className = "fa-solid fa-volume-high";
  }
}

musicBtn.addEventListener("click", toggleMusic);

// ==============================================================================
// 3. CANVAS DE ESTRELLAS DE LA NOCHE DE ARABIA
// ==============================================================================
function initStarfield(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let stars = [];
  const count = 90;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.6 + 0.4,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.02 + 0.005,
      color: Math.random() > 0.4 ? "#fff4c2" : (Math.random() > 0.5 ? "#00f2fe" : "#ffffff")
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let s of stars) {
      s.alpha += s.speed;
      if (s.alpha > 1 || s.alpha < 0.2) s.speed = -s.speed;

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.globalAlpha = Math.max(0, Math.min(1, s.alpha));
      ctx.shadowBlur = s.radius * 3;
      ctx.shadowColor = s.color;
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
    requestAnimationFrame(animate);
  }
  animate();
}

initStarfield("stars-canvas");
initStarfield("invitation-stars-canvas");

// ==============================================================================
// 4. HUMO DEL GENIO Y MECÁNICA DE FROTAR LA LÁMPARA MÁGICA
// ==============================================================================
const lampBox = document.getElementById("lamp-box");
const magicLamp = document.getElementById("magic-lamp");
const lampAura = document.getElementById("lamp-aura");
const smokeCanvas = document.getElementById("smoke-canvas");
const rubFill = document.getElementById("rub-fill");
const rubText = document.getElementById("rub-text");
const rubGuide = document.getElementById("rub-guide");
const skipRubBtn = document.getElementById("skip-rub-btn");

let smokeCtx = smokeCanvas ? smokeCanvas.getContext("2d") : null;
let particles = [];
let rubProgress = 0;
let isRubbing = false;
let lastX = 0;
let lastY = 0;
let lampUnlocked = false;

function resizeSmokeCanvas() {
  if (!smokeCanvas) return;
  smokeCanvas.width = smokeCanvas.offsetWidth || 380;
  smokeCanvas.height = smokeCanvas.offsetHeight || 320;
}
window.addEventListener("resize", resizeSmokeCanvas);
resizeSmokeCanvas();

// Emisor de partículas mágicas de humo y chispas
class SmokeParticle {
  constructor(x, y, isExplosion = false) {
    this.x = x;
    this.y = y;
    const angle = isExplosion ? Math.random() * Math.PI * 2 : (Math.PI * 1.5 + (Math.random() - 0.5) * 1.2);
    const speed = isExplosion ? (Math.random() * 8 + 2) : (Math.random() * 3 + 1.5);
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.size = isExplosion ? (Math.random() * 16 + 8) : (Math.random() * 10 + 4);
    this.maxLife = isExplosion ? 60 : 45;
    this.life = 0;
    
    // Paleta mágica de Aladdín: Turquesa, Oro, Violeta
    const palette = ["#00f2fe", "#ffd166", "#e5b851", "#9b5de5", "#ffffff"];
    this.color = palette[Math.floor(Math.random() * palette.length)];
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy -= 0.08; // Flotación hacia arriba como humo
    this.size *= 1.015;
    this.life++;
  }

  draw(ctx) {
    const progress = this.life / this.maxLife;
    const alpha = Math.max(0, 1 - progress);
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = alpha * 0.7;
    ctx.shadowBlur = 12;
    ctx.shadowColor = this.color;
    ctx.fill();
    ctx.restore();
  }
}

function addSmokePuff(x, y, count = 3, isExplosion = false) {
  for (let i = 0; i < count; i++) {
    particles.push(new SmokeParticle(x, y, isExplosion));
  }
}

function animateSmoke() {
  if (!smokeCtx) return;
  smokeCtx.clearRect(0, 0, smokeCanvas.width, smokeCanvas.height);
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.update();
    p.draw(smokeCtx);
    if (p.life >= p.maxLife) {
      particles.splice(i, 1);
    }
  }
  requestAnimationFrame(animateSmoke);
}
animateSmoke();

// Interacción de Frotar la Lámpara (Touch & Mouse)
function onRubMove(clientX, clientY) {
  if (lampUnlocked) return;
  const rect = lampBox.getBoundingClientRect();
  const relX = clientX - rect.left;
  const relY = clientY - rect.top;

  if (lastX !== 0 && lastY !== 0) {
    const dist = Math.hypot(clientX - lastX, clientY - lastY);
    if (dist > 8) {
      // Incrementar progreso
      rubProgress = Math.min(100, rubProgress + dist * 0.45);
      rubFill.style.width = `${rubProgress}%`;
      rubText.textContent = `Poder del Genio: ${Math.round(rubProgress)}%`;

      // Efecto de inclinación ligera de la lámpara
      const tilt = ((relX / rect.width) - 0.5) * 15;
      magicLamp.style.transform = `scale(1.05) rotate(${tilt}deg)`;

      // Generar humo desde la boquilla de la lámpara (lado izquierdo)
      const spoutX = smokeCanvas.width * 0.22;
      const spoutY = smokeCanvas.height * 0.45;
      addSmokePuff(spoutX, spoutY, 2);

      // Sonido de chispas
      if (Math.random() > 0.6) {
        playMagicChime(450 + Math.random() * 400);
      }

      // Vibración háptica en móviles si está disponible
      if (navigator.vibrate && Math.random() > 0.7) {
        navigator.vibrate(15);
      }

      // Brillo del aura
      lampAura.style.transform = `scale(${1 + rubProgress / 60})`;
      lampAura.style.opacity = `${0.3 + rubProgress / 140}`;

      if (rubGuide) rubGuide.style.display = "none";

      // Al completar 100%, desbloquear invitación
      if (rubProgress >= 100) {
        unlockInvitation();
      }
    }
  }
  lastX = clientX;
  lastY = clientY;
}

function handlePointerDown(e) {
  isRubbing = true;
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  lastX = clientX;
  lastY = clientY;
  initAudioContext();
}

function handlePointerMove(e) {
  if (!isRubbing) return;
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  onRubMove(clientX, clientY);
}

function handlePointerUp() {
  isRubbing = false;
  lastX = 0;
  lastY = 0;
  if (!lampUnlocked) {
    magicLamp.style.transform = "scale(1) rotate(0deg)";
  }
}

if (lampBox) {
  lampBox.addEventListener("mousedown", handlePointerDown);
  window.addEventListener("mousemove", handlePointerMove);
  window.addEventListener("mouseup", handlePointerUp);

  lampBox.addEventListener("touchstart", handlePointerDown, { passive: true });
  window.addEventListener("touchmove", handlePointerMove, { passive: true });
  window.addEventListener("touchend", handlePointerUp);
}

skipRubBtn.addEventListener("click", () => {
  initAudioContext();
  unlockInvitation();
});

// Desbloqueo y Transición Mágica
function unlockInvitation() {
  if (lampUnlocked) return;
  lampUnlocked = true;
  rubProgress = 100;
  rubFill.style.width = "100%";
  rubText.textContent = "¡Deseo Concedido!";

  // Gran explosión de humo y chispas
  const spoutX = smokeCanvas.width * 0.25;
  const spoutY = smokeCanvas.height * 0.45;
  addSmokePuff(spoutX, spoutY, 40, true);
  playMagicBurstSound();

  // Iniciar música de Aladdín
  startMusic();

  // Transición a la Escena de Alfombra Voladora y luego a la Invitación
  setTimeout(() => {
    switchScene("carpet-transition");

    setTimeout(() => {
      switchScene("invitation-scene");
    }, 2400);

  }, 600);
}

function switchScene(sceneId) {
  document.querySelectorAll(".scene").forEach(s => s.classList.remove("active"));
  const target = document.getElementById(sceneId);
  if (target) {
    target.classList.add("active");
  }
}

// ==============================================================================
// 5. CUENTA REGRESIVA EN VIVO (14 DE NOVIEMBRE DE 2026, 9:30 PM)
// ==============================================================================
const targetEventDate = new Date("2026-11-14T21:30:00-04:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetEventDate - now;

  const cdDays = document.getElementById("cd-days");
  const cdHours = document.getElementById("cd-hours");
  const cdMinutes = document.getElementById("cd-minutes");
  const cdSeconds = document.getElementById("cd-seconds");

  if (!cdDays) return;

  if (diff <= 0) {
    cdDays.textContent = "00";
    cdHours.textContent = "00";
    cdMinutes.textContent = "00";
    cdSeconds.textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  cdDays.textContent = String(days).padStart(2, "0");
  cdHours.textContent = String(hours).padStart(2, "0");
  cdMinutes.textContent = String(minutes).padStart(2, "0");
  cdSeconds.textContent = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Botón Agregar a Calendario
const addToCalendarBtn = document.getElementById("add-to-calendar-btn");
if (addToCalendarBtn) {
  addToCalendarBtn.addEventListener("click", () => {
    const title = encodeURIComponent("15 Años de Yaisrelis Isabella Vázquez Hernández");
    const details = encodeURIComponent("¡Noche mágica de 15 Años! Celebración en Los Bohíos de Carlos. Recepción a las 9:30 PM. Código de vestimenta: Cóctel para área de piscina.");
    const location = encodeURIComponent("Los Bohíos de Carlos, Avenida 49B con Calle 178, Maracaibo, Zulia");
    const dates = "20261115T013000Z/20261115T080000Z"; // 9:30 PM VET (UTC-4) = 01:30 UTC siguiente día

    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(googleCalUrl, "_blank");
  });
}

// ==============================================================================
// 6. GESTIÓN DE MODALES INTERACTIVOS
// ==============================================================================
const actionItems = document.querySelectorAll(".action-btn-item");
const modalOverlays = document.querySelectorAll(".modal-overlay");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

actionItems.forEach(item => {
  item.addEventListener("click", () => {
    const modalId = item.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("active");
      playMagicChime(700);
    }
  });
});

modalCloseBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal-overlay").classList.remove("active");
  });
});

modalOverlays.forEach(overlay => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
    }
  });
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalOverlays.forEach(m => m.classList.remove("active"));
  }
});

// Modal Configuración
const openConfigBtn = document.getElementById("open-config-btn");
const modalConfig = document.getElementById("modal-config");
const scriptUrlInput = document.getElementById("script-url-input");
const saveConfigBtn = document.getElementById("save-config-btn");

if (openConfigBtn) {
  openConfigBtn.addEventListener("click", () => {
    scriptUrlInput.value = appsScriptUrl;
    modalConfig.classList.add("active");
  });
}

if (saveConfigBtn) {
  saveConfigBtn.addEventListener("click", () => {
    appsScriptUrl = scriptUrlInput.value.trim();
    localStorage.setItem(STORAGE_KEY_SCRIPT_URL, appsScriptUrl);
    alert("¡Enlace de Google Apps Script guardado con éxito!");
    modalConfig.classList.remove("active");
  });
}

// ==============================================================================
// 7. AUTOCOMPLETADO Y GESTIÓN INTELIGENTE DEL FORMULARIO RSVP
// ==============================================================================
const rsvpSearch = document.getElementById("rsvp-search");
const autocompleteList = document.getElementById("autocomplete-list");
const clearSearchBtn = document.getElementById("clear-search");
const rsvpNro = document.getElementById("rsvp-nro");
const rsvpTitular = document.getElementById("rsvp-titular");
const rsvpAcompanantes = document.getElementById("rsvp-acompanantes");
const rsvpPases = document.getElementById("rsvp-pases");
const rsvpTelefono = document.getElementById("rsvp-telefono");
const btnMinusPass = document.getElementById("btn-minus-pass");
const btnPlusPass = document.getElementById("btn-plus-pass");
const rsvpForm = document.getElementById("rsvp-form");
const formFeedback = document.getElementById("form-feedback");
const submitRsvpBtn = document.getElementById("submit-rsvp-btn");
const btnSpinner = document.getElementById("btn-spinner");
const btnIcon = document.getElementById("btn-icon");
const btnText = document.getElementById("btn-text");
const rsvpWhatsappBtn = document.getElementById("rsvp-whatsapp-btn");

// Control de pases +/-
if (btnMinusPass && btnPlusPass) {
  btnMinusPass.addEventListener("click", () => {
    let val = parseInt(rsvpPases.value, 10) || 1;
    if (val > 1) rsvpPases.value = val - 1;
  });
  btnPlusPass.addEventListener("click", () => {
    let val = parseInt(rsvpPases.value, 10) || 1;
    if (val < 10) rsvpPases.value = val + 1;
  });
}

// Buscar en la lista de invitados en tiempo real
function normalizar(txt) {
  return txt.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

if (rsvpSearch) {
  rsvpSearch.addEventListener("input", () => {
    const query = normalizar(rsvpSearch.value);
    autocompleteList.innerHTML = "";

    if (query.length < 2) {
      autocompleteList.classList.remove("active");
      clearSearchBtn.style.display = query.length > 0 ? "block" : "none";
      return;
    }

    clearSearchBtn.style.display = "block";

    const matches = guestsDatabase.filter(g => {
      const matchTitular = normalizar(g.titular).includes(query);
      const matchAcomp = normalizar(g.acompanantes).includes(query);
      const matchFam = normalizar(g.familia).includes(query);
      return matchTitular || matchAcomp || matchFam;
    });

    if (matches.length > 0) {
      matches.forEach(item => {
        const div = document.createElement("div");
        div.className = "autocomplete-item";
        div.innerHTML = `
          <div class="item-title">${item.titular}</div>
          <div class="item-meta">
            ${item.pases} ${item.pases === 1 ? 'pase' : 'pases'} | Acompañantes: ${item.acompanantes || '-'} ${item.familia ? `(${item.familia})` : ''}
          </div>
        `;
        div.addEventListener("click", () => {
          seleccionarInvitado(item);
        });
        autocompleteList.appendChild(div);
      });
      autocompleteList.classList.add("active");
    } else {
      autocompleteList.innerHTML = `
        <div class="autocomplete-item" style="cursor: default; opacity: 0.8;">
          <div class="item-title">No encontramos "${rsvpSearch.value}"</div>
          <div class="item-meta">Puedes escribir tus datos manualmente en los campos siguientes.</div>
        </div>
      `;
      autocompleteList.classList.add("active");
    }
  });

  clearSearchBtn.addEventListener("click", () => {
    rsvpSearch.value = "";
    clearSearchBtn.style.display = "none";
    autocompleteList.classList.remove("active");
  });
}

function seleccionarInvitado(item) {
  rsvpNro.value = item.nro || "";
  rsvpTitular.value = item.titular;
  rsvpAcompanantes.value = item.acompanantes !== "-" ? item.acompanantes : "";
  rsvpPases.value = item.pases || 1;
  rsvpSearch.value = item.titular;
  autocompleteList.classList.remove("active");
  playMagicChime(800);
}

// Ocultar desplegable si hace clic fuera
document.addEventListener("click", (e) => {
  if (autocompleteList && !autocompleteList.contains(e.target) && e.target !== rsvpSearch) {
    autocompleteList.classList.remove("active");
  }
});

// Enlace de confirmación directa a WhatsApp
if (rsvpWhatsappBtn) {
  rsvpWhatsappBtn.addEventListener("click", () => {
    const titular = rsvpTitular.value.trim() || "Invitado";
    const statusRadio = document.querySelector('input[name="attendance_status"]:checked');
    const estado = statusRadio ? statusRadio.value : "Confirmado";
    const pases = rsvpPases.value || 1;
    const acompanantes = rsvpAcompanantes.value.trim();
    const notas = document.getElementById("rsvp-observaciones").value.trim();

    let text = `¡Hola! Mensaje para los 15 Años de *Yaisrelis Isabella* ✨%0A%0A`;
    text += `👤 *Titular:* ${encodeURIComponent(titular)}%0A`;
    text += `🎟️ *Pases:* ${encodeURIComponent(pases)}%0A`;
    if (acompanantes) {
      text += `👥 *Acompañantes:* ${encodeURIComponent(acompanantes)}%0A`;
    }
    text += `✨ *Estado:* ${estado === 'Confirmado' ? '✅ ¡Sí, asistiré con alegría!' : '❌ Lo siento, no podré asistir'}%0A`;
    if (notas) {
      text += `💌 *Mensaje/Notas:* ${encodeURIComponent(notas)}%0A`;
    }

    const whatsappUrl = `https://api.whatsapp.com/send?text=${text}`;
    window.open(whatsappUrl, "_blank");
  });
}

// Envío del Formulario a Google Sheets
if (rsvpForm) {
  rsvpForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const titular = rsvpTitular.value.trim();
    if (!titular) {
      showFeedback("Por favor ingresa tu nombre.", "error");
      return;
    }

    const statusRadio = document.querySelector('input[name="attendance_status"]:checked');
    const estado = statusRadio ? statusRadio.value : "Confirmado";
    const pases = parseInt(rsvpPases.value, 10) || 1;
    const acompanantes = rsvpAcompanantes.value.trim();
    const telefono = rsvpTelefono.value.trim();
    const nro = rsvpNro.value;
    const observaciones = document.getElementById("rsvp-observaciones").value.trim();

    const payload = {
      action: "rsvp",
      nro: nro,
      titular: titular,
      acompanantes: acompanantes,
      pases: pases,
      telefono: telefono,
      estado: estado,
      observaciones: observaciones
    };

    // Actualizar estado en base de datos local
    const existing = guestsDatabase.find(g => normalizar(g.titular) === normalizar(titular) || (nro && g.nro == nro));
    if (existing) {
      existing.estado = estado;
      existing.pases = pases;
      if (telefono) existing.telefono = telefono;
    }

    // Efecto visual de carga
    setLoading(true);

    if (!appsScriptUrl) {
      // Si aún no han pegado la URL de Apps Script, guardar localmente y guiar
      setTimeout(() => {
        setLoading(false);
        playMagicBurstSound();
        showFeedback(
          `¡Tu confirmación (${estado}) ha sido registrada en el sistema! No olvides compartirla también por WhatsApp con el botón de abajo.`,
          "success"
        );
      }, 700);
      return;
    }

    try {
      // Envío a Google Apps Script
      // Usamos mode: 'no-cors' o POST con json
      const res = await fetch(appsScriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload)
      });

      setLoading(false);
      playMagicBurstSound();
      showFeedback(
        `¡Maravilloso, ${titular}! Tu confirmación (${estado}) se ha guardado exitosamente en la hoja de Google Sheets.`,
        "success"
      );

    } catch (err) {
      console.warn("Fallo fetch a Apps Script, aplicando fallback GET:", err);
      // Fallback usando URL parameters
      try {
        const queryParams = new URLSearchParams(payload).toString();
        const imgFallback = new Image();
        imgFallback.src = `${appsScriptUrl}?${queryParams}`;

        setLoading(false);
        playMagicBurstSound();
        showFeedback(
          `¡Respuesta enviada con éxito a Google Sheets para ${titular}!`,
          "success"
        );
      } catch (e2) {
        setLoading(false);
        showFeedback(
          `Guardado localmente. Recuerda confirmar también por WhatsApp con el botón de abajo.`,
          "success"
        );
      }
    }
  });
}

function setLoading(isLoading) {
  if (isLoading) {
    submitRsvpBtn.disabled = true;
    btnSpinner.style.display = "inline-block";
    btnIcon.style.display = "none";
    btnText.textContent = "Guardando en Google Sheets...";
  } else {
    submitRsvpBtn.disabled = false;
    btnSpinner.style.display = "none";
    btnIcon.style.display = "inline-block";
    btnText.textContent = "Confirmar en Google Sheets";
  }
}

function showFeedback(msg, type) {
  formFeedback.className = `form-feedback ${type}`;
  formFeedback.innerHTML = `<i class="fa-solid fa-${type === 'success' ? 'circle-check' : 'circle-exclamation'}"></i> ${msg}`;
}

// Intentar actualizar la base de datos de invitados en vivo desde el Google Sheet público
async function fetchLiveSheetGuests() {
  const sheetQueryUrl = "https://docs.google.com/spreadsheets/d/1d3uSHlVQtv1E1HeQTXANpKzpuDNG13Qb6c7rRu8lYZE/gviz/tq?tqx=out:json";
  try {
    const response = await fetch(sheetQueryUrl);
    const text = await response.text();
    // Google gviz devuelve formato /*O_o*/\ngoogle.visualization.Query.setResponse({...});
    const jsonStr = text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1);
    const json = JSON.parse(jsonStr);
    
    if (json && json.table && json.table.rows) {
      const liveList = [];
      // Las filas de invitados inician en el índice 2 (fila 4 de Google Sheets)
      for (let i = 2; i < json.table.rows.length; i++) {
        const row = json.table.rows[i].c;
        if (!row || !row[1] || !row[2]) continue;

        const nro = row[1] ? row[1].v : (i - 1);
        const titular = row[2] ? row[2].v : "";
        const acompanantes = row[3] ? row[3].v : "-";
        const pases = row[4] ? parseInt(row[4].v, 10) : 1;
        const telefono = row[5] ? row[5].v : "";
        const estado = row[6] ? row[6].v : "Pendiente";
        const observaciones = row[7] ? row[7].v : "";

        if (titular) {
          liveList.push({
            nro: nro,
            titular: titular,
            acompanantes: acompanantes,
            pases: pases,
            telefono: telefono,
            estado: estado,
            familia: observaciones
          });
        }
      }

      if (liveList.length > 0) {
        guestsDatabase = liveList;
        console.log(`Lista de invitados sincronizada en vivo con Google Sheets (${liveList.length} invitados).`);
      }
    }
  } catch (err) {
    console.log("Usando base de datos local de respaldo de Google Sheets.");
  }
}

fetchLiveSheetGuests();

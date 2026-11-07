/**
 * ==============================================================================
 * JAVASCRIPT INTERACTIVO - 15 AÑOS DE YAISRELIS ISABELLA
 * Lámpara mágica, humo del genio, música, modales y confirmación por WhatsApp
 * ==============================================================================
 */

// Teléfono oficial de confirmaciones por WhatsApp
const WHATSAPP_PHONE = "584246159401";

// 1. LISTA DE INVITADOS PARA AUTOCOMPLETADO
const guestsDatabase = [
  { nro: 1, titular: "Tulio Parra", acompanantes: "Francisco Parra, Génesis Parra, Luigi", pases: 4, familia: "Familia Parra" },
  { nro: 2, titular: "Yaisnorys Hernández", acompanantes: "Ivonne Hernández", pases: 2, familia: "Familia Hernández" },
  { nro: 3, titular: "Yaisibell Parra", acompanantes: "-", pases: 1, familia: "Familia Parra" },
  { nro: 4, titular: "Henry Torres", acompanantes: "-", pases: 1, familia: "Familia Torres" },
  { nro: 5, titular: "Maryoris Soto", acompanantes: "Angel, Arelis", pases: 3, familia: "Familia Soto" },
  { nro: 6, titular: "Herimar Torres", acompanantes: "Victor", pases: 2, familia: "Familia Torres" },
  { nro: 7, titular: "Elianny Torres", acompanantes: "-", pases: 1, familia: "Familia Torres" },
  { nro: 8, titular: "Herianny Torres", acompanantes: "-", pases: 1, familia: "Familia Torres" },
  { nro: 9, titular: "Angel Melan", acompanantes: "-", pases: 1, familia: "" },
  { nro: 10, titular: "Nelly Márquez", acompanantes: "-", pases: 1, familia: "Familia Márquez" },
  { nro: 11, titular: "Neivy Melean", acompanantes: "-", pases: 1, familia: "" },
  { nro: 12, titular: "Victoria López", acompanantes: "-", pases: 1, familia: "" },
  { nro: 13, titular: "Jesús Vázquez", acompanantes: "-", pases: 1, familia: "Familia Vázquez" },
  { nro: 14, titular: "Germán Vázquez", acompanantes: "-", pases: 1, familia: "Familia Vázquez" },
  { nro: 15, titular: "Lesmi Higuera", acompanantes: "-", pases: 1, familia: "" },
  { nro: 17, titular: "Carlitos Martes", acompanantes: "-", pases: 1, familia: "Familia Martes" },
  { nro: 19, titular: "Vicner Martes", acompanantes: "-", pases: 1, familia: "Familia Martes" },
  { nro: 20, titular: "Heidy Hernández", acompanantes: "-", pases: 1, familia: "Familia Hernández" },
  { nro: 21, titular: "Milagro Hernández", acompanantes: "-", pases: 1, familia: "Familia Hernández" },
  { nro: 22, titular: "Lily González", acompanantes: "-", pases: 1, familia: "Familia González" },
  { nro: 23, titular: "Francis", acompanantes: "Oscar", pases: 2, familia: "" },
  { nro: 24, titular: "Francheska", acompanantes: "-", pases: 1, familia: "" },
  { nro: 25, titular: "Daily González", acompanantes: "Leandro", pases: 2, familia: "Familia González" },
  { nro: 26, titular: "Dani González", acompanantes: "-", pases: 1, familia: "Familia González" },
  { nro: 27, titular: "Manuel Vázquez", acompanantes: "-", pases: 1, familia: "Familia Vázquez" },
  { nro: 28, titular: "Iriam Rodríguez", acompanantes: "-", pases: 1, familia: "Familia Rodríguez" },
  { nro: 29, titular: "Irlenis Rojas", acompanantes: "-", pases: 1, familia: "Familia Rojas" },
  { nro: 30, titular: "Carmen Calixtro", acompanantes: "Merce Rojas", pases: 2, familia: "Familia Rojas / Calixtro" },
  { nro: 31, titular: "Mery Rojas", acompanantes: "Exnnery Vázquez", pases: 2, familia: "Familia Rojas / Vázquez" },
  { nro: 32, titular: "Manuel Polo", acompanantes: "Yuliany", pases: 2, familia: "Familia Polo" },
  { nro: 33, titular: "Eduardo Pineda", acompanantes: "Rosa Rincón", pases: 2, familia: "Familia Pineda / Rincón" },
  { nro: 34, titular: "Edelmira Caicedo", acompanantes: "Camila, Luisana", pases: 3, familia: "Familia Caicedo" },
  { nro: 35, titular: "Sove Navarro", acompanantes: "-", pases: 1, familia: "Familia Navarro" },
  { nro: 37, titular: "Escarlet Andrade", acompanantes: "-", pases: 1, familia: "Familia Andrade" },
  { nro: 38, titular: "Eiberth Hernández", acompanantes: "-", pases: 1, familia: "Familia Hernández" },
  { nro: 39, titular: "Jonesca Hernández", acompanantes: "-", pases: 1, familia: "Familia Hernández" },
  { nro: 40, titular: "Marco Rojas", acompanantes: "-", pases: 1, familia: "Familia Rojas" },
  { nro: 41, titular: "Yadira", acompanantes: "-", pases: 1, familia: "" },
  { nro: 42, titular: "Jean Carlos Villasmil", acompanantes: "María Soto", pases: 2, familia: "Familia Villasmil / Soto" },
  { nro: 44, titular: "Familia Bastidas", acompanantes: "-", pases: 1, familia: "Familia Bastidas" },
  { nro: 45, titular: "Señor Jeffrey", acompanantes: "Yajari, Ale", pases: 3, familia: "" },
  // FAMILIA ANDRADE, VÁZQUEZ Y RINCÓN
  { nro: 66, titular: "Rosa Rincón", acompanantes: "Eduardo Pineda", pases: 2, familia: "Familia Rincón / Pineda" },
  { nro: 67, titular: "Zara Andrade", acompanantes: "-", pases: 1, familia: "Familia Andrade" },
  { nro: 68, titular: "Jesús Andrade", acompanantes: "-", pases: 1, familia: "Familia Andrade" },
  { nro: 69, titular: "Juan Andrade", acompanantes: "-", pases: 1, familia: "Familia Andrade" },
  { nro: 70, titular: "Rossymar Vázquez", acompanantes: "-", pases: 1, familia: "Familia Vázquez" },
  { nro: 71, titular: "Robert Vázquez", acompanantes: "-", pases: 1, familia: "Familia Vázquez" },
  // AMIGOS DE LA QUINCEAÑERA
  { nro: 46, titular: "Beatriz Rojas", acompanantes: "-", pases: 1, familia: "Amigos" },
  { nro: 47, titular: "Isabel Díaz", acompanantes: "-", pases: 1, familia: "Amigos" },
  { nro: 48, titular: "Paula Moreno", acompanantes: "-", pases: 1, familia: "Amigos" },
  { nro: 49, titular: "Johana Moyeda", acompanantes: "-", pases: 1, familia: "Amigos" },
  { nro: 50, titular: "Elvis Meléndez", acompanantes: "Honorimar Gómez", pases: 2, familia: "Amigos" },
  { nro: 51, titular: "Jair Conde", acompanantes: "-", pases: 1, familia: "Amigos" },
  { nro: 52, titular: "Santiago Maldonado", acompanantes: "-", pases: 1, familia: "Amigos" },
  { nro: 53, titular: "Abraham Zapata", acompanantes: "Marisol", pases: 2, familia: "Amigos" },
  { nro: 54, titular: "Emiliano Pérez", acompanantes: "-", pases: 1, familia: "Amigos" },
  { nro: 55, titular: "Marbelis Más y Rubí", acompanantes: "-", pases: 1, familia: "Amigos" },
  { nro: 56, titular: "Luis López", acompanantes: "Andrea Briceño", pases: 2, familia: "Amigos" },
  { nro: 57, titular: "Elizabeth López", acompanantes: "-", pases: 1, familia: "Amigos" },
  { nro: 58, titular: "Melida Acosta", acompanantes: "-", pases: 1, familia: "Amigos" },
  { nro: 59, titular: "Alexandra", acompanantes: "-", pases: 1, familia: "Amigos" },
  { nro: 60, titular: "Yermis Ferrebus", acompanantes: "-", pases: 1, familia: "Amigos" },
  { nro: 61, titular: "Sofía Matheus", acompanantes: "-", pases: 1, familia: "Amigos" },
  { nro: 62, titular: "Rusma", acompanantes: "Arpidio", pases: 2, familia: "Amigos" },
  { nro: 63, titular: "Aranza Zabala", acompanantes: "-", pases: 1, familia: "Amigos" },
  { nro: 64, titular: "Señora Ana Pereira", acompanantes: "-", pases: 1, familia: "Amigos" },
  { nro: 65, titular: "Gabriel Hernández", acompanantes: "-", pases: 1, familia: "Amigos" },
  { nro: 72, titular: "Yohendry Duno", acompanantes: "-", pases: 1, familia: "Amigos" },
  { nro: 73, titular: "Fernando Ríos", acompanantes: "-", pases: 1, familia: "Amigos" },
  { nro: 74, titular: "Daniel Antúnez", acompanantes: "-", pases: 1, familia: "Amigos" },
  { nro: 75, titular: "Mariangela", acompanantes: "Danni", pases: 2, familia: "Amigos" },
  { nro: 76, titular: "Danni", acompanantes: "Mariangela", pases: 2, familia: "Amigos" },
  { nro: 77, titular: "Ronelida Pineda", acompanantes: "-", pases: 1, familia: "Amigos" }
];

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
  } catch (e) {}
}

function playMagicBurstSound() {
  try {
    initAudioContext();
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const chords = [523.25, 659.25, 783.99, 1046.50];
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

if (musicBtn) {
  musicBtn.addEventListener("click", toggleMusic);
}

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
    this.vy -= 0.08;
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

  if (lastX !== 0 && lastY !== 0) {
    const dist = Math.hypot(clientX - lastX, clientY - lastY);
    if (dist > 8) {
      rubProgress = Math.min(100, rubProgress + dist * 0.45);
      rubFill.style.width = `${rubProgress}%`;
      rubText.textContent = `Poder del Genio: ${Math.round(rubProgress)}%`;

      const tilt = ((relX / rect.width) - 0.5) * 15;
      magicLamp.style.transform = `scale(1.05) rotate(${tilt}deg)`;

      // La boquilla está en el lado DERECHO (igual que en la foto del usuario)
      const spoutX = smokeCanvas.width * 0.78;
      const spoutY = smokeCanvas.height * 0.45;
      addSmokePuff(spoutX, spoutY, 2);

      if (Math.random() > 0.6) {
        playMagicChime(450 + Math.random() * 400);
      }

      if (navigator.vibrate && Math.random() > 0.7) {
        navigator.vibrate(15);
      }

      lampAura.style.transform = `scale(${1 + rubProgress / 60})`;
      lampAura.style.opacity = `${0.3 + rubProgress / 140}`;

      if (rubGuide) rubGuide.style.display = "none";

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

if (skipRubBtn) {
  skipRubBtn.addEventListener("click", () => {
    initAudioContext();
    unlockInvitation();
  });
}

function unlockInvitation() {
  if (lampUnlocked) return;
  lampUnlocked = true;
  rubProgress = 100;
  rubFill.style.width = "100%";
  rubText.textContent = "¡Deseo Concedido!";

  // Explosión mágica de humo desde la boquilla derecha
  const spoutX = smokeCanvas.width * 0.78;
  const spoutY = smokeCanvas.height * 0.45;
  addSmokePuff(spoutX, spoutY, 40, true);
  playMagicBurstSound();

  startMusic();

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
    const details = encodeURIComponent("¡Noche mágica de 15 Años! Celebración en Los Bohíos de Carlos. Recepción a las 9:30 PM. Código de vestimenta: Tipo Cóctel.");
    const location = encodeURIComponent("Los Bohíos de Carlos, Avenida 49B con Calle 178, Maracaibo, Zulia");
    const dates = "20261115T013000Z/20261115T080000Z";

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

// ==============================================================================
// 7. AUTOCOMPLETADO Y CONFIRMACIÓN POR WHATSAPP (+58 424-6159401)
// ==============================================================================
const rsvpSearch = document.getElementById("rsvp-search");
const autocompleteList = document.getElementById("autocomplete-list");
const clearSearchBtn = document.getElementById("clear-search");
const rsvpTitular = document.getElementById("rsvp-titular");
const rsvpAcompanantes = document.getElementById("rsvp-acompanantes");
const rsvpPases = document.getElementById("rsvp-pases");
const rsvpTelefono = document.getElementById("rsvp-telefono");
const btnMinusPass = document.getElementById("btn-minus-pass");
const btnPlusPass = document.getElementById("btn-plus-pass");
const rsvpForm = document.getElementById("rsvp-form");
const formFeedback = document.getElementById("form-feedback");

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
  rsvpTitular.value = item.titular;
  rsvpAcompanantes.value = item.acompanantes !== "-" ? item.acompanantes : "";
  rsvpPases.value = item.pases || 1;
  rsvpSearch.value = item.titular;
  autocompleteList.classList.remove("active");
  playMagicChime(800);
}

document.addEventListener("click", (e) => {
  if (autocompleteList && !autocompleteList.contains(e.target) && e.target !== rsvpSearch) {
    autocompleteList.classList.remove("active");
  }
});

// Envío Directo a WhatsApp (+58 424-6159401)
if (rsvpForm) {
  rsvpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const titular = rsvpTitular.value.trim();
    if (!titular) {
      showFeedback("Por favor escribe tu nombre completo.", "error");
      return;
    }

    const statusRadio = document.querySelector('input[name="attendance_status"]:checked');
    const estado = statusRadio ? statusRadio.value : "Confirmado";
    const pases = rsvpPases.value || 1;
    const acompanantes = rsvpAcompanantes.value.trim();
    const telefono = rsvpTelefono ? rsvpTelefono.value.trim() : "";
    const notas = document.getElementById("rsvp-observaciones").value.trim();

    let text = `¡Hola! Confirmo mi asistencia para los 15 Años de *Yaisrelis Isabella* ✨\n\n`;
    text += `👤 *Titular:* ${titular}\n`;
    text += `🎟️ *Pases:* ${pases}\n`;
    if (acompanantes) {
      text += `👥 *Acompañantes:* ${acompanantes}\n`;
    }
    if (telefono) {
      text += `📱 *Contacto:* ${telefono}\n`;
    }
    text += `✨ *Estado:* ${estado === 'Confirmado' ? '✅ ¡Sí, asistiré con alegría!' : '❌ Lo siento, no podré asistir'}\n`;
    if (notas) {
      text += `💌 *Mensaje/Notas:* ${notas}\n`;
    }

    playMagicBurstSound();
    showFeedback(`¡Gracias ${titular}! Abriendo WhatsApp para enviar tu confirmación...`, "success");

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 600);
  });
}

function showFeedback(msg, type) {
  formFeedback.className = `form-feedback ${type}`;
  formFeedback.innerHTML = `<i class="fa-solid fa-${type === 'success' ? 'circle-check' : 'circle-exclamation'}"></i> ${msg}`;
}

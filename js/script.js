/* =========================================================
   PERSONALIZA AQUÍ
   Cambia los textos, el nombre, la firma, las fotos y la música.
   No hace falta tocar el resto del archivo.
   Las fotos van en la carpeta assets/ y se escriben en fotos.
   La vista previa de WhatsApp se cambia en index.html (og:title).
   ========================================================= */
const CONFIG = {
  // Su nombre. Si lo dejas vacío, la página habla de "ti".
  nombre: "Clarita",

  // Cómo firmas la carta.
  despedida: "Con cariño,",
  firma: "Angelitus",

  // Capítulo corto que aparece en la barra de arriba.
  capitulos: ["Sorpresa", "Un repaso", "Más tarde", "El deseo", "La carta"],

  fraseBienvenida: "Hoy es un día especial, y tengo una pequeña sorpresa para ti...",
  fraseBienvenida2: "Hay algo que quiero que descubras.",
  // Nota breve bajo la bienvenida. Déjala en "" si no la quieres.
  asideInicio: "Se puede tocar casi todo. El sobre incluido.",
  pieInicio: "Hecho con cariño y un poco de teatro.",
  botonAbrir: "Abrir mi sorpresa",
  textoAbriendo: "Abriendo...",

  // Lo que se lee dentro del sobre, un segundo, antes de pasar de pantalla.
  sobre: {
    asunto: "Asunto",
    titulo: "Tu cumpleaños",
    texto: "Halagos, un pastel y una carta. En ese orden."
  },

  // Frases si toca el sobre en vez del botón.
  textosSobre: [
    "Buen intento. El botón está debajo.",
    "Si lo agitas no sale el premio. Todavía.",
    "Curiosidad: 1. Sobre: 0.",
    "Ese sello es decorativo. Y un poco dramático."
  ],

  tituloCualidades: "Antes de continuar, quiero recordarte algo...",
  ayudaCualidades: "Cuatro tarjetas. Puedes volver atrás si una se te pasó.",
  botonCualidades: "Quiero descubrir más",
  botonNota: "Una nota al margen",
  botonNotaCerrar: "Ocultar nota",

  // icono: smile, spark, bolt, flower, star, sun, heart, bond, eyes
  cualidades: [
    {
      icono: "spark",
      titulo: "Tu forma de ser",
      texto: "Me encanta tu forma de ser, tan divertida, extrovertida y llena de energía. Eres de esas personas que siempre lo dan todo, ya sea en la vida, en el trabajo o en los estudios. Esa actitud tuya es algo que admiro muchísimo."
    },
    {
      icono: "bond",
      titulo: "Tu lealtad",
      texto: "Me gusta mucho lo leal que eres. Eres una persona que sabe valorar a quienes forman parte de tu vida, y eso dice muchísimo de ti. Es una de las cosas que más admiro."
    },
    {
      icono: "flower",
      titulo: "Tu manera de demostrar cariño",
      texto: "Sé que no eres de expresar fácilmente tus sentimientos con palabras, pero tienes tu propia manera de demostrarlos. Y justamente eso me gusta de ti: esos pequeños detalles y acciones que dicen mucho sin necesidad de hablar."
    },
    {
      icono: "eyes",
      titulo: "Tus ojitos y tu sonrisa",
      texto: "Y cómo no hablar de lo bonita que eres. Me encanta tu físico, pero tus ojos tienen algo especial; son dos hermosos caramelitos que me encanta mirar. Y ni hablar de tu sonrisa, que tiene una manera muy tuya de alegrarme el día."
    }
  ],

  tituloRazones: "Más tarde, juntos",
  textoRazones: "Toca cada tarjeta. Es sobre esta noche.",
  botonRazones: "Ahora, el pastel",
  // Aparece cuando ya se descubrieron las cuatro.
  // Se lo das a medianoche. Ella ya confirmó y ya conoce el lugar.
  cierreRazones: "Más tarde nos vemos. Me alegra que vengas.",
  razones: [
    {
      icono: "star",
      tono: "lav",
      titulo: "Esta noche",
      mensaje: "Esta página es la sorpresa de ahora. Más tarde seguimos tu cumpleaños juntos, como ya quedamos."
    },
    {
      icono: "sun",
      tono: "cream",
      titulo: "Ya dijiste que sí",
      mensaje: "Y me hizo ilusión. Más tarde nos vemos, tú y yo. Nada más que eso."
    },
    {
      icono: "flower",
      tono: "sage",
      titulo: "Ya sabes dónde",
      mensaje: "El lugar ya lo conoces. Espero que sea muy especial para ti."
    },
    {
      icono: "spark",
      tono: "rose",
      titulo: "Nos vemos",
      mensaje: "Arréglate con calma. Más tarde te espero ahí, contento de pasar tu cumpleaños contigo."
    }
  ],

  tituloDeseo: "Ahora sí... llegó tu momento.",
  textoDeseo: "Piensa en un deseo, uno que quieras muchísimo.",
  pistaDeseo: "Elige el tamaño. El confeti se adapta.",
  // Nota bajo el pastel. Déjala en "" para que no aparezca.
  notaPastel: "",
  botonDeseo: "Ya pedí mi deseo",
  textoApagando: "Apagando...",
  mensajeDeseo: "Espero que este nuevo año de vida te traiga muchísima felicidad, momentos inolvidables y todo eso que tanto deseas.",
  botonHaciaCarta: "Una última cosita...",
  tamanosDeseo: [
    { id: "ok", etiqueta: "Normal", nota: "Clásico. Funciona." },
    { id: "big", etiqueta: "Ambicioso", nota: "Ambicioso. Me gusta." },
    { id: "cosmic", etiqueta: "Que se entere el universo", nota: "Hecho. El confeti va a trabajar de más." }
  ],
  velas: [
    "Esa vela está en servicio. El botón de abajo hace el trabajo.",
    "El deseo no se pulsa, se piensa. Buen intento igual.",
    "Soplar con el dedo no cuenta. Casi."
  ],
  velaApagada: "Ya cumplieron. Ahora te toca a ti con el año nuevo.",

  tituloCarta: "Feliz cumpleaños, Clarita",
  // Separa los párrafos con una línea en blanco.
  dedicatoria: `Hoy es un día especial porque celebra la vida de una persona que, sin darse cuenta, se ha convertido en alguien muy importante para mí.

Quiero que sepas que me hace feliz compartir este tiempo contigo, descubrirte un poquito más cada día, reírnos, vivir momentos juntos y seguir creando recuerdos que espero que sean muchos más. Sé que llevamos apenas un año, pero ha sido suficiente para darme cuenta de lo bonito que es tenerte en mi vida.

No quiero prometerte cosas perfectas, prefiero demostrarte con pequeños detalles lo mucho que me importas. Quiero seguir acompañándote, verte cumplir tus sueños, celebrar tus alegrías y estar contigo también en los días no tan buenos.

Hoy deseo que la vida te regale muchísimas razones para sonreír, que nunca te falten motivos para sentirte feliz y que todo lo bonito que das a los demás también regrese a ti.`,
  cierre1: "",
  cierre2: "Feliz cumpleaños. Gracias por llegar a mi vida y hacerla un poquito más bonita. Te quiero mucho y espero que este sea uno de muchos cumpleaños que tengamos la suerte de compartir juntos.",

  botonPosdata: "Hay una posdata",
  botonPosdataCerrar: "Ocultar la posdata",
  posdata: "La tarta de esta página no lleva calorías. La de verdad, la negociamos.",

  preguntaReaccion: "¿Cómo vas?",
  reacciones: [
    { id: "smile", etiqueta: "Sonriendo", respuesta: "Esa era la meta. Lo demás es decorado." },
    { id: "soft", etiqueta: "Un poco blanda", respuesta: "Entonces la carta hizo su trabajo." },
    { id: "cake", etiqueta: "Quiero tarta de verdad", respuesta: "La de la pantalla no alimenta. La de verdad te la debo." }
  ],

  botonLeerOtraVez: "Volver a leer la carta",
  botonReiniciar: "Empezar de nuevo",
  textoReinicio: "¿Volvemos al sobre? El deseo, en teoría, sigue en pie.",
  botonReiniciarSi: "Sí, desde el inicio",
  botonReiniciarNo: "Mejor me quedo",

  // Lo último que se ve en la página.
  mensajeFinal: "Muchas gracias por ser parte de mi vida.",

  // Música: deja "" para la melodía de la página (no usa internet).
  // O pon un archivo tuyo, por ejemplo "assets/cancion.mp3".
  musica: "",
  volumen: 0.85,

  // Slider de fotos, dentro de la carta. Deja fotos en [] para ocultarlo.
  tituloFotos: "Me encanta tu versión mini.",
  fotos: [
    { src: "assets/mini-1.jpg", nota: "Qué hermosa niña. Qué dulzura.", encuadre: "center 42%" },
    { src: "assets/mini-2.jpg", nota: "La más aplicada del salón. Bueno... eso dice la foto.", encuadre: "center 40%", zoom: 1.08, origen: "center 38%" },
    { src: "assets/mini-3.jpg", nota: "Qué rico se toneaba la Clarita.", encuadre: "34% 42%" }
  ]
};

const ICONS = {
  smile: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="24" cy="24" r="15"/><path d="M17 21.5h.01M31 21.5h.01" stroke-width="3"/><path d="M17 28c1.8 2.8 4 4 7 4s5.2-1.2 7-4"/></svg>',
  spark: '<svg viewBox="0 0 48 48" fill="currentColor"><path d="M24 6l2.4 9.2L36 18l-9.6 2.8L24 30l-2.4-9.2L12 18l9.6-2.8L24 6z"/><path d="M35 30l1.1 3.4 3.4 1.1-3.4 1.1L35 39l-1.1-3.4-3.4-1.1 3.4-1.1L35 30z"/></svg>',
  bolt: '<svg viewBox="0 0 48 48" fill="currentColor"><path d="M26 5L12 27h10l-2 16 16-24H24l2-14z"/></svg>',
  flower: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="24" cy="24" r="3.2" fill="currentColor" stroke="none"/><circle cx="24" cy="13" r="5.5"/><circle cx="24" cy="35" r="5.5"/><circle cx="13" cy="24" r="5.5"/><circle cx="35" cy="24" r="5.5"/></svg>',
  star: '<svg viewBox="0 0 48 48" fill="currentColor"><path d="M24 6l4.6 11.2L41 19l-9 7.4 2.8 13.2L24 33.2 13.2 39.6 16 26.4 7 19l12.4-1.8L24 6z"/></svg>',
  sun: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="24" cy="24" r="7"/><path d="M24 8v5M24 35v5M8 24h5M35 24h5M12.5 12.5l3.5 3.5M32 32l3.5 3.5M35.5 12.5 32 16M16 32l-3.5 3.5"/></svg>',
  heart: '<svg viewBox="0 0 48 48" fill="currentColor"><path d="M24 40s-12-7.6-12-16a7 7 0 0 1 12-4 7 7 0 0 1 12 4c0 8.4-12 16-12 16z"/></svg>',
  bond: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="18" cy="24" r="8"/><circle cx="30" cy="24" r="8"/></svg>',
  eyes: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M5 20s4.2-7 10-7 10 7 10 7-4.2 7-10 7-10-7-10-7z"/><circle cx="15" cy="20" r="2.3" fill="currentColor" stroke="none"/><path d="M23 20s4.2-7 10-7 10 7 10 7-4.2 7-10 7-10-7-10-7z"/><circle cx="33" cy="20" r="2.3" fill="currentColor" stroke="none"/><path d="M16 33c2.2 2.5 4.8 3.6 8 3.6s5.8-1.1 8-3.6"/></svg>'
};

const NOTE = {
  C4: 261.63, F4: 349.23, G4: 392.0, A4: 440, B4: 493.88,
  C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99
};
const MELODY = [
  "E5", "C5", "G4", "C5",
  "A4", "F4", "A4", "C5",
  "D5", "B4", "G4", "D5",
  "E5", "C5", "G4", "C5",
  "F5", "C5", "A4", "F4",
  "E5", "C5", "G4", "E5",
  "D5", "B4", "G4", "B4",
  "C5", "E5", "G5", "C5"
];
const BASS = ["C4", "F4", "G4", "C4"];
const COLORS = ["#e7a3ad", "#f2d48a", "#d9c6ee", "#f7f1e8", "#e08b7c", "#b7d4c8", "#f0c2b4"];
const BURST = { ok: 48, big: 90, cosmic: 140 };

const MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const el = (id) => document.getElementById(id);
const stages = [...document.querySelectorAll(".stage")];

const state = {
  stage: 1,
  quality: 0,
  seenQualities: new Set(),
  seenReasons: new Set(),
  wishSize: "big",
  wishDone: false,
  blowing: false,
  opening: false,
  navLock: false,
  musicOn: false,
  poke: -1,
  qualitiesCelebrated: false
};

let fxTimers = [];
let slipTimer = 0;
let ctx = null;
let musicGain = null;
let sfxGain = null;
let scheduler = null;
let nextNoteTime = 0;
let stepIndex = 0;
let fileAudio = null;
let useFile = Boolean(CONFIG.musica);

function later(fn, ms) {
  const id = setTimeout(() => {
    fxTimers = fxTimers.filter((item) => item !== id);
    fn();
  }, ms);
  fxTimers.push(id);
}

function clearFx() {
  fxTimers.forEach(clearTimeout);
  fxTimers = [];
}

function setText(id, text, hideWhenEmpty) {
  const node = el(id);
  if (!node) return;
  node.textContent = text || "";
  if (hideWhenEmpty) node.hidden = !text;
}

function say(text) {
  const slip = el("slip");
  slip.textContent = text;
  slip.classList.add("is-on");
  clearTimeout(slipTimer);
  slipTimer = setTimeout(() => slip.classList.remove("is-on"), 2600);
}

function applyCopy() {
  document.querySelectorAll("[data-kicker]").forEach((node) => {
    node.textContent = CONFIG.capitulos[Number(node.dataset.kicker)] || "";
  });
  setText("title-welcome", CONFIG.fraseBienvenida);
  setText("text-welcome", CONFIG.fraseBienvenida2);
  setText("aside-welcome", CONFIG.asideInicio, true);
  setText("foot-welcome", CONFIG.pieInicio, true);
  setText("label-open", CONFIG.botonAbrir);
  setText("env-kicker", CONFIG.sobre.asunto);
  setText("env-title", CONFIG.sobre.titulo);
  setText("env-text", CONFIG.sobre.texto);
  setText("title-qualities", CONFIG.tituloCualidades);
  setText("quality-help", CONFIG.ayudaCualidades, true);
  setText("label-qualities", CONFIG.botonCualidades);
  setText("label-note", CONFIG.botonNota);
  setText("label-note-close", CONFIG.botonNotaCerrar);
  setText("title-reasons", CONFIG.tituloRazones);
  setText("text-reasons", CONFIG.textoRazones);
  setText("label-reasons", CONFIG.botonRazones);
  setText("title-wish", CONFIG.tituloDeseo);
  setText("text-wish", CONFIG.textoDeseo);
  setText("wish-hint", CONFIG.pistaDeseo, true);
  setText("cake-note", CONFIG.notaPastel, true);
  setText("label-wish", CONFIG.botonDeseo);
  setText("fortune", CONFIG.mensajeDeseo);
  setText("label-letter", CONFIG.botonHaciaCarta);
  setText("letter-title", CONFIG.tituloCarta);
  setText("cierre-1", CONFIG.cierre1, true);
  setText("cierre-2", CONFIG.cierre2);
  setText("sign-off", CONFIG.despedida, true);
  setText("sign-name", CONFIG.firma, true);
  setText("final-line", CONFIG.mensajeFinal);
  el("final-note").hidden = !CONFIG.mensajeFinal;
  setText("label-posdata", CONFIG.botonPosdata);
  setText("posdata", CONFIG.posdata);
  setText("react-question", CONFIG.preguntaReaccion, true);
  setText("label-reread", CONFIG.botonLeerOtraVez);
  setText("label-restart", CONFIG.botonReiniciar);
  setText("restart-text", CONFIG.textoReinicio);
  setText("label-restart-yes", CONFIG.botonReiniciarSi);
  setText("label-restart-no", CONFIG.botonReiniciarNo);
  el("btn-posdata").hidden = !CONFIG.posdata;
  el("stamp").textContent = CONFIG.nombre ? `Para ${CONFIG.nombre}` : "Para ti";
  document.title = CONFIG.nombre ? `Feliz cumpleaños, ${CONFIG.nombre}` : "Feliz cumpleaños";
}

function renderLetter() {
  const body = el("letter-body");
  body.replaceChildren();
  String(CONFIG.dedicatoria || "")
    .trim()
    .split(/\n\s*\n/)
    .filter(Boolean)
    .forEach((chunk) => {
      const p = document.createElement("p");
      p.textContent = chunk.trim();
      body.appendChild(p);
    });
}

function renderPhotos() {
  const root = el("photo-row");
  const fotos = (CONFIG.fotos || [])
    .map((foto) => (typeof foto === "string" ? { src: foto, nota: "" } : foto))
    .filter((foto) => foto && foto.src);
  if (!fotos.length) {
    root.hidden = true;
    return;
  }
  root.hidden = false;
  const line = el("photo-line");
  line.textContent = CONFIG.tituloFotos || "";
  line.hidden = !CONFIG.tituloFotos;

  const track = el("photo-track");
  const dots = el("photo-dots");
  const note = el("photo-note");
  track.replaceChildren();
  dots.replaceChildren();

  fotos.forEach((foto, i) => {
    const slide = document.createElement("div");
    slide.className = "mini-slide";
    const img = document.createElement("img");
    img.src = foto.src;
    img.alt = foto.nota || (CONFIG.nombre ? `${CONFIG.nombre} de pequeña` : "De pequeña");
    img.draggable = false;
    if (foto.encuadre) img.style.objectPosition = foto.encuadre;
    if (foto.zoom) {
      img.style.transform = `scale(${foto.zoom})`;
      img.style.transformOrigin = foto.origen || "center center";
    }
    img.addEventListener("error", () => {
      img.alt = "No se pudo cargar la foto";
      slide.classList.add("is-missing");
    });
    slide.appendChild(img);
    track.appendChild(slide);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "mini-dot";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `Foto ${i + 1} de ${fotos.length}`);
    dot.addEventListener("click", () => showPhoto(i));
    dots.appendChild(dot);
  });

  let index = 0;
  function showPhoto(next) {
    index = (next + fotos.length) % fotos.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    [...dots.children].forEach((dot, n) => {
      const on = n === index;
      dot.classList.toggle("is-on", on);
      dot.setAttribute("aria-selected", on ? "true" : "false");
    });
    const texto = fotos[index].nota || "";
    note.textContent = texto;
    note.hidden = !texto;
  }

  el("photo-prev").onclick = () => showPhoto(index - 1);
  el("photo-next").onclick = () => showPhoto(index + 1);

  const viewport = el("photo-viewport");
  let startX = 0;
  let startY = 0;
  let tracking = false;
  viewport.onpointerdown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    tracking = true;
    startX = event.clientX;
    startY = event.clientY;
  };
  viewport.onpointerup = (event) => {
    if (!tracking) return;
    tracking = false;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    if (Math.abs(dx) < 36 || Math.abs(dx) < Math.abs(dy)) return;
    showPhoto(index + (dx < 0 ? 1 : -1));
  };
  viewport.onpointercancel = () => {
    tracking = false;
  };

  const solo = fotos.length < 2;
  el("photo-prev").hidden = solo;
  el("photo-next").hidden = solo;
  dots.hidden = solo;
  showPhoto(0);
}

function renderReactions() {
  const wrap = el("reacts");
  wrap.replaceChildren();
  if (!CONFIG.reacciones || !CONFIG.reacciones.length) {
    el("react-question").hidden = true;
    return;
  }
  CONFIG.reacciones.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip";
    button.textContent = item.etiqueta;
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => reactTo(item, button));
    wrap.appendChild(button);
  });
}

function renderChips() {
  const wrap = el("chips");
  wrap.replaceChildren();
  CONFIG.tamanosDeseo.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip";
    button.dataset.size = item.id;
    button.textContent = item.etiqueta;
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => setWishSize(item.id));
    wrap.appendChild(button);
  });
  setWishSize(state.wishSize, true);
}

function renderReasons() {
  const grid = el("reason-grid");
  grid.replaceChildren();
  const tones = ["rose", "lav", "cream", "sage"];
  CONFIG.razones.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "flip";
    button.dataset.index = String(index);
    button.dataset.tone = item.tono || tones[index % tones.length];
    button.setAttribute("aria-pressed", "false");
    button.setAttribute("aria-label", `${item.titulo}. Toca para girar`);

    const icon = document.createElement("span");
    icon.className = "mini-icon";
    icon.innerHTML = ICONS[item.icono] || ICONS.star;
    const num = document.createElement("span");
    num.className = "num";
    num.textContent = String(index + 1).padStart(2, "0");
    const title = document.createElement("span");
    title.className = "face-title";
    title.textContent = item.titulo;
    const hint = document.createElement("span");
    hint.className = "face-hint";
    hint.textContent = "Toca para girar";

    const front = document.createElement("span");
    front.className = "face face-front";
    front.append(num, icon, title, hint);

    const kicker = document.createElement("span");
    kicker.className = "back-kicker";
    kicker.textContent = item.titulo;
    const message = document.createElement("span");
    message.className = "back-text";
    message.textContent = item.mensaje;
    const hintBack = document.createElement("span");
    hintBack.className = "face-hint";
    hintBack.textContent = "Toca para volver";
    const back = document.createElement("span");
    back.className = "face face-back";
    back.setAttribute("aria-hidden", "true");
    back.append(kicker, message, hintBack);

    const inner = document.createElement("span");
    inner.className = "flip-inner";
    inner.append(front, back);
    button.append(inner);
    button.addEventListener("click", () => toggleFlip(button));
    grid.appendChild(button);
  });
}

function renderQuality(index, dir) {
  const item = CONFIG.cualidades[index];
  if (!item) return;
  state.quality = index;
  state.seenQualities.add(index);
  setText("q-index", String(index + 1).padStart(2, "0"));
  setText("q-title", item.titulo);
  setText("q-text", item.texto);
  setText("q-extra", item.extra || "");
  el("q-extra-btn").hidden = !item.extra;
  el("q-icon").innerHTML = ICONS[item.icono] || ICONS.star;
  const card = el("quality-card");
  card.classList.remove("show-extra", "is-enter", "from-left");
  card.style.setProperty("--tilt", index % 2 ? "1.1deg" : "-1.15deg");
  void card.offsetWidth;
  card.classList.add("is-enter");
  if (dir < 0) card.classList.add("from-left");
  updateQualityControls();
}

function renderQualityDots() {
  const dots = el("quality-dots");
  dots.replaceChildren();
  CONFIG.cualidades.forEach((_, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "dot";
    button.setAttribute("aria-label", `Tarjeta ${index + 1}`);
    if (index === state.quality) button.setAttribute("aria-current", "true");
    if (state.seenQualities.has(index)) button.classList.add("is-seen");
    button.addEventListener("click", () => {
      if (index !== state.quality) renderQuality(index, index > state.quality ? 1 : -1);
    });
    dots.appendChild(button);
  });
}

function updateQualityControls() {
  const total = CONFIG.cualidades.length;
  const seen = state.seenQualities.size;
  const done = seen >= total && total > 0;
  el("btn-q-prev").disabled = state.quality === 0;
  el("btn-q-next").disabled = state.quality >= total - 1;
  el("btn-qualities").disabled = !done;
  el("quality-status").textContent = done
    ? "Ya puedes seguir"
    : `Tarjeta ${state.quality + 1} de ${total}`;
  renderQualityDots();
  if (done && !state.qualitiesCelebrated) {
    state.qualitiesCelebrated = true;
    const button = el("btn-qualities");
    button.classList.remove("is-pop");
    void button.offsetWidth;
    button.classList.add("is-pop");
  }
}

function updateReasonButton(justFinished) {
  const total = CONFIG.razones.length;
  const seen = state.seenReasons.size;
  const done = seen >= total && total > 0;
  el("btn-reasons").disabled = !done;
  const status = el("reason-status");
  status.classList.toggle("is-done", done);
  status.textContent = done
    ? CONFIG.cierreRazones
    : `${seen} de ${total}. Toca las tarjetas.`;
  if (justFinished) {
    const button = el("btn-reasons");
    button.classList.remove("is-pop");
    void button.offsetWidth;
    button.classList.add("is-pop");
    burst(18);
  }
}

function updateChrome() {
  const n = state.stage;
  document.body.dataset.stage = String(n);
  el("btn-back").disabled = n === 1;
  const label = CONFIG.capitulos[n - 1] || "";
  el("progress-label").textContent = `${n} / 5 · ${label}`;
  const bar = el("progress");
  bar.setAttribute("aria-valuenow", String(n));
  bar.setAttribute("aria-valuetext", `Paso ${n} de 5: ${label}`);
  bar.querySelectorAll("span").forEach((dot, index) => {
    dot.classList.toggle("is-done", index < n - 1);
    dot.classList.toggle("is-now", index === n - 1);
  });
}

function onEnter(n) {
  if (n === 1) {
    state.opening = false;
    el("btn-open").disabled = false;
    setText("label-open", CONFIG.botonAbrir);
    el("envelope").classList.remove("is-open", "is-wiggle");
    el("scene").classList.remove("is-still");
    el("poke-line").textContent = "";
  }
  if (n === 2) {
    const card = el("quality-card");
    card.classList.remove("is-enter");
    void card.offsetWidth;
    card.classList.add("is-enter");
  }
  if (n === 4 && state.wishDone) {
    el("stage-4").classList.add("is-done");
    document.querySelectorAll(".candle").forEach((candle) => candle.classList.add("is-out"));
  }
  if (n === 5) replayLetter(false);
}

function goTo(n) {
  if (state.navLock || n === state.stage || n < 1 || n > stages.length) return;
  state.navLock = true;
  const current = stages[state.stage - 1];
  const next = stages[n - 1];
  current.classList.remove("is-active");
  current.classList.add("is-leaving");
  current.setAttribute("aria-hidden", "true");
  next.scrollTop = 0;
  next.classList.add("is-active");
  next.setAttribute("aria-hidden", "false");
  state.stage = n;
  updateChrome();
  onEnter(n);
  const heading = next.querySelector("h1, h2");
  if (heading) heading.focus({ preventScroll: true });
  setTimeout(() => {
    current.classList.remove("is-leaving");
    state.navLock = false;
  }, MOTION ? 40 : 520);
}

async function openSurprise() {
  if (state.opening || state.navLock) return;
  state.opening = true;
  state.navLock = true;
  el("btn-open").disabled = true;
  setText("label-open", CONFIG.textoAbriendo);
  el("scene").classList.add("is-still");
  await readyAudio();
  sfxPaper();
  el("envelope").classList.add("is-open");
  later(() => {
    state.opening = false;
    state.navLock = false;
    goTo(2);
  }, MOTION ? 380 : 1750);
}

async function pokeEnvelope() {
  if (state.opening) return;
  const lines = CONFIG.textosSobre || [];
  if (!lines.length) return;
  state.poke = (state.poke + 1) % lines.length;
  el("poke-line").textContent = lines[state.poke];
  const envelope = el("envelope");
  envelope.classList.remove("is-wiggle");
  void envelope.offsetWidth;
  envelope.classList.add("is-wiggle");
  await readyAudio();
  sfxPop();
}

async function toggleFlip(button) {
  const on = !button.classList.contains("is-flipped");
  button.classList.toggle("is-flipped", on);
  button.setAttribute("aria-pressed", String(on));
  const front = button.querySelector(".face-front");
  const back = button.querySelector(".face-back");
  front.setAttribute("aria-hidden", String(on));
  back.setAttribute("aria-hidden", String(!on));
  const title = front.querySelector(".face-title").textContent;
  const message = back.querySelector(".back-text").textContent;
  button.setAttribute("aria-label", on ? `${title}. ${message}` : `${title}. Toca para girar`);
  const index = Number(button.dataset.index);
  const total = CONFIG.razones.length;
  const before = state.seenReasons.size;
  if (on) state.seenReasons.add(index);
  await readyAudio();
  sfxFlip();
  updateReasonButton(on && before < total && state.seenReasons.size === total);
}

function setWishSize(id, silent) {
  if (!CONFIG.tamanosDeseo.some((item) => item.id === id)) return;
  if (!silent && state.wishSize === id) return;
  state.wishSize = id;
  const cake = el("cake");
  cake.classList.remove("size-ok", "size-big", "size-cosmic");
  cake.classList.add(`size-${id}`);
  document.querySelectorAll("#chips .chip").forEach((chip) => {
    chip.setAttribute("aria-pressed", String(chip.dataset.size === id));
  });
  if (!silent) {
    const item = CONFIG.tamanosDeseo.find((entry) => entry.id === id);
    if (item && item.nota) say(item.nota);
  }
}

async function pokeCandle(index) {
  const lines = state.wishDone ? [CONFIG.velaApagada] : CONFIG.velas;
  if (lines.length) say(lines[index % lines.length]);
  const candle = document.querySelectorAll(".candle")[index];
  if (!candle) return;
  candle.classList.remove("is-wiggle");
  void candle.offsetWidth;
  candle.classList.add("is-wiggle");
  await readyAudio();
  sfxPop();
}

async function blowCandles() {
  if (state.wishDone || state.blowing) return;
  state.blowing = true;
  el("btn-wish").disabled = true;
  setText("label-wish", CONFIG.textoApagando);
  el("cake").classList.add("is-blowing");
  el("wind").classList.add("is-on");
  try {
    await readyAudio();
    sfxBlow();
  } catch (error) {
    /* La animación sigue aunque el audio falle. */
  }
  const gaps = MOTION ? [40, 80, 120] : [480, 860, 1220];
  document.querySelectorAll(".candle").forEach((candle, index) => {
    later(() => candle.classList.add("is-out"), gaps[index] || gaps[gaps.length - 1]);
  });
  later(finishWish, MOTION ? 240 : 1580);
}

function finishWish() {
  state.wishDone = true;
  state.blowing = false;
  el("stage-4").classList.add("is-done");
  el("cake").classList.remove("is-blowing");
  el("wind").classList.remove("is-on");
  document.querySelectorAll(".candle").forEach((candle) => candle.classList.add("is-out"));
  const count = BURST[state.wishSize] || BURST.big;
  burst(window.innerWidth < 520 ? Math.min(count, 80) : count);
  spawnRising(state.wishSize === "cosmic" ? 24 : 12);
  flash(state.wishSize === "cosmic");
  sfxSuccess();
  const fortune = el("fortune");
  fortune.focus({ preventScroll: false });
}

function reactTo(item, button) {
  el("react-note").textContent = item.respuesta;
  document.querySelectorAll("#reacts .chip").forEach((chip) => {
    chip.setAttribute("aria-pressed", "false");
  });
  button.setAttribute("aria-pressed", "true");
  readyAudio().then(() => sfxPop());
  if (item.id === "smile") burst(26);
  if (item.id === "soft") spawnRising(12);
  if (item.id === "cake") burst(20);
}

function replayLetter(scroll) {
  const sheet = el("letter");
  sheet.style.animation = "none";
  void sheet.offsetWidth;
  sheet.style.animation = "";
  if (scroll) {
    el("stage-5").scrollTo({ top: 0, behavior: MOTION ? "auto" : "smooth" });
  }
}

function resetFlips() {
  document.querySelectorAll(".flip").forEach((button) => {
    button.classList.remove("is-flipped");
    button.setAttribute("aria-pressed", "false");
    const front = button.querySelector(".face-front");
    const back = button.querySelector(".face-back");
    front.setAttribute("aria-hidden", "false");
    back.setAttribute("aria-hidden", "true");
    const title = front.querySelector(".face-title").textContent;
    button.setAttribute("aria-label", `${title}. Toca para girar`);
  });
}

function resetStory() {
  clearFx();
  state.opening = false;
  state.blowing = false;
  state.wishDone = false;
  state.wishSize = "big";
  state.quality = 0;
  state.seenQualities = new Set();
  state.seenReasons = new Set();
  state.qualitiesCelebrated = false;
  state.poke = -1;
  el("stage-4").classList.remove("is-done");
  el("cake").classList.remove("is-blowing");
  el("wind").classList.remove("is-on");
  document.querySelectorAll(".candle").forEach((candle) => {
    candle.classList.remove("is-out", "is-wiggle");
  });
  setWishSize("big", true);
  renderQuality(0, 0);
  resetFlips();
  updateReasonButton(false);
  el("posdata").hidden = true;
  el("btn-posdata").setAttribute("aria-expanded", "false");
  el("react-note").textContent = "";
  document.querySelectorAll("#reacts .chip").forEach((chip) => {
    chip.setAttribute("aria-pressed", "false");
  });
  el("restart-dialog").hidden = true;
  el("btn-wish").disabled = false;
  applyCopy();
}

function restart() {
  resetStory();
  state.navLock = false;
  if (state.stage !== 1) goTo(1);
  else onEnter(1);
}

function burst(count) {
  if (MOTION || count <= 0) return;
  const layer = el("confetti");
  for (let i = 0; i < count; i += 1) {
    const bit = document.createElement("span");
    bit.className = "confetti-bit";
    const roll = Math.random();
    if (roll > 0.84) {
      bit.classList.add("glyph");
      bit.textContent = roll > 0.92 ? "✦" : "♥";
      bit.style.color = COLORS[i % COLORS.length];
      bit.style.fontSize = `${12 + Math.random() * 8}px`;
    } else if (roll > 0.7) {
      bit.classList.add("round");
      bit.style.background = COLORS[i % COLORS.length];
    } else {
      bit.style.background = COLORS[i % COLORS.length];
    }
    bit.style.left = `${Math.random() * 100}%`;
    bit.style.animationDuration = `${2.2 + Math.random() * 1.8}s`;
    bit.style.animationDelay = `${Math.random() * 0.25}s`;
    bit.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
    bit.style.setProperty("--spin", `${Math.random() * 680 - 340}deg`);
    bit.addEventListener("animationend", () => bit.remove());
    layer.appendChild(bit);
  }
}

function spawnRising(count) {
  if (MOTION || count <= 0) return;
  const layer = el("party");
  const glyphs = ["♥", "✦", "♥", "✦"];
  for (let i = 0; i < count; i += 1) {
    const bit = document.createElement("span");
    bit.className = "riser";
    bit.textContent = glyphs[i % glyphs.length];
    bit.style.left = `${8 + Math.random() * 84}%`;
    bit.style.color = glyphs[i % 2] === "♥" ? "#e7a3ad" : "#c6a15b";
    bit.style.fontSize = `${14 + Math.random() * 12}px`;
    bit.style.animationDuration = `${2.6 + Math.random() * 1.6}s`;
    bit.style.animationDelay = `${Math.random() * 0.35}s`;
    bit.addEventListener("animationend", () => bit.remove());
    layer.appendChild(bit);
  }
}

function flash(strong) {
  const node = el("flash");
  node.classList.toggle("is-strong", Boolean(strong));
  node.classList.remove("is-on");
  void node.offsetWidth;
  node.classList.add("is-on");
}

function createFloaters() {
  const layer = el("floaters");
  const count = Math.min(16, Math.max(8, Math.round(window.innerWidth / 90)));
  const glyphs = [
    { t: "✦", color: "#c6a15b" },
    { t: "•", color: "#c8b6de" },
    { t: "♥", color: "#e7a0aa" }
  ];
  for (let i = 0; i < count; i += 1) {
    const glyph = glyphs[i % glyphs.length];
    const bit = document.createElement("span");
    bit.className = "floater";
    bit.textContent = glyph.t;
    bit.style.color = glyph.color;
    bit.style.left = `${Math.random() * 100}%`;
    bit.style.fontSize = `${10 + Math.random() * 14}px`;
    bit.style.animationDuration = `${12 + Math.random() * 14}s`;
    bit.style.animationDelay = `${-Math.random() * 16}s`;
    bit.style.opacity = String(0.22 + Math.random() * 0.35);
    layer.appendChild(bit);
  }
}

function ensureCtx() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return null;
  if (!ctx) {
    ctx = new AudioCtx();
    musicGain = ctx.createGain();
    sfxGain = ctx.createGain();
    musicGain.gain.value = 0.0001;
    sfxGain.gain.value = 0.9;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 2400;
    const comp = ctx.createDynamicsCompressor();
    musicGain.connect(filter);
    filter.connect(comp);
    sfxGain.connect(comp);
    comp.connect(ctx.destination);
  }
  return ctx;
}

async function readyAudio() {
  const audio = ensureCtx();
  if (audio && audio.state === "suspended") await audio.resume();
}

function tone(target, freq, time, dur, type, vol) {
  if (!ctx || !target || !freq) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(Math.max(vol, 0.0002), time + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);
  osc.connect(gain);
  gain.connect(target);
  osc.start(time);
  osc.stop(time + dur + 0.02);
}

function noise(target, dur, vol, freq) {
  if (!ctx || !target) return;
  const length = Math.max(1, Math.floor(ctx.sampleRate * dur));
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i += 1) data[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = freq;
  filter.Q.value = 0.6;
  const gain = ctx.createGain();
  const now = ctx.currentTime;
  gain.gain.setValueAtTime(vol, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);
  src.connect(filter);
  filter.connect(gain);
  gain.connect(target);
  src.start(now);
  src.stop(now + dur + 0.02);
}

function sfxPop() {
  if (!ctx) return;
  const now = ctx.currentTime;
  tone(sfxGain, 640, now, 0.07, "sine", 0.04);
  tone(sfxGain, 920, now + 0.03, 0.09, "triangle", 0.03);
}

function sfxFlip() {
  if (!ctx) return;
  tone(sfxGain, 540, ctx.currentTime, 0.08, "triangle", 0.035);
}

function sfxPaper() {
  noise(sfxGain, 0.12, 0.05, 1400);
  later(() => noise(sfxGain, 0.16, 0.04, 900), 120);
}

function sfxBlow() {
  noise(sfxGain, 0.45, 0.045, 520);
}

function sfxSuccess() {
  if (!ctx) return;
  const now = ctx.currentTime;
  [523.25, 659.25, 783.99, 1046.5].forEach((freq, index) => {
    tone(sfxGain, freq, now + index * 0.09, 0.18, "triangle", 0.04);
  });
}

function scheduleNotes() {
  if (!ctx || !state.musicOn) return;
  const horizon = ctx.currentTime + 0.32;
  let guard = 0;
  while (nextNoteTime < horizon && guard < 6) {
    const note = MELODY[stepIndex % MELODY.length];
    const volume = 0.05 * (Number(CONFIG.volumen) || 0.8);
    tone(musicGain, NOTE[note], nextNoteTime, 0.32, "triangle", volume);
    if (stepIndex % 4 === 0) {
      const bass = BASS[(stepIndex / 4) % BASS.length];
      tone(musicGain, NOTE[bass], nextNoteTime, 0.5, "sine", volume * 0.45);
    }
    nextNoteTime += 0.36;
    stepIndex += 1;
    guard += 1;
  }
  if (nextNoteTime < ctx.currentTime - 0.05) nextNoteTime = ctx.currentTime + 0.06;
}

function fadeMusic(value) {
  if (!ctx || !musicGain) return;
  const now = ctx.currentTime;
  musicGain.gain.cancelScheduledValues(now);
  musicGain.gain.setValueAtTime(Math.max(musicGain.gain.value, 0.0001), now);
  musicGain.gain.linearRampToValueAtTime(Math.max(value, 0.0001), now + 0.25);
}

async function startSynth() {
  await readyAudio();
  if (!ctx) throw new Error("sin-audio");
  if (!scheduler) {
    nextNoteTime = ctx.currentTime + 0.06;
    stepIndex = 0;
    scheduler = setInterval(scheduleNotes, 90);
  }
  fadeMusic(1);
}

function stopSynth() {
  fadeMusic(0.0001);
  if (scheduler) clearInterval(scheduler);
  scheduler = null;
}

async function startMusic() {
  if (useFile) {
    try {
      if (!fileAudio) {
        fileAudio = new Audio(CONFIG.musica);
        fileAudio.loop = true;
        fileAudio.preload = "auto";
      }
      fileAudio.volume = Math.min(1, 0.55 * (Number(CONFIG.volumen) || 0.8));
      await fileAudio.play();
      return;
    } catch (error) {
      useFile = false;
      say("No encontré el archivo de música. Suena una melodía de la página.");
    }
  }
  await startSynth();
}

function stopMusic() {
  if (fileAudio) fileAudio.pause();
  stopSynth();
}

function syncMusicButton() {
  const button = el("btn-music");
  button.classList.toggle("is-playing", state.musicOn);
  button.setAttribute("aria-pressed", String(state.musicOn));
  button.setAttribute("aria-label", state.musicOn ? "Silenciar música" : "Activar música de fondo");
}

async function toggleMusic() {
  if (state.musicOn) {
    stopMusic();
    state.musicOn = false;
    syncMusicButton();
    return;
  }
  try {
    await startMusic();
    state.musicOn = true;
    syncMusicButton();
  } catch (error) {
    state.musicOn = false;
    syncMusicButton();
    say("Este navegador no dejó sonar la música.");
  }
}

function bind() {
  el("btn-back").addEventListener("click", () => goTo(state.stage - 1));
  el("btn-music").addEventListener("click", toggleMusic);
  el("envelope").addEventListener("click", pokeEnvelope);
  el("envelope").addEventListener("animationend", (event) => {
    if (event.animationName === "wiggle") el("envelope").classList.remove("is-wiggle");
  });
  el("btn-open").addEventListener("click", openSurprise);
  el("q-extra-btn").addEventListener("click", () => {
    el("quality-card").classList.toggle("show-extra");
  });
  el("btn-q-next").addEventListener("click", () => {
    if (state.quality < CONFIG.cualidades.length - 1) {
      readyAudio().then(sfxPop);
      renderQuality(state.quality + 1, 1);
    }
  });
  el("btn-q-prev").addEventListener("click", () => {
    if (state.quality > 0) renderQuality(state.quality - 1, -1);
  });
  el("btn-qualities").addEventListener("click", () => goTo(3));
  el("btn-reasons").addEventListener("click", () => goTo(4));
  el("btn-wish").addEventListener("click", blowCandles);
  el("btn-letter").addEventListener("click", () => goTo(5));
  el("btn-reread").addEventListener("click", () => replayLetter(true));
  el("btn-restart").addEventListener("click", () => {
    const dialog = el("restart-dialog");
    dialog.hidden = false;
    dialog.scrollIntoView({ behavior: MOTION ? "auto" : "smooth", block: "nearest" });
    el("btn-restart-no").focus();
  });
  el("btn-restart-no").addEventListener("click", () => {
    el("restart-dialog").hidden = true;
  });
  el("btn-restart-yes").addEventListener("click", restart);
  el("btn-posdata").addEventListener("click", () => {
    const note = el("posdata");
    const open = note.hidden;
    note.hidden = !open;
    el("btn-posdata").setAttribute("aria-expanded", String(open));
    setText("label-posdata", open ? CONFIG.botonPosdataCerrar : CONFIG.botonPosdata);
  });

  document.querySelectorAll(".candle").forEach((candle, index) => {
    candle.tabIndex = 0;
    candle.setAttribute("role", "button");
    candle.setAttribute("aria-label", `Vela ${index + 1}`);
    const fire = (event) => {
      event.stopPropagation();
      pokeCandle(index);
    };
    candle.addEventListener("click", fire);
    candle.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        pokeCandle(index);
      }
    });
  });

  document.addEventListener("visibilitychange", () => {
    if (!state.musicOn) return;
    if (document.hidden) {
      if (fileAudio && useFile) fileAudio.pause();
      if (ctx && ctx.state === "running") ctx.suspend();
      return;
    }
    if (useFile && fileAudio) {
      fileAudio.play().catch(() => {});
      return;
    }
    if (ctx) {
      if (nextNoteTime < ctx.currentTime) nextNoteTime = ctx.currentTime + 0.06;
      ctx.resume();
    }
  });
}

function init() {
  applyCopy();
  renderLetter();
  renderPhotos();
  renderReactions();
  renderChips();
  renderReasons();
  renderQuality(0, 0);
  updateReasonButton(false);
  createFloaters();
  bind();
  updateChrome();
  document.body.classList.add("is-ready");
}

init();

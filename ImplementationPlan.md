# ImplementationPlan.md
# Web Sorpresa para Kiara — Día Internacional de la Enfermera
> Proyecto de Daniel Eduardo Ibañez Garcia para Kiara Abigail Rosmery Verano Romero
> Fecha de entrega objetivo: 12 de mayo (Día Internacional de la Enfermera)
> Agente: Claude Opus 4.6 vía Antigravity

---

## 1. Visión General del Proyecto

Una **single-page web romántica y cinematográfica** que Daniel le regalará a Kiara el Día Internacional de la Enfermera. La web narra su historia de amor, exhibe 12 fotos compartidas, contiene una carta íntima escrita a mano (digitalmente), y celebra la vocación de Kiara como Auditora de Enfermería en Innomedic, San Borja.

**Filosofía de diseño:** *Revista editorial de lujo + Diario cinematográfico de amor.* Como si alguien revelara un rollo de fotos analógicas y las acompañara con cartas escritas a mano sobre papel crema. Cálido, íntimo, refinado.

---

## 2. Stack Tecnológico (Últimas Versiones Estables)

| Tecnología | Versión | Propósito |
|---|---|---|
| React | 19.x | UI framework |
| Vite | 6.x | Build tool |
| Tailwind CSS | 4.x | Utility-first styling |
| Framer Motion | 12.x | Animaciones y scroll reveals |
| Swiper.js | 11.x | Galería de fotos táctil (mobile-first) |
| Lucide React | latest | Iconografía |
| Google Fonts API | — | Tipografía (via `@import`) |
| Vercel | Plan gratuito | Deploy (solo frontend, sin backend) |

**Inicialización del proyecto:**
```bash
npm create vite@latest kiara-web -- --template react
cd kiara-web
npm install
npm install framer-motion swiper lucide-react
npm install -D tailwindcss@4 @tailwindcss/vite
```

**Configuración Tailwind v4 (`vite.config.js`):**
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**`src/index.css` (CSS variables globales + Tailwind):**
```css
@import "tailwindcss";
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Galatia:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Lora:ital,wght@0,400;0,500;1,400&family=Dancing+Script:wght@600;700&display=swap');

:root {
  --cream:        #FAF6F0;
  --cream-dark:   #F0E8DC;
  --rose:         #C9748A;
  --rose-light:   #E8B4C0;
  --rose-deep:    #8B3A52;
  --gold:         #C9A96E;
  --gold-light:   #E8D5A3;
  --mauve:        #9B7B8C;
  --ink:          #2C1B24;
  --ink-soft:     #5A3D4A;

  --font-display: 'Cormorant Galatia', serif;
  --font-body:    'Lora', serif;
  --font-script:  'Dancing Script', cursive;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background-color: var(--cream);
  color: var(--ink);
  font-family: var(--font-body);
  overflow-x: hidden;
}

/* Grain overlay global */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
  opacity: 0.4;
}
```

---

## 3. Sistema de Diseño

### 3.1 Paleta de Colores
```
--cream:       #FAF6F0  → Fondo principal (papel crema)
--cream-dark:  #F0E8DC  → Fondo de secciones alternas
--rose:        #C9748A  → Acento primario (rosa antiguo)
--rose-light:  #E8B4C0  → Acento suave, bordes
--rose-deep:   #8B3A52  → Headings oscuros, énfasis
--gold:        #C9A96E  → Detalles dorados, líneas decorativas
--gold-light:  #E8D5A3  → Fondos de cards suaves
--mauve:       #9B7B8C  → Texto secundario
--ink:         #2C1B24  → Texto principal
--ink-soft:    #5A3D4A  → Texto cuerpo de carta
```

### 3.2 Tipografía
| Rol | Fuente | Peso | Uso |
|---|---|---|---|
| Display / Títulos grandes | Cormorant Galatia | 300–700 (normal + italic) | Hero, section headers |
| Cuerpo / Carta | Lora | 400, 500 (normal + italic) | Párrafos, descripción |
| Script / Firma | Dancing Script | 600, 700 | Decorativo, firma de Daniel |

### 3.3 Tamaños de fuente (Mobile-First con clamp)
```css
/* En index.css o como clases Tailwind custom */
.text-hero    { font-size: clamp(3rem, 12vw, 7rem); }
.text-title   { font-size: clamp(2rem, 7vw, 4.5rem); }
.text-section { font-size: clamp(1.5rem, 5vw, 3rem); }
.text-body    { font-size: clamp(1rem, 3vw, 1.2rem); }
.text-script  { font-size: clamp(1.8rem, 6vw, 3.5rem); }
```

### 3.4 Espaciado y Layout
- **Contenedor máximo:** `max-w-lg` en mobile, `max-w-2xl` en desktop (la web es experiencia móvil)
- **Padding horizontal base:** `px-6` mobile → `px-8` tablet
- **Espaciado entre secciones:** `py-20` mobile → `py-28` desktop
- **Fotos 4:5:** `aspect-[4/5]` con `object-cover`

### 3.5 Efectos Visuales Clave
- **Film grain** en `body::before` (ver CSS global)
- **Línea dorada decorativa** `<hr>` con gradiente `rose → gold → rose`
- **Vignette sutil** en hero con radial-gradient overlay
- **Sticker de cruz de enfermería** SVG animado en la sección de tributo
- **Scroll reveal** con Framer Motion `whileInView` + `viewport={{ once: true }}`

---

## 4. Arquitectura de Componentes

```
src/
├── components/
│   ├── Hero.jsx              # Sección de portada con animación de entrada
│   ├── IntroQuote.jsx        # Cita romántica de apertura
│   ├── CounterStats.jsx      # Contador de días juntos y mesarios
│   ├── OurStory.jsx          # Timeline de las 4 citas + inicio de relación
│   ├── PhotoGallery.jsx      # Galería de 12 fotos con Swiper
│   ├── Letter.jsx            # Carta de amor estilizada
│   ├── NurseTribute.jsx      # Sección especial por el día de la enfermera
│   ├── Footer.jsx            # Firma y fecha
│   └── ui/
│       ├── GoldenDivider.jsx # Línea separadora dorada
│       ├── ScrollReveal.jsx  # Wrapper de animación scroll
│       └── FloatingHeart.jsx # Corazones animados en hero
├── hooks/
│   ├── useCountUp.js         # Hook para animación de números
│   └── useDateCalc.js        # Hook para calcular días/mesarios
├── data/
│   └── story.js              # Datos de la historia (fechas, citas, fotos)
├── App.jsx
├── main.jsx
└── index.css
```

---

## 5. Datos de la Historia (`src/data/story.js`)

```js
export const story = {
  couple: {
    her: "Kiara",
    herFull: "Kiara Abigail Rosmery Verano Romero",
    him: "Daniel",
    himFull: "Daniel Eduardo Ibañez Garcia",
  },

  anniversaryDate: new Date("2024-05-02"), // Fecha en que se hicieron enamorados

  timeline: [
    {
      id: 1,
      date: "Abril 2024",
      title: "La primera vez",
      description:
        "Te recogí afuera de Cayetano Heredia. Ibas con tu uniforme, un poco nerviosa — o quizás era yo. Fuimos a Norkys en Plaza Norte y compartimos pollo a la brasa mientras el tiempo se hacía corto. No quería que terminara.",
      photo: "/photos/photo-01.jpg",
      emoji: "🍗",
    },
    {
      id: 2,
      date: "Poco después",
      title: "Las bancas de Plaza Norte",
      description:
        "Papa John's estaba cerrado. Nos sentamos en unas bancas y hablamos durante horas. No importaba el lugar. Importaba que estabas tú.",
      photo: "/photos/photo-02.jpg",
      emoji: "🪑",
    },
    {
      id: 3,
      date: "La tercera cita",
      title: "El parque y el primer beso",
      description:
        "Nos echamos en el pasto bajo el cielo abierto. Y en algún momento entre una conversación y otra, sucedió. Ese beso que cambió todo.",
      photo: "/photos/photo-03.jpg",
      emoji: "🌿",
    },
    {
      id: 4,
      date: "2 de mayo de 2024",
      title: "El día que me dijiste que sí",
      description:
        "Nuestro día. Me miraste y lo entendimos sin necesidad de muchas palabras. Desde ese momento, somos nosotros.",
      photo: "/photos/photo-04.jpg",
      emoji: "❤️",
    },
  ],

  photos: Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/photos/photo-${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `Recuerdo ${i + 1} de Daniel y Kiara`,
  })),

  letter: {
    content: `Kiara,

Hoy, 12 de mayo — el Día Internacional de la Enfermera — no podía dejar pasar este momento sin decirte todo lo que guardo adentro.

Te conocí como Abigail. Así te llamaban todos. Pero yo encontré a Kiara. La que me habló con honestidad desde el primer mensaje, la que se subió a ese carro sin conocerme del todo, la que me contó sus sueños mientras el tráfico nos detenía camino a Plaza Norte. Ese día, compartiendo pollo a la brasa en Norkys, supe que algo en mi vida había cambiado. No sabía exactamente qué, pero lo sentí.

Vinieron más tardes. La de las bancas donde Papa John's estaba cerrado pero a ninguno de los dos nos importó. La del parque donde el tiempo pareció detenerse. Y el 2 de mayo — nuestro día — cuando te miré a los ojos y supe que quería que fueras mía, y yo tuyo.

Cada mesario que pasa me recuerda lo fácil que es amarte. No porque todo sea perfecto, sino porque contigo hasta lo imperfecto se siente bien.

Elegiste una carrera que pocos comprenden hasta que la necesitan. Cuidar a otros requiere una fuerza que no se aprende en libros — se trae adentro, se cultiva con paciencia, con vocación, con humanidad. Tú la tienes. La vi desde la primera vez que me hablaste de tus ciclos, de tus prácticas, de todo lo que dabas sin pedirte nada a cambio.

Hoy el mundo celebra a las enfermeras. Yo te celebro a ti. No solo por lo que haces en Innomedic cada día, sino por todo lo que eres cuando llegas a casa: la que ríe fuerte, la que abraza con ganas, la que hace que cualquier lugar ordinario se sienta especial.

Gracias por elegirme también.

Con todo mi amor,
Daniel ❤️`,
  },

  nurses: {
    workplace: "Innomedic, San Borja",
    role: "Auditora de Enfermería",
    university: "Universidad Peruana Cayetano Heredia",
    degree: "Bachiller en Enfermería",
  },
};
```

---

## 6. Especificación de Componentes

### 6.1 `Hero.jsx`
**Propósito:** Primera impresión. Impacto visual total.

**Estructura visual:**
```
┌────────────────────────────────┐
│  [Grain overlay]               │
│                                │
│  ♡ floatingHearts animados     │
│                                │
│  Para ti,                      │  ← Dancing Script, rose
│  Kiara                         │  ← Cormorant, 7rem, ink
│                                │
│  12 de mayo · Día Internacional│  ← Lora, gold, italic
│  de la Enfermera               │
│                                │
│  [scroll indicator ↓]          │
└────────────────────────────────┘
```

**Animaciones (Framer Motion):**
```jsx
// Entrada staggered
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.3 } }
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};
```

**FloatingHearts:** 8–12 corazones SVG pequeños con `animate={{ y: [-10, 10], opacity: [0.3, 0.8] }}` en posiciones random con `transition={{ repeat: Infinity, repeatType: "mirror" }}`.

**Fondo:** `bg-[var(--cream)]` con vignette radial-gradient overlay oscureciendo bordes levemente.

---

### 6.2 `IntroQuote.jsx`
**Propósito:** Cita poética de transición entre hero y historia.

```
"Hay personas que llegan sin avisar
y sin querer se vuelven el lugar
al que siempre quieres volver."
```

Estilos: Cormorant Galatia italic, centrado, `text-[var(--mauve)]`, con línea dorada arriba y abajo. Fade-in al hacer scroll.

---

### 6.3 `CounterStats.jsx`
**Propósito:** Mostrar cuánto tiempo llevan juntos. Emotivo y concreto.

**Cálculo (`useDateCalc.js`):**
```js
export function useDateCalc(startDate) {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30.44);
  return { days, months };
}
```

**Layout (3 cards en fila):**
```
┌──────┐  ┌──────┐  ┌──────┐
│ 375  │  │  12  │  │  ∞   │
│ días │  │ mes. │  │ amor │
└──────┘  └──────┘  └──────┘
```

Números animados con `useCountUp` (cuenta desde 0 hasta el valor real en 2s cuando el componente entra en viewport).

Cards: `bg-[var(--gold-light)]` con borde `border-[var(--rose-light)]`, número en Cormorant bold `text-[var(--rose-deep)]`, label en Lora `text-[var(--mauve)]`.

---

### 6.4 `OurStory.jsx`
**Propósito:** Timeline vertical de las 4 citas + inicio de relación.

**Layout Mobile-First:**
```
[Línea vertical central — color rose]
    ●──── Cita 1
         📅 Abril 2024
         📌 La primera vez
         [Foto 4:5 redondeada]
         📝 Descripción...
    
    ●──── Cita 2
         ...
```

Cada evento en `ScrollReveal` (entra desde `x: -40` o `x: 40` alternando). La foto de cada cita es las primeras 4 de las 12 fotos. Fotos con `aspect-[4/5]`, `rounded-2xl`, `shadow-lg`.

---

### 6.5 `PhotoGallery.jsx`
**Propósito:** Las 12 fotos en un carrusel táctil.

**Implementación con Swiper:**
```jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Config:
// slidesPerView: 1.2 (mobile) / 2.2 (tablet)
// centeredSlides: true
// spaceBetween: 16
// autoplay: { delay: 3500, disableOnInteraction: false }
// pagination: { clickable: true }
// loop: true
```

Cada slide: `aspect-[4/5]`, `rounded-3xl`, `overflow-hidden`, `shadow-2xl`. Paginación dots con color `--rose`.

**Caption por foto:** Número de foto en estilo Polaroid en la parte inferior (fondo blanco, font script, con sombra).

---

### 6.6 `Letter.jsx`
**Propósito:** La carta. El núcleo emocional de la web.

**Visual:** Simula papel de carta real.
```
┌─────────────────────────────────────┐
│  [Textura papel sutil via bg-image] │
│  [Cruz de enfermería pequeña arriba]│
│                                     │
│  Kiara,                             │  ← Cormorant italic bold
│                                     │
│  Hoy, 12 de mayo...                 │  ← Lora, justified
│  [párrafos con drop-cap en el 1ro]  │
│                                     │
│  Con todo mi amor,                  │  ← Lora italic
│  Daniel ❤️                          │  ← Dancing Script 700
└─────────────────────────────────────┘
```

**Estilos de la carta:**
```css
.letter-paper {
  background: linear-gradient(180deg, #FFFDF8 0%, #FAF6F0 100%);
  border: 1px solid var(--rose-light);
  border-radius: 4px;
  box-shadow: 
    0 4px 6px rgba(201, 116, 138, 0.08),
    0 20px 60px rgba(44, 27, 36, 0.12),
    inset 0 1px 0 rgba(255,255,255,0.8);
  padding: 2.5rem 2rem;
  position: relative;
}
/* Líneas de papel horizontales */
.letter-paper::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    transparent,
    transparent 31px,
    rgba(201, 169, 110, 0.12) 31px,
    rgba(201, 169, 110, 0.12) 32px
  );
  pointer-events: none;
  border-radius: 4px;
}
```

Apertura de carta con animación: el componente empieza con `opacity: 0, scale: 0.95` y cuando entra en viewport hace `opacity: 1, scale: 1, transition: { duration: 1.2 }`.

**Texto completo de la carta** (ya redactado en `story.js` arriba).

---

### 6.7 `NurseTribute.jsx`
**Propósito:** Celebrar a Kiara como enfermera. Emotivo y orgulloso.

**Layout:**
```
┌──────────────────────────────────────┐
│  [bg: rose-deep, texto crema]        │
│                                      │
│     ✚ [Cruz SVG animada pulsando]    │
│                                      │
│  "Hoy el mundo celebra               │
│   a las enfermeras.                  │
│   Yo te celebro a ti."               │  ← Cormorant, italic
│                                      │
│  Bachiller · Cayetano Heredia        │
│  Auditora de Enfermería              │
│  Innomedic · San Borja               │
│                                      │
│  "Cuidas a otros como nadie.         │
│   Yo me encargo de cuidarte a ti."   │  ← Lora italic, gold
└──────────────────────────────────────┘
```

La cruz de enfermería SVG con `animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}` en loop suave de 2s.

---

### 6.8 `GoldenDivider.jsx`
**Propósito:** Separador visual entre secciones.

```jsx
// SVG de línea con gradiente + diamante central
<svg width="100%" height="20" viewBox="0 0 300 20">
  <defs>
    <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="transparent"/>
      <stop offset="30%" stopColor="#C9A96E"/>
      <stop offset="50%" stopColor="#C9748A"/>
      <stop offset="70%" stopColor="#C9A96E"/>
      <stop offset="100%" stopColor="transparent"/>
    </linearGradient>
  </defs>
  <line x1="0" y1="10" x2="300" y2="10" stroke="url(#gold-grad)" strokeWidth="1"/>
  <polygon points="150,4 156,10 150,16 144,10" fill="#C9748A" opacity="0.7"/>
</svg>
```

---

### 6.9 `ScrollReveal.jsx`
**Propósito:** Wrapper reutilizable para animaciones al hacer scroll.

```jsx
import { motion } from 'framer-motion';

export default function ScrollReveal({ 
  children, 
  direction = 'up',    // 'up' | 'left' | 'right' | 'fade'
  delay = 0,
  className = ''
}) {
  const variants = {
    up:    { hidden: { opacity: 0, y: 50 },  visible: { opacity: 1, y: 0 } },
    left:  { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 50 },  visible: { opacity: 1, x: 0 } },
    fade:  { hidden: { opacity: 0 },          visible: { opacity: 1 } },
  };
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      variants={variants[direction]}
    >
      {children}
    </motion.div>
  );
}
```

---

### 6.10 `Footer.jsx`

```
┌──────────────────────────────────┐
│  [bg cream-dark]                 │
│                                  │
│  Hecho con amor por Daniel       │  ← Lora
│  para Kiara                      │  ← Dancing Script, rose
│                                  │
│  12 de mayo de 2025              │  ← Lora, mauve, small
│  Día Internacional de la         │
│  Enfermera                       │
│                                  │
│  ❤️                              │
└──────────────────────────────────┘
```

---

## 7. Estructura de Archivos Completa

```
kiara-web/
├── public/
│   └── photos/
│       ├── photo-01.jpg    ← 4:5 ratio
│       ├── photo-02.jpg
│       ├── ...
│       └── photo-12.jpg
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── IntroQuote.jsx
│   │   ├── CounterStats.jsx
│   │   ├── OurStory.jsx
│   │   ├── PhotoGallery.jsx
│   │   ├── Letter.jsx
│   │   ├── NurseTribute.jsx
│   │   ├── Footer.jsx
│   │   └── ui/
│   │       ├── GoldenDivider.jsx
│   │       ├── ScrollReveal.jsx
│   │       └── FloatingHeart.jsx
│   ├── hooks/
│   │   ├── useCountUp.js
│   │   └── useDateCalc.js
│   ├── data/
│   │   └── story.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
├── tailwind.config.js      ← Si se necesita config adicional
├── package.json
├── .gitignore
└── vercel.json             ← Config básica Vercel
```

---

## 8. `App.jsx` — Composición de Secciones

```jsx
import Hero from './components/Hero';
import IntroQuote from './components/IntroQuote';
import CounterStats from './components/CounterStats';
import OurStory from './components/OurStory';
import { GoldenDivider } from './components/ui/GoldenDivider';
import PhotoGallery from './components/PhotoGallery';
import Letter from './components/Letter';
import NurseTribute from './components/NurseTribute';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--cream)' }}>
      <Hero />
      <IntroQuote />
      <GoldenDivider />
      <CounterStats />
      <GoldenDivider />
      <OurStory />
      <GoldenDivider />
      <PhotoGallery />
      <GoldenDivider />
      <Letter />
      <NurseTribute />
      <Footer />
    </main>
  );
}
```

---

## 9. Orden de Construcción para el Agente

Construir en este orden exacto para evitar dependencias rotas:

1. **Setup inicial** — `npm create vite`, instalar dependencias, configurar Tailwind v4
2. **`src/index.css`** — Variables CSS, Google Fonts, grain, estilos base
3. **`src/data/story.js`** — Todos los datos (sin fotos reales aún)
4. **`src/hooks/useDateCalc.js`** y **`useCountUp.js`**
5. **`src/components/ui/GoldenDivider.jsx`**
6. **`src/components/ui/ScrollReveal.jsx`**
7. **`src/components/ui/FloatingHeart.jsx`**
8. **`src/components/Hero.jsx`**
9. **`src/components/IntroQuote.jsx`**
10. **`src/components/CounterStats.jsx`**
11. **`src/components/OurStory.jsx`**
12. **`src/components/PhotoGallery.jsx`** — usar placeholders `https://picsum.photos/400/500?random={id}` temporales
13. **`src/components/Letter.jsx`**
14. **`src/components/NurseTribute.jsx`**
15. **`src/components/Footer.jsx`**
16. **`src/App.jsx`** — Ensamblar todo
17. **Prueba local** — `npm run dev`
18. **Agregar fotos reales** en `/public/photos/`
19. **Build** — `npm run build`
20. **Deploy Vercel** — `vercel --prod` o push a GitHub con integración Vercel

---

## 10. Configuración Vercel (`vercel.json`)

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/photos/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

---

## 11. Instrucciones para Agregar las Fotos

Las 12 fotos deben:
- Estar en formato `.jpg` o `.webp`
- Tener proporción **4:5** (ej. 800×1000 px, 1080×1350 px)
- Nombrarse exactamente: `photo-01.jpg`, `photo-02.jpg`, ..., `photo-12.jpg`
- Colocarse en `/public/photos/`

Si las fotos no son 4:5, el CSS las recorta con `object-fit: cover` dentro del contenedor `aspect-[4/5]`, por lo que siempre se verá bien.

**Para las primeras 4 fotos del timeline**, idealmente elegir las más representativas de cada cita. El resto va a la galería general.

---

## 12. Consideraciones de Rendimiento

- **Imágenes:** Usar formato `.webp` si es posible. Vite + Vercel harán el resto.
- **Framer Motion:** Importar solo los módulos necesarios (`{ motion }` no el bundle completo)
- **Google Fonts:** Preconectar en `index.html`:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  ```
- **Swiper CSS:** Importar solo los módulos usados (no el bundle completo de Swiper)

---

## 13. Checklist Final antes del Deploy

- [ ] Las 12 fotos están en `/public/photos/` con los nombres correctos
- [ ] La fecha de aniversario en `story.js` es `new Date("2024-05-02")`
- [ ] El contador de días muestra un número correcto al día de hoy
- [ ] Swiper funciona en mobile (swipe táctil)
- [ ] `ScrollReveal` funciona en todas las secciones
- [ ] La carta se lee completa sin overflow
- [ ] El hero ocupa 100vh en mobile
- [ ] Todas las fotos tienen `alt` descriptivo
- [ ] `npm run build` sin errores
- [ ] Preview en mobile (Chrome DevTools → iPhone 14 Pro)
- [ ] Deploy exitoso en Vercel

---

## 14. Nota al Agente

Este proyecto tiene un peso emocional real. Daniel lo creará para sorprender a Kiara el día de su carrera. Prioriza:

1. **Que se vea increíble en mobile** — ella lo abrirá desde su celular
2. **Que cargue rápido** — la primera impresión no puede esperar
3. **Que la carta se sienta íntima y humana** — es el corazón de todo
4. **Que las fotos sean las protagonistas** — 12 recuerdos reales valen más que cualquier efecto

Si algo tiene que sacrificarse por tiempo, sacrifica complejidad visual, nunca la carta ni la galería.

---

*Plan creado el 12 de mayo de 2026 — Día Internacional de la Enfermera.*
*Para Kiara, con el amor de Daniel.* ❤️

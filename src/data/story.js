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
        "Te recogí afuera de Cayetano Heredia. Ibas con ropa negra y un poco nerviosa. Fuimos a Norkys en Plaza Norte y compartimos pollo a la brasa mientras el tiempo se hacía corto.",
      photo: "/images/primera-vez.gif",
      emoji: "🍗",
    },
    {
      id: 2,
      date: "Poco después",
      title: "Las bancas de Plaza Norte",
      description:
        "Papa John's estaba cerrado. Nos sentamos en unas bancas y hablamos durante horas. No importaba el lugar. Importaba que estabas tú.",
      photo: "/images/plaza-norte.jpeg",
      emoji: "🪑",
    },
    {
      id: 3,
      date: "La tercera cita",
      title: "El parque y el primer beso",
      description:
        "Nos echamos en el pasto bajo el cielo abierto. Y en algún momento entre una conversación y otra, sucedió. Ese beso que cambió todo.",
      photo: "/images/beso-parque.gif",
      emoji: "🌿",
    },
    {
      id: 4,
      date: "2 de mayo de 2024",
      title: "El día que me dijiste que sí",
      description:
        "Nuestro día. Me miraste y lo entendimos sin necesidad de muchas palabras. Desde ese momento, somos nosotros.",
      photo: "/images/eres-mia.jpg",
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

Hoy, 12 de mayo, el Día Internacional de la Enfermera, no podía dejar pasar este momento sin decirte todo lo que guardo adentro.

Te conocí como Abigail. Así te llamaban todos. Pero yo encontré a Kiara. La que me habló con honestidad desde el primer mensaje, la que se subió a ese carro sin conocerme del todo, la que me contó sus anécdotas mientras el tráfico nos detenía camino a Plaza Norte. Ese día, compartiendo pollo a la brasa en Norkys, no sabía que algo en mi vida iba a cambiar. 

Vinieron más tardes. La de las bancas donde Papa John's estaba cerrado pero a ninguno de los dos nos importó. La del parque donde el tiempo pareció detenerse. Y el 2 de mayo, nuestro día, cuando te miré a los ojos y supe que quería que fueras mía, y yo tuyo.

Cada mesario que pasa me recuerda lo fácil que es amarte. No porque todo sea perfecto, sino porque contigo hasta lo imperfecto se siente bien.

Elegiste una carrera que pocos comprenden hasta que la necesitan. Cuidar a otros requiere una fuerza que no se aprende en libros, se trae adentro, se cultiva con paciencia, con vocación, con humanidad. Tú la tienes. La vi desde la primera vez que me hablaste de tus ciclos, de tus prácticas, de todo lo que dabas sin pedirte nada a cambio.

Hoy el mundo celebra a las enfermeras. Yo te celebro a ti, mi seccionario, mi osita. No solo por lo que haces en actualmente como auditora, sino por todo lo que eres cada vez que nos vemos: La que ríe fuerte, la que abraza con ganas, la que hace que cualquier lugar ordinario se sienta especial.

Gracias por elegirme también.

Con todo mi amor,
Daniel ❤️`,
  },

  nurses: {
    workplace: "Clínica Innomedic",
    role: "Auditora de Enfermería",
    university: "Universidad Peruana Cayetano Heredia",
    degree: "Bachiller en Enfermería (Mi enfermera)",
  },
};

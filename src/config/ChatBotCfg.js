const botName = 'Botie'

const messageResponses = {
  bienvenido: `Hola, soy ${botName}. Fui creado para responder preguntas sobre algunos aspectos profesionales y personales de Pablo. ¿Qué deseas saber?`,
  hola: '¡Hola! ¿Cómo puedo ayudarte hoy?',
  adios: '¡Hasta la próxima!',
  adiós: '¡Hasta la próxima!',
  chau: '¡Nos vemos pronto!',
  estas: 'Estoy bien, gracias. ¿Y tú?',
  estás: 'Estoy bien, gracias. ¿Y tú?',
  gracias: '¡De nada! Siempre aquí para ayudar.',
  tal: '¡Todo bien! ¿Y tú?',

  tecnologias: 'Mis herramientas principales son ReactJS para el frontend y Spring Boot para el backend.',
  tecnologías: 'Mis herramientas principales son ReactJS para el frontend y Spring Boot para el backend.',
  frontend: 'En el frontend, trabajo con ReactJS para construir interfaces modernas y dinámicas. También manejo JavaScript puro y tecnologías relacionadas como CSS y HTML.',
  backend: 'En el backend, utilizo Spring Boot, JPA e Hibernate para construir APIs RESTful robustas y escalables.',
  fullstack: 'Soy capaz de trabajar como desarrollador fullstack, combinando ReactJS en el frontend y Spring Boot en el backend para crear aplicaciones completas.',
  arquitectura: 'Me especializo en diseñar arquitecturas escalables utilizando principios como la separación de responsabilidades y modularidad.',
  baseDeDatos: 'Trabajo principalmente con bases de datos relacionales como MySQL y MongoDB, utilizando JPA e Hibernate para la persistencia de datos.',
  metodologias: 'Uso metodologías ágiles como Scrum para gestionar proyectos de manera eficiente. También sigo principios como KISS (Keep It Simple, Stupid) y DRY (Don\'t Repeat Yourself) para mantener el código limpio, simple y fácil de mantener.',

  proyectos: 'He trabajado en diversos proyectos, incluyendo plataformas de gestión de tareas, aplicaciones web interactivas y APIs RESTful escalables.',
  aprendizajes: 'Recientemente he aprendido sobre microservicios, optimización de rendimiento en ReactJS y mejores prácticas en APIs RESTful.',
  retos: 'Mantener el equilibrio entre velocidad de desarrollo y calidad del software es uno de los mayores retos que enfrento.',
  colaboracion: 'Disfruto colaborar en equipo utilizando Git y plataformas como GitHub para gestionar proyectos.',

  hobbies: 'En mi tiempo libre, disfruto aprender sobre tecnología, explorar la naturaleza y jugar videojuegos.',
  pasatiempos: 'Me encanta programar, leer sobre innovación tecnológica y pasar tiempo con mi familia.',
  motivacion: 'Mi principal motivación es crear soluciones que hagan la vida más fácil a las personas.',
  perfil: 'Soy una persona apasionada por la tecnología, con habilidades en desarrollo fullstack y una mentalidad orientada a la resolución de problemas.',
  idiomas: 'Hablo español como idioma nativo y manejo inglés en un nivel avanzado, especialmente para temas técnicos.',

  default: 'Lo siento, no entendí eso. ¿Puedes reformular tu pregunta?',
  info: 'Soy un chatbot diseñado para responder preguntas sobre Pablo y su experiencia profesional. ¡Pregunta lo que quieras saber!',
  contacto: 'Puedes contactar a Pablo a través de su correo profesional o LinkedIn. ¡Déjame saber si necesitas los detalles!'
}

const config = {
  botName,
  initialMessage: messageResponses.bienvenido
}

export { config, messageResponses }

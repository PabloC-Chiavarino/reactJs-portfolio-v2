const botName = 'Botie'

const messageResponses = {
  es: {
    bienvenido: `Hola, soy ${botName}. Fui creado para responder en nombre de Pablo sobre sus aspectos profesionales y personales. ¿Qué deseas saber?`,
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
    herramientas: 'Trabajo con herramientas como Git para control de versiones, Swagger para documentación, y editores como VSCode e IntelliJ. También utilizo Postman para pruebas de APIs.',
    backend: 'En el backend, utilizo Spring Boot, JPA e Hibernate para construir APIs RESTful robustas y escalables.',
    fullstack: 'Soy capaz de trabajar como desarrollador fullstack, combinando ReactJS en el frontend y Spring Boot en el backend para crear aplicaciones completas.',
    arquitectura: 'Me especializo en diseñar arquitecturas escalables utilizando principios como la separación de responsabilidades y modularidad.',
    metodologias: 'Uso metodologías ágiles como Scrum para gestionar proyectos de manera eficiente. También sigo principios como KISS (Keep It Simple, Stupid) y DRY (Don\'t Repeat Yourself) para mantener el código limpio, simple y fácil de mantener.',

    proyectos: 'He trabajado en diversos proyectos, incluyendo plataformas de gestión de tareas, aplicaciones web interactivas y APIs RESTful escalables.',
    experiencia: 'He trabajado en una startup llamada BackLab Strategies, donde fui el desarrollador principal. Era parte de un equipo pequeño de dos desarrolladores, trabajando en estrecha colaboración con un equipo de UX/UI para crear soluciones innovadoras. Mi rol incluyó tanto el diseño como la implementación de funcionalidades clave en proyectos de desarrollo.',
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
  },
  en: {
    welcome: `Hello, I’m ${botName}. I was created to answer on behalf of Pablo about his professional and personal aspects. What would you like to know?`,
    hello: 'Hello! How can I help you today?',
    goodbye: 'See you next time!',
    bye: 'See you soon!',
    thank: 'You’re welcome! Always here to help.',
    good: 'I’m doing well! How about you?',

    technologies: 'My main tools are ReactJS for the frontend and Spring Boot for the backend.',
    frontend: 'For the frontend, I work with ReactJS to build modern and dynamic interfaces. I also work with plain JavaScript and related technologies like CSS and HTML.',
    backend: 'For the backend, I use Spring Boot, JPA, and Hibernate to build robust and scalable RESTful APIs.',
    tools: 'I work with tools like Git for version control, Swagger for documentation, and editors like VSCode and IntelliJ. I also use Postman for API testing.',
    fullstack: 'I’m capable of working as a fullstack developer, combining ReactJS on the frontend and Spring Boot on the backend to create complete applications.',
    architecture: 'I specialize in designing scalable architectures using principles like responsibility separation and modularity.',
    databases: 'I primarily work with relational databases like MySQL and MongoDB, using JPA and Hibernate for data persistence.',
    methodologies: 'I use agile methodologies like Scrum to efficiently manage projects. I also follow principles like KISS (Keep It Simple, Stupid) and DRY (Don’t Repeat Yourself) to keep the code clean, simple, and easy to maintain.',

    projects: 'I have worked on various projects, including task management platforms, interactive web applications, and scalable RESTful APIs.',
    experience: 'I have worked at a startup called BackLab Strategies, where I was the lead developer. I was part of a small team of two developers, working closely with a UX/UI team to create innovative solutions. My role included both designing and implementing key features in development projects.',
    learning: 'I’ve recently learned about microservices, performance optimization in ReactJS, and best practices in RESTful APIs.',
    challenges: 'Maintaining a balance between development speed and software quality is one of the biggest challenges I face.',
    collaboration: 'I enjoy collaborating in a team using Git and platforms like GitHub to manage projects.',

    hobbies: 'In my free time, I enjoy learning about technology, exploring nature, and playing video games.',
    pastimes: 'I love coding, reading about technological innovations, and spending time with my family.',
    motivation: 'My main motivation is to create solutions that make people’s lives easier.',
    profile: 'I am a technology enthusiast with skills in fullstack development and a problem-solving mindset.',
    languages: 'I speak Spanish as my native language and have an advanced level of English, especially for technical topics.',

    default: 'Sorry, I didn’t understand that. Could you please rephrase your question?',
    info: 'I’m a chatbot designed to answer questions about Pablo and his professional experience. Feel free to ask anything!',
    contact: 'You can contact Pablo via his professional email or LinkedIn. Let me know if you need the details!'
  }
}

const config = {
  botName,
  es: {
    initialMessage: messageResponses.es.bienvenido
  },
  en: {
    initialMessage: messageResponses.en.welcome
  }
}

export { config, messageResponses }

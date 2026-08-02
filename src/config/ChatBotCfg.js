const botName = 'Nexo'

const messageResponses = {
  es: {
    bienvenido: `Hola, soy ${botName}. Fui creado para responder sobre Pablo y sus aspectos profesionales y personales. ¿Qué deseas saber?`,
    hola: '¡Hola! ¿En qué puede ayudarte hoy?',
    adios: '¡Hasta la próxima!',
    adiós: '¡Hasta la próxima!',
    chau: '¡Nos vemos pronto!',
    estas: 'Bien, gracias por preguntar.',
    estás: 'Bien, gracias por preguntar.',
    gracias: '¡De nada! Siempre es un placer ayudar.',
    tal: '¡Todo bien! Espero que tú también estés bien.',
    andas: 'Bien, gracias por preguntar.',

    stack: 'El stack principal de Pablo incluye React para el frontend, JavaScript, HTML y CSS, y Java con Spring Boot para el desarrollo de APIs en el backend.',
    tecnologias: 'Las herramientas principales de Pablo son React para el frontend y Spring Boot para el backend.',
    tecnologías: 'Las herramientas principales de Pablo son React para el frontend y Spring Boot para el backend.',
    frontend: 'En el frontend, Pablo trabaja principalmente con React para construir interfaces modernas y dinámicas. También utiliza JavaScript, HTML y CSS.',
    herramientas: 'Pablo trabaja con herramientas como Git para control de versiones, Swagger para documentación, y editores como VSCode e IntelliJ. También utiliza Postman para pruebas de APIs.',
    backend: 'En el backend, Pablo utiliza Spring Boot, JPA e Hibernate para construir APIs RESTful robustas y escalables.',
    fullstack: 'Pablo tiene la capacidad de trabajar como desarrollador fullstack combinando React en el frontend y Spring Boot en el backend.',
    arquitectura: 'Pablo se enfoca en diseñar arquitecturas escalables utilizando principios como la separación de responsabilidades y la modularidad.',
    metodologias: 'Pablo utiliza metodologías ágiles como Scrum para gestionar proyectos. También aplica principios como KISS y DRY para mantener el código limpio y mantenible.',

    proyectos: 'Pablo ha trabajado en diversos proyectos, incluyendo plataformas de gestión de tareas, aplicaciones web interactivas y APIs RESTful.',
    experiencia: 'Pablo trabajó en una startup llamada BackLab Strategies, donde fue el desarrollador, colaborando estrechamente con diseñadores UX/UI.',
    aprendizajes: 'Pablo ha estado aprendiendo sobre microservicios, optimización de rendimiento en React y buenas prácticas en APIs REST.',
    retos: 'Uno de los retos que Pablo enfrenta es mantener el equilibrio entre velocidad de desarrollo y calidad del software.',
    colaboracion: 'Pablo disfruta colaborar en equipo utilizando Git y plataformas como GitHub para gestionar proyectos.',

    hobbies: 'En su tiempo libre, Pablo disfruta aprender sobre tecnología, explorar la naturaleza y jugar videojuegos.',
    pasatiempos: 'A Pablo le gusta programar, leer sobre innovación tecnológica, informarse sobre divulgación científica y pasar tiempo con su familia.',
    motivacion: 'La principal motivación de Pablo es crear soluciones que hagan la vida más fácil a las personas.',
    perfil: 'Pablo es una persona apasionada por la tecnología, con habilidades en desarrollo frontend y experiencia trabajando con backend.',
    idiomas: 'Pablo habla español como idioma nativo y maneja inglés en un nivel avanzado, especialmente para temas técnicos.',

    default: 'Lo siento, no se encontró una respuesta específica para esa pregunta. Puedes intentar formularla de otra manera.',
    info: `Hola, soy ${botName}. Fui creado para responder preguntas sobre Pablo, su experiencia profesional y algunos aspectos personales. ¿Qué te gustaría saber?`,
    contacto: 'Puedes contactar a Pablo a través de su correo, Github, LinkedIn o WhatsApp.'
  },

  en: {
    welcome: `Hello, I’m ${botName}. I was created to answer questions about Pablo and his professional and personal background. What would you like to know?`,
    hello: 'Hello! How can I help you today?',
    goodbye: 'See you next time!',
    bye: 'See you soon!',
    thank: 'You’re welcome! Happy to help.',
    good: 'Im doing well, thanks for asking.',

    stack: 'Pablo’s main stack includes React for frontend development, JavaScript, HTML, and CSS, along with Java and Spring Boot for backend APIs.',
    technologies: 'Pablo’s main tools are React for the frontend and Spring Boot for the backend.',
    frontend: 'For frontend development, Pablo mainly works with React to build modern and dynamic interfaces. He also uses JavaScript, HTML, and CSS.',
    backend: 'For backend development, Pablo uses Spring Boot, JPA, and Hibernate to build robust and scalable RESTful APIs.',
    tools: 'Pablo works with tools such as Git for version control, Swagger for API documentation, and editors like VSCode and IntelliJ. He also uses Postman for API testing.',
    fullstack: 'Pablo has the ability to work as a fullstack developer combining React on the frontend and Spring Boot on the backend.',
    architecture: 'Pablo focuses on designing scalable architectures using principles like separation of responsibilities and modular design.',
    databases: 'Pablo works mainly with relational databases using technologies like JPA and Hibernate for data persistence.',
    methodologies: 'Pablo uses agile methodologies such as Scrum and follows principles like KISS and DRY to keep code clean and maintainable.',

    projects: 'Pablo has worked on various projects including task management platforms, interactive web applications, and scalable REST APIs.',
    experience: 'Pablo worked at a startup called BackLab Strategies where he was the developer collaborating closely with a UX/UI team.',
    learning: 'Pablo has been learning about microservices, React performance optimization, and best practices for REST APIs.',
    challenges: 'One of the challenges Pablo faces is balancing development speed with software quality.',
    collaboration: 'Pablo enjoys collaborating in teams using Git and platforms like GitHub.',

    hobbies: 'In his free time, Pablo enjoys learning about technology, exploring nature, and playing video games.',
    pastimes: 'Pablo enjoys coding, reading about technological innovation, learning about scientific outreach, and spending time with his family.',
    motivation: 'Pablo’s main motivation is creating solutions that make people’s lives easier.',
    profile: 'Pablo is passionate about technology, with strong frontend skills and experience working with backend systems.',
    languages: 'Pablo speaks Spanish as his native language and has an advanced level of English, especially for technical topics.',

    default: 'Sorry, a specific answer was not found for that question. Please try asking in another way.',
    info: 'I was created to answer questions about Pablo and his professional and personal background. What would you like to know?',
    contact: 'You can contact Pablo through his email, Github, LinkedIn or WhatsApp.'
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

const botName = "Botie";

const messageResponses = {
    bienvenido: `Hola, soy ${botName}. Fui creado para responder a preguntas sobre algunos aspectos profesionales y personales sobre Pablo. ¿Qué deseas saber?`,
    hola: "¡Hola! ¿Puedo ayudarte?",
    adios: "¡Hasta la próxima!",
    adiós: "¡Hasta la próxima!",
    chau: "¡Hasta luego!",
    estas: "Estoy bien y tu?",
    estás: "Estoy bien y tu?",
    gracias: "De nada!",
    tal: "Estoy bien y usted?",
    tecnologias: `Las tecnologías que utilizo principalmente son ReactJS para el frontend y Spring Boot para el backend.`,
    tecnologías: `Las tecnologías que utilizo principalmente son ReactJS para el frontend y Spring Boot para el backend.`,
    frontend: `En el frontend, mi herramienta preferida es ReactJS. Con ella, creo interfaces de usuario modernas y dinámicas que mejoran la experiencia del usuario. Además, manejo JavaScript puro ("vanilla") para construir soluciones ligeras y optimizadas, sin depender de bibliotecas adicionales. Si tienes alguna duda sobre estas tecnologías o cómo las utilizo, ¡pregunta sin problema!`,
    backend: `En el backend, trabajo principalmente con Spring Boot, una plataforma robusta y eficiente para desarrollar servicios. Utilizo JPA e Hibernate para la gestión de datos y la persistencia, lo que me permite crear APIs RESTful escalables y seguras. Siempre estoy enfocado en optimizar el rendimiento y asegurar que las aplicaciones puedan manejar una gran cantidad de usuarios simultáneamente. Si te interesa saber más sobre cómo desarrollo APIs, ¡pregúntame!`,
    arquitectura: `Mi enfoque en la arquitectura de software es siempre crear soluciones escalables y sostenibles. Utilizo principios como la separación de responsabilidades, la modularidad y el desacoplamiento de servicios para asegurar que el software sea fácil de mantener a largo plazo. En mis proyectos, trato de balancear la eficiencia del código con la facilidad de ampliación y mantenimiento. Siempre me aseguro de que el sistema sea flexible y pueda adaptarse al crecimiento de las necesidades del negocio.`,
    metodologias: `En mis proyectos, aplico metodologías ágiles como Scrum y Kanban para gestionar el trabajo y asegurar una entrega continua de valor. Esto me permite tener ciclos de desarrollo cortos y ajustarme rápidamente a los cambios de requisitos. También hago un uso intensivo de pruebas unitarias e integración continua para garantizar que cada parte del sistema funcione correctamente antes de ser integrada al resto del proyecto. La calidad del código y la rapidez de entrega son siempre mis prioridades.`,
    herramientas: `Mi flujo de trabajo está respaldado por un conjunto de herramientas que optimizan tanto el desarrollo frontend como backend. Para crear interfaces de usuario dinámicas y optimizadas, utilizo ReactJS junto con herramientas como Webpack y Babel, que me permiten gestionar el bundling y la transpilación del código. En el backend, Spring Boot es mi marco de trabajo principal para crear APIs robustas, mientras que utilizo JPA e Hibernate para gestionar la persistencia de datos de manera eficiente. Para mantener la calidad y la estabilidad del código, empleo herramientas de testing como JUnit en el backend y pruebas de integración para asegurar que todo el sistema funcione perfectamente. Además, con Git y GitHub gestiono el código fuente y colaboro en equipo.`,
    proyectos: `He trabajado en algunos proyectos!! .. desde aplicaciones web interactivas hasta APIs RESTful robustas. En un proyecto reciente, diseñé una plataforma de gestión de tareas utilizando ReactJS en el frontend y Spring Boot en el backend, con JPA para la persistencia. El sistema fue escalado para soportar miles de usuarios simultáneos. Si deseas conocer más detalles sobre mis proyectos o ejemplos específicos, ¡no dudes en preguntar!`,
    aprendizajes: `Me encanta aprender y constantemente busco mejorar mis habilidades. Algunos de los últimos temas que he estudiado incluyen el uso de microservicios en Spring Boot, la optimización de rendimiento en aplicaciones ReactJS, y las mejores prácticas en la implementación de APIs RESTful. También me interesa explorar nuevas herramientas y tecnologías según las necesidades planteadas.`,
    retos: `Uno de los mayores retos que enfrento como desarrollador es mantener un equilibrio entre la velocidad de desarrollo y la calidad del software. Aunque siempre busco entregar soluciones de manera rápida y eficiente, también me esfuerzo por asegurarme de que el código sea limpio, bien documentado y fácil de mantener a largo plazo. Además, enfrentarme a nuevos desafíos tecnológicos y estar al día con las mejores prácticas es algo que me mantiene motivado.`,
    default: "Lo siento, no entendí eso.",
}

const config = {
  botName: botName,
  initialMessage: messageResponses.bienvenido 
}


export { config, messageResponses };

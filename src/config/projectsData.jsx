import { ProjectImg1, ProjectImg2, ProjectImg3, ProjectImg4, ProjectImg5 } from '../assets/Images'

export const projectsData = {
  es: {
    title: 'Proyectos',
    introduction: <p>Aquí encontrarás algunos de los proyectos en los que he trabajado, cada uno reflejando mis habilidades, mi enfoque en <span className='text-highlightA'>crear soluciones funcionales y bien estructuradas,</span> y mi compromiso con las <span className='text-highlightB'>buenas prácticas</span> en el desarrollo.</p>,
    projects: [
      {
        title: 'BackLab Strategies',
        subtitle: 'Proyecto Front-End',
        description: 'Desarrollado con ReactJS y utilizando librerías como Toastify y EmailJS, este sitio web dinámico sigue un diseño proporcionado por un equipo de UX/UI bajo la metodología pixel perfect. Integra animaciones avanzadas creadas con CSS y la API Intersection Observer para ofrecer una experiencia visual precisa y atractiva. Entre sus funcionalidades se incluyen un formulario de contacto con opciones, solicitud de turnos en línea y selección de idioma (EN/ES), demostrando un enfoque centrado en la experiencia del usuario.',
        url: 'https://backlab-strategies.vercel.app',
        image: ProjectImg1
      },
      {
        title: 'Admin Panel',
        subtitle: 'Proyecto Front-End',
        description: 'Desarrollado con React, TypeScript y Material UI, este panel de administración integral ofrece una gestión integral y eficiente de clientes, productos y facturas mediante tablas interactivas. También incluye mini apps integradas como un Tasker y un Calendario, ambas con funcionalidades drag-and-drop. Además, presenta métricas clave en un dashboard principal y una sección de analíticas con gráficos dinámicos. Actualmente está conectado a un mock server con JSON Server para la gestión de datos y autenticación de un usuario de prueba.',
        url: 'https://react-ts-adminpanel-webapp.vercel.app',
        image: ProjectImg3
      },
      {
        title: 'Notebook Depot',
        subtitle: 'Proyecto Front-End',
        description: 'Construido con ReactJS y utilizando librerías como Toastify, EmailJS y Stripe, este proyecto es una maqueta de una tienda online especializada en laptops. Ofrece un catálogo de productos sencillo con un carrito de compras avanzado para gestionar los artículos seleccionados. Entre sus funcionalidades se incluyen notificaciones emergentes en el carrito, un cargador dinámico para la carga de productos, selección de favoritos, gestión de pedidos y un sistema de usuarios. Utiliza una base de datos alojada en Firebase para almacenar y administrar los datos del sitio. Actualmente me encuentro desarrollando la version mobile.',
        url: 'https://notebook-depot.vercel.app/',
        image: ProjectImg2
      },
      {
        title: 'Beyond Time',
        subtitle: 'Proyecto Front-End',
        description: 'Beyond Time es una aplicación web interactiva que transforma tu fecha de nacimiento en una serie de datos curiosos y visuales sobre tu vida. A partir de tu edad, calcula estimaciones como la cantidad total de latidos de tu corazón, los kilovatios generados por tu cuerpo, cuántos amaneceres has vivido y cuántos minutos han pasado desde tu nacimiento, entre otros. El recorrido culmina con un “reloj de la vida”, una representación analógica de tu edad en una vida promedio de 80 años, mostrando simbólicamente en qué momento vital te encontrás, como si fuera la hora del día.',
        url: 'https://btimeproject.vercel.app',
        image: ProjectImg4
      },
      {
        title: 'E-commerce API REST',
        subtitle: 'Proyecto Back-End',
        description: 'Desarrollada en Java con Spring Boot y JPA, esta API RESTful gestiona Productos, Órdenes, Facturas y Clientes, implementando operaciones CRUD y funciones avanzadas como la creación de facturas asociadas a clientes y la búsqueda de productos por código o marca. Utiliza DTOs y mappers para evitar ciclos infinitos en relaciones bidireccionales, controladores genéricos que siguen el principio DRY. Construí un frontend básico con ReactJS, TypeScript y MUI para demostrar sus funcionalidades principales. Además, está documentada con Swagger, para facilitar pruebas y mejorar la experiencia de desarrollo.',
        url2: 'https://java-jpa-sb-ecommerceapirest-demo.onrender.com/swagger-ui/index.html',
        url: 'https://ecomm-api-showcase.vercel.app',
        image: ProjectImg5
      }
    ]
  },
  en: {
    title: 'Projects',
    introduction: <p>Here you will find some of the projects I have worked on, each reflecting my skills, my focus on <span className='text-highlightA'>creating functional and well-structured solutions,</span> and my commitment to <span className='text-highlightB'>best practices</span> in development.</p>,
    projects: [
      {
        title: 'BackLab Strategies',
        subtitle: 'Front-End Project',
        description: 'Developed with ReactJS and using libraries like Toastify and EmailJS, this dynamic website follows a design provided by a UX/UI team under the pixel-perfect methodology. It integrates advanced animations created with CSS and the Intersection Observer API to deliver a precise and visually appealing experience. Features include a contact form with options, online appointment scheduling, and language selection (EN/ES), demonstrating a user-centered approach.',
        url: 'https://backlab-strategies.vercel.app',
        image: ProjectImg1
      },
      {
        title: 'Admin Panel',
        subtitle: 'Front-End Project',
        description: 'Developed with React, TypeScript, and Material UI, this comprehensive admin panel provides efficient and centralized management of clients, products, and invoices through interactive tables. It also includes integrated mini-apps such as a Tasker and a Calendar, both featuring drag-and-drop functionality. In addition, it presents key metrics on a main dashboard and an analytics section with dynamic charts. It is currently connected to a mock server using JSON Server for data management and test user authentication.',
        url: 'https://gadget-alley.vercel.app',
        image: ProjectImg3
      },
      {
        title: 'Notebook Depot',
        subtitle: 'Front-End Project',
        description: 'Built with ReactJS and utilizing libraries like Toastify, EmailJS and Stripe, this project is a mockup of an online store specializing in laptops. It offers a simple product catalog with an advanced shopping cart to manage selected items. Features include pop-up notifications in the cart, a dynamic loader for product loading, favorite selection, order management, and a user system. It uses a Firebase-hosted database to store and manage site data. I am currently developing the mobile version.',
        url: 'https://notebook-depot.vercel.app/',
        image: ProjectImg2
      },
      {
        title: 'Beyond Time',
        subtitle: 'Front-End Project',
        description: 'Beyond Time is an interactive web application that transforms your birth date into a series of curious and visual insights about your life. Based on your age, it estimates things like the total number of heartbeats, the kilowatts your body has generated, how many sunrises you’ve experienced, and how many minutes have passed since you were born, among others. The experience concludes with a “life clock” — an analog representation of your age within an average 80-year lifespan, symbolically showing what stage of life you’re in, as if it were a time of day.',
        url: 'https://btimeproject.vercel.app',
        image: ProjectImg4
      },
      {
        title: 'E-commerce API REST',
        subtitle: 'Back-End Project',
        description: 'Developed in Java with Spring Boot and JPA, this RESTful API manages Products, Orders, Invoices, and Clients, implementing CRUD operations and advanced functions such as creating invoices linked to clients and searching for products by code or brand. It uses DTOs and mappers to avoid infinite loops in bidirectional relationships, generic controllers following the DRY principle. I also built a basic frontend with ReactJS, TypeScript, and MUI to demonstrate its main functionalities. Additionally, it is documented with Swagger to facilitate testing and improve the development experience.',
        url: 'https://java-jpa-sb-ecommerceapirest-demo.onrender.com/swagger-ui/index.html',
        image: ProjectImg5
      }
    ]
  }
}

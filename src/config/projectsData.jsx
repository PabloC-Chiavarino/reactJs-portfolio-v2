import {
  ProjectImg0,
  ProjectImg1,
  ProjectImg2,
  ProjectImg3,
  ProjectImg4,
  ProjectImg5
} from '../assets/Images'

export const projectsData = {
  es: {
    title: 'Proyectos',
    introduction: (
      <p>
        Aquí encontrarás algunos de los proyectos en los que he trabajado, cada
        uno reflejando mis habilidades, mi enfoque en{' '}
        <span className='text-highlightA'>
          crear soluciones funcionales y bien estructuradas,
        </span>{' '}
        y mi compromiso con las{' '}
        <span className='text-highlightB'>buenas prácticas</span> en el
        desarrollo.
      </p>
    ),
    projects: [
      {
        title: 'LinkItly',
        subtitle: 'SaaS (Beta · Próximamente)',
        description: 'Desarrollado con React, TypeScript, Material UI y Supabase, LinkItly es una plataforma SaaS de gestión de turnos orientada a profesionales independientes. Permite configurar disponibilidad semanal, tipos de servicio y horarios bloqueados, y genera una página pública de reservas personalizada por slug donde los clientes pueden reservar turnos en tiempo real sin necesidad de registrarse. Incluye un panel de administración con vista de calendario semanal y lista de reservas, sistema de notificaciones, envío automático de emails de confirmación al cliente y al profesional, y gestión de clientes. El backend está construido sobre PostgreSQL con Row Level Security, funciones RPC con SECURITY DEFINER y vistas públicas para exponer solo los datos necesarios a usuarios anónimos de forma segura.',
        url: 'https://linkitly-webapp.vercel.app/',
        image: ProjectImg0
      },
      {
        title: 'BackLab Strategies',
        subtitle: 'Frontend',
        description:
          'Desarrollado con React, JavaScript, CSS y utilizando librerías como Toastify y EmailJS, este sitio web sigue un diseño proporcionado por un equipo de UX/UI bajo la metodología pixel perfect. Integra animaciones avanzadas creadas con CSS y la API Intersection Observer para ofrecer una experiencia visual precisa y atractiva. Entre sus funcionalidades se incluyen un formulario de contacto con opciones, solicitud de turnos en línea y selección de idioma (EN/ES), demostrando un enfoque centrado en la experiencia del usuario.',
        url: 'https://backlab-strategies.vercel.app',
        image: ProjectImg1
      },
      {
        title: 'Nexo',
        subtitle: 'Frontend',
        description:
          'Desarrollado con React, TypeScript y Material UI, Nexo es un panel de administración que ofrece una gestión integral y eficiente de clientes, productos y facturas mediante tablas interactivas. También incluye mini apps integradas como un Tasker y un Calendario, ambas con funcionalidades drag-and-drop. Además, presenta métricas clave en un dashboard principal y una sección de analíticas con gráficos dinámicos. Actualmente está conectado a un mock server con JSON Server para la gestión de datos y autenticación de un usuario de prueba.',
        url: 'https://react-ts-adminpanel-webapp.vercel.app',
        image: ProjectImg3
      },
      {
        title: 'Notebook Depot',
        subtitle: 'Frontend',
        description:
          'Desarrollado con React, JavaScript y CSS, utilizando librerías como Toastify, EmailJS y Stripe, este proyecto es una demo de una tienda online especializada en laptops. Ofrece un catálogo de productos sencillo con un carrito de compras avanzado para gestionar los artículos seleccionados. Entre sus funcionalidades se incluyen notificaciones emergentes en el carrito, un cargador dinámico para la carga de productos, selección de favoritos, gestión de pedidos y un sistema de usuarios. Utiliza una base de datos alojada en Firebase para almacenar y administrar los datos del sitio. Actualmente me encuentro desarrollando la version mobile.',
        url: 'https://notebook-depot.vercel.app/',
        image: ProjectImg2
      },
      {
        title: 'Beyond Time',
        subtitle: 'Frontend',
        description:
          'Desarrollada con React, JavaScript y CSS, Beyond Time es una aplicación web con animaciones nativas que transforma tu fecha de nacimiento en una serie de datos curiosos y visuales sobre tu vida. A partir de tu edad, calcula estimaciones como la cantidad total de latidos de tu corazón, los kilovatios generados por tu cuerpo, cuántos amaneceres has vivido y cuántos minutos han pasado desde tu nacimiento, entre otros. El recorrido culmina con un “reloj de la vida”, una representación analógica de tu edad en una vida promedio de 80 años, mostrando simbólicamente en qué momento vital te encontrás, como si fuera la hora del día.',
        url: 'https://btimeproject.vercel.app',
        image: ProjectImg4
      },
      {
        title: 'E-commerce API REST',
        subtitle: 'Backend',
        description:
          'Desarrollada en Java con Spring Boot y JPA, esta API RESTful gestiona Productos, Órdenes, Facturas y Clientes, implementando operaciones CRUD junto con funcionalidades avanzadas como la creación de facturas asociadas a clientes y la búsqueda de productos por código o marca. La aplicación utiliza DTOs y mappers para evitar recursión infinita en relaciones bidireccionales y aplica controladores genéricos siguiendo el principio DRY para mantener una arquitectura limpia y mantenible. También expone un endpoint de health check monitoreado con UptimeRobot. Construí un frontend sencillo con React, TypeScript y MUI para demostrar sus funcionalidades principales, y la API está completamente documentada con Swagger para facilitar pruebas y mejorar la experiencia de desarrollo.',
        url2: 'https://java-jpa-sb-ecommerceapirest-demo.onrender.com/swagger-ui/index.html',
        url: 'https://ecomm-api-showcase.vercel.app',
        image: ProjectImg5
      }
    ]
  },
  en: {
    title: 'Projects',
    introduction: (
      <p>
        Here you will find some of the projects I have worked on, each
        reflecting my skills, my focus on{' '}
        <span className='text-highlightA'>
          creating functional and well-structured solutions,
        </span>{' '}
        and my commitment to{' '}
        <span className='text-highlightB'>best practices</span> in development.
      </p>
    ),
    projects: [
      {
        title: 'LinkItly',
        subtitle: 'SaaS (Beta · Coming soon)',
        description: 'Built with React, TypeScript, Material UI and Supabase, LinkItly is a SaaS appointment management platform designed for independent professionals. It allows configuring weekly availability, service types and blocked time slots, and generates a personalized public booking page per slug where clients can book appointments in real time without signing up. It includes an admin panel with a weekly calendar view and booking list, a notification system, automatic confirmation emails to both the client and the professional, and client management. The backend is built on PostgreSQL with Row Level Security, SECURITY DEFINER RPC functions and public views to safely expose only the necessary data to anonymous users.',
        url: 'https://linkitly-webapp.vercel.app/',
        image: ProjectImg0
      },
      {
        title: 'BackLab Strategies',
        subtitle: 'Frontend',
        description:
          'Built with React, JavaScript, CSS and using libraries like Toastify and EmailJS, this website follows a design provided by a UX/UI team under the pixel-perfect methodology. It integrates advanced animations created with CSS and the Intersection Observer API to deliver a precise and visually appealing experience. Features include a contact form with options, online appointment scheduling, and language selection (EN/ES), demonstrating a user-centered approach.',
        url: 'https://backlab-strategies.vercel.app',
        image: ProjectImg1
      },
      {
        title: 'Nexo',
        subtitle: 'Frontend',
        description:
          'Built with React, TypeScript, and Material UI, Nexo is an admin panel that provides efficient and centralized management of clients, products, and invoices through interactive tables. It also includes integrated mini-apps such as a Tasker and a Calendar, both featuring drag-and-drop functionality. In addition, it presents key metrics on a main dashboard and an analytics section with dynamic charts. It is currently connected to a mock server using JSON Server for data management and test user authentication.',
        url: 'https://gadget-alley.vercel.app',
        image: ProjectImg3
      },
      {
        title: 'Notebook Depot',
        subtitle: 'Frontend',
        description:
          "Developed with React, JavaScript, and CSS, using libraries such as Toastify, EmailJS, and Stripe, this project is a demo of an online store specialized in laptops. It features a simple product catalog with an advanced shopping cart to manage selected items. Its functionalities include cart notifications, a dynamic loader for product loading, favorites selection, order management, and a user system. It uses a database hosted on Firebase to store and manage the site's data. I am currently developing the mobile version.",
        url: 'https://notebook-depot.vercel.app/',
        image: ProjectImg2
      },
      {
        title: 'Beyond Time',
        subtitle: 'Frontend',
        description:
          'Built with React, JavaScript, and CSS, Beyond Time is a web application with native animations that transforms your birth date into a series of curious and visual insights about your life. Based on your age, it estimates things like the total number of heartbeats, the kilowatts your body has generated, how many sunrises you’ve experienced, and how many minutes have passed since you were born, among others. The experience concludes with a “life clock” — an analog representation of your age within an average 80-year lifespan, symbolically showing what stage of life you’re in, as if it were a time of day.',
        url: 'https://btimeproject.vercel.app',
        image: ProjectImg4
      },
      {
        title: 'E-commerce API REST',
        subtitle: 'Backend',
        description:
          'Built with Java, Spring Boot and JPA, this RESTful API manages Products, Orders, Invoices, and Customers, implementing CRUD operations along with more advanced features such as invoice creation linked to customers and product search by code or brand. The application uses DTOs and mappers to prevent infinite recursion in bidirectional relationships and applies generic controllers following the DRY principle to keep the architecture clean and maintainable. The API also exposes a health check endpoint that reports the service status and is periodically monitored with UptimeRobot to detect potential downtime due to inactivity. A simple frontend built with React, TypeScript, and MUI was developed to demonstrate the main functionalities. The API is fully documented with Swagger to simplify testing and improve the developer experience.',
        url: 'https://java-jpa-sb-ecommerceapirest-demo.onrender.com/swagger-ui/index.html',
        image: ProjectImg5
      }
    ]
  }
}
